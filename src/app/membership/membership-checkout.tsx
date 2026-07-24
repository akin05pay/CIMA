"use client";

import { useState } from "react";

import type { PlanCode } from "@/lib/membership/plans";

const plans: Array<{
  code: PlanCode;
  name: string;
  audience: string;
  benefits: string[];
}> = [
  {
    code: "citizen",
    name: "Citizen",
    audience: "Para participar da rede global CIMA.",
    benefits: [
      "Identidade digital de membro",
      "Acesso à comunidade e conteúdos",
      "Rede inicial de benefícios"
    ]
  },
  {
    code: "builder",
    name: "Builder",
    audience: "Para profissionais, empreendedores e articuladores.",
    benefits: [
      "Tudo do plano Citizen",
      "Acesso prioritário a programas",
      "Conexões comerciais e institucionais"
    ]
  },
  {
    code: "patron",
    name: "Patron",
    audience: "Para quem quer sustentar a construção institucional.",
    benefits: [
      "Tudo do plano Builder",
      "Relatórios ampliados de impacto",
      "Círculos institucionais de apoiadores"
    ]
  }
];

export function MembershipCheckout() {
  const [selectedPlan, setSelectedPlan] = useState<PlanCode>("citizen");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [endowmentAccepted, setEndowmentAccepted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function startCheckout() {
    setError(null);

    if (!termsAccepted || !endowmentAccepted) {
      setError("Aceite os termos e a declaração de destinação antes de continuar.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          planCode: selectedPlan,
          acceptedMembershipTerms: true,
          acceptedEndowmentDisclosure: true,
          membershipTermsVersion: "membership-terms-v1-draft",
          endowmentDisclosureVersion: "endowment-disclosure-v1-draft"
        })
      });

      const result = (await response.json()) as {
        checkoutUrl?: string;
        error?: string;
      };

      if (!response.ok || !result.checkoutUrl) {
        throw new Error(result.error ?? "Não foi possível abrir o checkout.");
      }

      window.location.assign(result.checkoutUrl);
    } catch (checkoutError) {
      setError(
        checkoutError instanceof Error
          ? checkoutError.message
          : "Erro inesperado ao iniciar a associação."
      );
      setLoading(false);
    }
  }

  return (
    <>
      <div className="plan-grid">
        {plans.map((plan) => (
          <article
            className="card plan"
            key={plan.code}
            style={{
              outline:
                selectedPlan === plan.code ? "2px solid var(--accent)" : "none"
            }}
          >
            <div>
              <p className="kicker">CIMA {plan.name}</p>
              <h3>{plan.audience}</h3>
              <ul>
                {plan.benefits.map((benefit) => (
                  <li key={benefit}>{benefit}</li>
                ))}
              </ul>
            </div>
            <button
              className={selectedPlan === plan.code ? "button primary" : "button"}
              type="button"
              onClick={() => setSelectedPlan(plan.code)}
            >
              {selectedPlan === plan.code ? "Selecionado" : "Selecionar"}
            </button>
          </article>
        ))}
      </div>

      <div className="panel" style={{ marginTop: 24 }}>
        <div className="form-stack">
          <label className="checkbox-row">
            <input
              type="checkbox"
              checked={termsAccepted}
              onChange={(event) => setTermsAccepted(event.target.checked)}
            />
            <span>
              Li e aceito os Termos de Associação CIMA. Entendo que a Fundação não
              concede cidadania, passaporte, visto ou qualquer direito soberano.
            </span>
          </label>

          <label className="checkbox-row">
            <input
              type="checkbox"
              checked={endowmentAccepted}
              onChange={(event) => setEndowmentAccepted(event.target.checked)}
            />
            <span>
              Autorizo a divisão da mensalidade conforme política aprovada e
              divulgada, incluindo a parcela destinada à formação patrimonial do
              endowment. Meu saldo da conta global não integra essa destinação.
            </span>
          </label>

          {error ? <p role="alert">{error}</p> : null}

          <button
            className="button primary"
            type="button"
            onClick={startCheckout}
            disabled={loading}
          >
            {loading ? "Abrindo checkout..." : "Continuar para pagamento"}
          </button>
        </div>
      </div>
    </>
  );
}
