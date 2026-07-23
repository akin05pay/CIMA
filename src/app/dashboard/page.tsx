import Link from "next/link";
import { redirect } from "next/navigation";

import { createSupabaseServerClient } from "@/lib/supabase/server";

import { BillingPortalButton } from "./billing-portal-button";

const zeroDecimalCurrencies = new Set([
  "bif",
  "clp",
  "djf",
  "gnf",
  "jpy",
  "kmf",
  "krw",
  "mga",
  "pyg",
  "rwf",
  "ugx",
  "vnd",
  "vuv",
  "xaf",
  "xof",
  "xpf"
]);

function formatMinorUnits(amount: number, currency: string): string {
  const normalizedCurrency = currency.toLowerCase();
  const divisor = zeroDecimalCurrencies.has(normalizedCurrency) ? 1 : 100;

  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: currency.toUpperCase()
  }).format(amount / divisor);
}

const bucketLabels: Record<string, string> = {
  akin_services: "Serviços Akin",
  cima_operations: "Operação Fundação CIMA",
  endowment_contribution: "Contribuição ao endowment"
};

export default async function DashboardPage() {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user }
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/sign-in");
  }

  const [{ data: membership }, { data: ledgerSummary }] = await Promise.all([
    supabase
      .from("memberships")
      .select("plan_code,status,current_period_end")
      .eq("user_id", user.id)
      .order("created_at", { ascending: false })
      .limit(1)
      .maybeSingle(),
    supabase
      .from("member_ledger_summary")
      .select("bucket,currency,amount")
      .eq("user_id", user.id)
  ]);

  return (
    <main>
      <div className="container nav">
        <Link href="/" className="brand">
          CIMA
        </Link>
        <Link href="/membership" className="button">
          Ver planos
        </Link>
      </div>

      <section className="container dashboard-shell">
        <p className="eyebrow">Painel do membro</p>
        <h1 style={{ fontSize: "clamp(3rem, 7vw, 5.4rem)" }}>
          Transparência começa no seu pagamento.
        </h1>
        <p className="lead">
          Aqui você acompanha sua associação e a destinação contabilizada de cada
          mensalidade. Transferências ao veículo patrimonial aparecem separadamente
          após execução e reconciliação.
        </p>

        <div className="dashboard-grid" style={{ marginTop: 34 }}>
          <article className="card">
            <p className="kicker">Associação</p>
            <h3>{membership?.plan_code ?? "Sem plano ativo"}</h3>
            <p className="muted">Status: {membership?.status ?? "não iniciado"}</p>
            {membership ? <BillingPortalButton /> : null}
          </article>

          {(ledgerSummary ?? []).map((entry) => (
            <article className="card" key={`${entry.bucket}-${entry.currency}`}>
              <p className="kicker">{bucketLabels[entry.bucket] ?? entry.bucket}</p>
              <p className="amount">
                {formatMinorUnits(Number(entry.amount), entry.currency)}
              </p>
              <p className="muted">Total acumulado registrado no ledger.</p>
            </article>
          ))}
        </div>

        {!ledgerSummary?.length ? (
          <div className="notice" style={{ marginTop: 24 }}>
            Ainda não existem mensalidades conciliadas para esta conta.
          </div>
        ) : null}
      </section>
    </main>
  );
}
