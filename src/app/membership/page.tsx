import Link from "next/link";

import { MembershipCheckout } from "./membership-checkout";

export default function MembershipPage() {
  return (
    <main>
      <div className="container nav">
        <Link href="/" className="brand">
          CIMA
        </Link>
        <div className="actions">
          <Link href="/sign-in" className="button">
            Entrar
          </Link>
        </div>
      </div>

      <section className="container section">
        <p className="eyebrow">Associação CIMA</p>
        <h1 style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)" }}>
          Pertencer também é construir.
        </h1>
        <p className="lead">
          Escolha como participar. Os preços e percentuais finais serão publicados
          somente após aprovação institucional, jurídica, fiscal e regulatória.
        </p>

        <div className="notice" style={{ margin: "28px 0" }}>
          Esta interface está em modo de estruturação. Nenhum plano deve ser ativado
          no Stripe enquanto a política de alocação estiver marcada como rascunho.
        </div>

        <MembershipCheckout />
      </section>
    </main>
  );
}
