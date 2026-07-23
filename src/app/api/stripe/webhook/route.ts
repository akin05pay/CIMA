import { NextRequest, NextResponse } from "next/server";
import type Stripe from "stripe";

import { getServerEnv } from "@/lib/env";
import { getSupabaseAdmin } from "@/lib/supabase/admin";
import { getStripe } from "@/lib/stripe";

export const runtime = "nodejs";

function getId(value: string | { id: string } | null | undefined): string | null {
  if (!value) return null;
  return typeof value === "string" ? value : value.id;
}

function getInvoiceSubscriptionId(invoice: Stripe.Invoice): string | null {
  const candidate = invoice as unknown as {
    subscription?: string | { id: string } | null;
    parent?: {
      subscription_details?: {
        subscription?: string | { id: string } | null;
      } | null;
    } | null;
  };

  return (
    getId(candidate.subscription) ??
    getId(candidate.parent?.subscription_details?.subscription)
  );
}

function getSubscriptionPeriodEnd(subscription: Stripe.Subscription): string | null {
  const itemPeriodEnd = subscription.items.data[0]?.current_period_end;
  return itemPeriodEnd ? new Date(itemPeriodEnd * 1000).toISOString() : null;
}

async function markEvent(
  stripeEventId: string,
  status: "processed" | "failed",
  errorMessage?: string
) {
  const admin = getSupabaseAdmin();

  await admin
    .from("stripe_events")
    .update({
      status,
      processed_at: new Date().toISOString(),
      error_message: errorMessage ?? null
    })
    .eq("stripe_event_id", stripeEventId);
}

async function handleCheckoutCompleted(session: Stripe.Checkout.Session) {
  const userId = session.metadata?.user_id ?? session.client_reference_id;
  const planCode = session.metadata?.plan_code;
  const customerId = getId(session.customer);
  const subscriptionId = getId(session.subscription);

  if (!userId || !planCode || !customerId || !subscriptionId) {
    throw new Error("Checkout session is missing required CIMA metadata.");
  }

  const admin = getSupabaseAdmin();

  const { error: customerError } = await admin.from("billing_customers").upsert(
    {
      user_id: userId,
      stripe_customer_id: customerId,
      updated_at: new Date().toISOString()
    },
    { onConflict: "user_id" }
  );

  if (customerError) throw customerError;

  const { error: membershipError } = await admin.from("memberships").upsert(
    {
      user_id: userId,
      plan_code: planCode,
      stripe_customer_id: customerId,
      stripe_subscription_id: subscriptionId,
      status: "active",
      updated_at: new Date().toISOString()
    },
    { onConflict: "stripe_subscription_id" }
  );

  if (membershipError) throw membershipError;
}

async function handleInvoicePaid(invoice: Stripe.Invoice, stripeEventId: string) {
  const subscriptionId = getInvoiceSubscriptionId(invoice);

  if (!subscriptionId) {
    throw new Error("Paid invoice has no subscription reference.");
  }

  const subscription = await getStripe().subscriptions.retrieve(subscriptionId);
  const userId = subscription.metadata.user_id;
  const planCode = subscription.metadata.plan_code;
  const allocationPolicyVersion = subscription.metadata.allocation_policy_version;

  if (!userId || !planCode || !allocationPolicyVersion) {
    throw new Error("Subscription is missing CIMA allocation metadata.");
  }

  const { error } = await getSupabaseAdmin().rpc("post_paid_invoice", {
    p_stripe_event_id: stripeEventId,
    p_stripe_invoice_id: invoice.id,
    p_stripe_subscription_id: subscriptionId,
    p_user_id: userId,
    p_plan_code: planCode,
    p_policy_version: allocationPolicyVersion,
    p_currency: invoice.currency,
    p_amount_paid: invoice.amount_paid
  });

  if (error) throw error;
}

async function handleInvoicePaymentFailed(invoice: Stripe.Invoice) {
  const subscriptionId = getInvoiceSubscriptionId(invoice);
  if (!subscriptionId) return;

  const { error } = await getSupabaseAdmin()
    .from("memberships")
    .update({
      status: "past_due",
      updated_at: new Date().toISOString()
    })
    .eq("stripe_subscription_id", subscriptionId);

  if (error) throw error;
}

async function handleSubscriptionChange(subscription: Stripe.Subscription) {
  const userId = subscription.metadata.user_id;
  const planCode = subscription.metadata.plan_code;
  const customerId = getId(subscription.customer);

  if (!userId || !planCode || !customerId) return;

  const { error } = await getSupabaseAdmin().from("memberships").upsert(
    {
      user_id: userId,
      plan_code: planCode,
      stripe_customer_id: customerId,
      stripe_subscription_id: subscription.id,
      status: subscription.status,
      current_period_end: getSubscriptionPeriodEnd(subscription),
      updated_at: new Date().toISOString()
    },
    { onConflict: "stripe_subscription_id" }
  );

  if (error) throw error;
}

export async function POST(request: NextRequest) {
  const signature = request.headers.get("stripe-signature");

  if (!signature) {
    return NextResponse.json({ error: "Missing Stripe signature." }, { status: 400 });
  }

  const rawBody = await request.text();
  let event: Stripe.Event;

  try {
    event = getStripe().webhooks.constructEvent(
      rawBody,
      signature,
      getServerEnv().STRIPE_WEBHOOK_SECRET
    );
  } catch {
    return NextResponse.json({ error: "Invalid Stripe signature." }, { status: 400 });
  }

  const admin = getSupabaseAdmin();
  const { data: claimed, error: claimError } = await admin.rpc(
    "claim_stripe_event",
    {
      p_stripe_event_id: event.id,
      p_event_type: event.type,
      p_payload: event as unknown as Record<string, unknown>
    }
  );

  if (claimError) {
    return NextResponse.json({ error: "Unable to claim event." }, { status: 500 });
  }

  if (!claimed) {
    return NextResponse.json({ received: true, duplicate: true });
  }

  try {
    switch (event.type) {
      case "checkout.session.completed":
        await handleCheckoutCompleted(event.data.object);
        break;
      case "invoice.paid":
        await handleInvoicePaid(event.data.object, event.id);
        break;
      case "invoice.payment_failed":
        await handleInvoicePaymentFailed(event.data.object);
        break;
      case "customer.subscription.updated":
      case "customer.subscription.deleted":
        await handleSubscriptionChange(event.data.object);
        break;
      default:
        break;
    }

    await markEvent(event.id, "processed");
    return NextResponse.json({ received: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown webhook error";
    await markEvent(event.id, "failed", message);
    return NextResponse.json({ error: "Webhook processing failed." }, { status: 500 });
  }
}
