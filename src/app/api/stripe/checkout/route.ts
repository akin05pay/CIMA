import { randomBytes } from "node:crypto";

import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

import { getServerEnv } from "@/lib/env";
import {
  getStripePriceId,
  planCodeSchema
} from "@/lib/membership/plans";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { getStripe } from "@/lib/stripe";

const checkoutSchema = z.object({
  planCode: planCodeSchema,
  acceptedMembershipTerms: z.literal(true),
  acceptedEndowmentDisclosure: z.literal(true),
  membershipTermsVersion: z.string().min(1),
  endowmentDisclosureVersion: z.string().min(1)
});

function integrationIdentifier(): string {
  const suffix = randomBytes(8)
    .toString("base64url")
    .replace(/[^a-zA-Z]/g, "")
    .slice(0, 8)
    .padEnd(8, "x");

  return `cima-web-${suffix}`;
}

export async function POST(request: NextRequest) {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
    error: authError
  } = await supabase.auth.getUser();

  if (authError || !user || !user.email) {
    return NextResponse.json({ error: "Authentication required." }, { status: 401 });
  }

  const parsedBody = checkoutSchema.safeParse(await request.json());

  if (!parsedBody.success) {
    return NextResponse.json(
      { error: "Invalid checkout request.", details: parsedBody.error.flatten() },
      { status: 400 }
    );
  }

  const env = getServerEnv();
  const stripe = getStripe();
  const {
    planCode,
    membershipTermsVersion,
    endowmentDisclosureVersion
  } = parsedBody.data;

  const forwardedFor = request.headers.get("x-forwarded-for");
  const ipAddress = forwardedFor?.split(",")[0]?.trim() ?? null;
  const userAgent = request.headers.get("user-agent");

  const { error: consentError } = await supabase.from("consents").upsert(
    [
      {
        user_id: user.id,
        consent_type: "membership_terms",
        document_version: membershipTermsVersion,
        accepted_at: new Date().toISOString(),
        ip_address: ipAddress,
        user_agent: userAgent
      },
      {
        user_id: user.id,
        consent_type: "endowment_disclosure",
        document_version: endowmentDisclosureVersion,
        accepted_at: new Date().toISOString(),
        ip_address: ipAddress,
        user_agent: userAgent
      }
    ],
    {
      onConflict: "user_id,consent_type,document_version"
    }
  );

  if (consentError) {
    return NextResponse.json(
      { error: "Unable to register consent." },
      { status: 500 }
    );
  }

  const { data: billingCustomer } = await supabase
    .from("billing_customers")
    .select("stripe_customer_id")
    .eq("user_id", user.id)
    .maybeSingle();

  const session = await stripe.checkout.sessions.create({
    mode: "subscription",
    integration_identifier: integrationIdentifier(),
    line_items: [
      {
        price: getStripePriceId(planCode),
        quantity: 1
      }
    ],
    client_reference_id: user.id,
    customer: billingCustomer?.stripe_customer_id ?? undefined,
    customer_email: billingCustomer ? undefined : user.email,
    success_url: `${env.NEXT_PUBLIC_APP_URL}/dashboard?checkout=success&session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${env.NEXT_PUBLIC_APP_URL}/membership?checkout=cancelled`,
    metadata: {
      user_id: user.id,
      plan_code: planCode,
      allocation_policy_version: env.CIMA_ALLOCATION_POLICY_VERSION
    },
    subscription_data: {
      metadata: {
        user_id: user.id,
        plan_code: planCode,
        allocation_policy_version: env.CIMA_ALLOCATION_POLICY_VERSION
      }
    }
  });

  return NextResponse.json({ checkoutUrl: session.url });
}
