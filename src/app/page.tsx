import Link from "next/link";

const pillars = [
  {
    title: "Pertencimento verificável",
    text: "Uma identidade de membro que conecta história, comunidade, direitos disponíveis e oportunidades reais sem substituir documentos soberanos."
  },
  {
    title: "Mobilidade e cooperação",
    text: "Programas com governos, câmaras e parceiros para facilitar residência, formação, negócios e circulação da diáspora dentro da lei."
  },
  {
    title: "Patrimônio intergeracional",
    text: "Mensalidades transparentes alimentam serviços, operação social e uma contribuição patrimonial destinada ao endowment da Fundação CIMA."
  }
];

export default function HomePage() {
  return (
    <main>
      <div className="container nav">
        <Link href="/" className="brand">
          CIMA
        </Link>
        <nav className="nav-links" aria-label="Navegação principal">
          <a href="#visao">Visão</a>
          <a href="#modelo">Modelo</a>
          <Link href="/membership">Associação</Link>
        </nav>
        <div className="actions">
          <Link href="/sign-in" className="button">
            Entrar
          </Link>
          <Link href="/membership" className="button primary">
            Fazer parte
          </Link>
        </div>
      </div>

      <section className="container hero">
        <div>
          <p className="eyebrow">Cidadania Múltipla Africana</p>
          <h1>Uma casa global para a diáspora africana.</h1>
          <p className="lead">
            O CIMA nasce para transformar ancestralidade em pertencimento,
            cooperação econômica, mobilidade e patrimônio coletivo. Não promete
            cidadania estatal. Constrói as pontes institucionais para que direitos,
            capital e oportunidades circulem com dignidade.
          </p>
          <div className="actions">
            <Link href="/membership" className="button primary">
              Conhecer os planos
            </Link>
            <a href="#modelo" className="button">
              Entender o modelo
            </a>
          </div>
        </div>

        <aside className="card hero-card" aria-label="Resumo do modelo CIMA">
          <p className="kicker">Arquitetura inicial</p>
          <div className="metric">
            <span className="muted">Instituição</span>
            <strong>Fundação CIMA</strong>
          </div>
          <div className="metric">
            <span className="muted">Parceira tecnológica e financeira</span>
            <strong>Akin</strong>
          </div>
          <div className="metric">
            <span className="muted">Princípio financeiro</span>
            <strong>Transparência por lançamento</strong>
          </div>
        </aside>
      </section>

      <section id="visao" className="section">
        <div className="container">
          <p className="eyebrow">A visão</p>
          <h2>Diplomacia cidadã com limites jurídicos claros.</h2>
          <p className="lead">
            O CIMA atua como plataforma de facilitação institucional, cultural,
            econômica e documental. Governos continuam soberanos. A Fundação
            organiza a demanda da diáspora, cria programas, mede impacto e conecta
            pessoas a parceiros habilitados.
          </p>
          <div className="grid-3" style={{ marginTop: 34 }}>
            {pillars.map((pillar) => (
              <article className="card" key={pillar.title}>
                <h3>{pillar.title}</h3>
                <p className="muted">{pillar.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="modelo" className="section">
        <div className="container panel">
          <p className="eyebrow">A mensalidade não é uma caixa-preta</p>
          <h2>Três destinos. Um único comprovante.</h2>
          <p className="lead">
            Cada pagamento gera lançamentos separados para a prestação de serviços
            da Akin, o custeio da Fundação CIMA e a contribuição destinada ao fundo
            patrimonial. Os percentuais dependem de política formal aprovada e
            versionada.
          </p>
          <div className="notice">
            O saldo mantido pelo usuário em sua conta global não é doado nem
            transferido ao CIMA. Apenas a mensalidade contratada segue a política de
            alocação aceita pelo membro.
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          CIMA — infraestrutura transnacional para a diáspora africana. Projeto em
          estruturação institucional e regulatória.
        </div>
      </footer>
    </main>
  );
}
