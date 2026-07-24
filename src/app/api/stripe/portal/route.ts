import { NextResponse } from "next/server";

import { getServerEnv } from "@/lib/env";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { getStripe } from "@/lib/stripe";

export async function POST() {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
    error: authError
  } = await supabase.auth.getUser();

  if (authError || !user) {
    return NextResponse.json({ error: "Authentication required." }, { status: 401 });
  }

  const { data: billingCustomer, error } = await supabase
    .from("billing_customers")
    .select("stripe_customer_id")
    .eq("user_id", user.id)
    .maybeSingle();

  if (error || !billingCustomer) {
    return NextResponse.json(
      { error: "No billing profile found for this member." },
      { status: 404 }
    );
  }

  const session = await getStripe().billingPortal.sessions.create({
    customer: billingCustomer.stripe_customer_id,
    return_url: `${getServerEnv().NEXT_PUBLIC_APP_URL}/dashboard`
  });

  return NextResponse.json({ portalUrl: session.url });
}
