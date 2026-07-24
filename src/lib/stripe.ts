import "server-only";

import Stripe from "stripe";

import { getServerEnv } from "@/lib/env";

let stripeClient: Stripe | null = null;

export function getStripe(): Stripe {
  if (!stripeClient) {
    stripeClient = new Stripe(getServerEnv().STRIPE_SECRET_KEY, {
      apiVersion: "2026-06-24.dahlia",
      appInfo: {
        name: "CIMA Platform",
        version: "0.1.0"
      }
    });
  }

  return stripeClient;
}
