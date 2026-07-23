import { z } from "zod";

import { getServerEnv } from "@/lib/env";

export const planCodeSchema = z.enum(["citizen", "builder", "patron"]);
export type PlanCode = z.infer<typeof planCodeSchema>;

export const membershipPlans: Record<
  PlanCode,
  {
    name: string;
    description: string;
  }
> = {
  citizen: {
    name: "CIMA Citizen",
    description: "Acesso à comunidade, identidade de membro e rede de benefícios."
  },
  builder: {
    name: "CIMA Builder",
    description: "Participação ampliada em programas, projetos e hubs da diáspora."
  },
  patron: {
    name: "CIMA Patron",
    description: "Apoio institucional recorrente e acesso a relatórios de impacto."
  }
};

export function getStripePriceId(planCode: PlanCode): string {
  const env = getServerEnv();

  const prices: Record<PlanCode, string> = {
    citizen: env.STRIPE_PRICE_CIMA_CITIZEN_MONTHLY,
    builder: env.STRIPE_PRICE_CIMA_BUILDER_MONTHLY,
    patron: env.STRIPE_PRICE_CIMA_PATRON_MONTHLY
  };

  return prices[planCode];
}
