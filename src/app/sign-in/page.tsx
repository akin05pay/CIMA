import Link from "next/link";

import { sendMagicLink } from "./actions";

type SignInPageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export default async function SignInPage({ searchParams }: SignInPageProps) {
  const params = await searchParams;
  const sent = params.sent === "1";
  const error = typeof params.error === "string" ? params.error : null;

  return (
    <main>
      <div className="container nav">
        <Link href="/" className="brand">
          CIMA
        </Link>
      </div>

      <section className="container section" style={{ maxWidth: 680 }}>
        <p className="eyebrow">Área do membro</p>
        <h1 style={{ fontSize: "clamp(3rem, 8vw, 5.4rem)" }}>Entrar sem senha.</h1>
        <p className="lead">
          Informe seu e-mail. Enviaremos um link seguro para abrir sua área CIMA.
        </p>

        <form action={sendMagicLink} className="panel form-stack">
          <label className="field">
            <span>E-mail</span>
            <input
              className="input"
              type="email"
              name="email"
              autoComplete="email"
              required
              placeholder="voce@exemplo.com"
            />
          </label>
          <button className="button primary" type="submit">
            Enviar link de acesso
          </button>

          {sent ? (
            <p className="notice" role="status">
              Link enviado. Verifique sua caixa de entrada e o spam.
            </p>
          ) : null}

          {error ? (
            <p role="alert">
              Não foi possível enviar o link. Revise o e-mail e tente novamente.
            </p>
          ) : null}
        </form>
      </section>
    </main>
  );
}
