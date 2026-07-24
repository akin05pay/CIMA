import Link from "next/link";

const justicePillars = [
  {
    number: "01",
    title: "Verdade histórica",
    text: "Reunir documentos, memórias, genealogias, territórios, saberes e evidências sobre séculos de escravização, colonialismo, expropriação e apagamento."
  },
  {
    number: "02",
    title: "Reconhecimento identitário",
    text: "Fortalecer o direito de africanos e afrodescendentes à memória, ao pertencimento, à autoidentificação e à reconexão com comunidades e territórios."
  },
  {
    number: "03",
    title: "Justiça reparatória",
    text: "Transformar reconhecimento em políticas, patrimônio, educação, saúde, mobilidade, tecnologia, capital e oportunidades concretas."
  },
  {
    number: "04",
    title: "Reconstrução institucional",
    text: "Criar instituições permanentes dirigidas pela própria diáspora, capazes de produzir conhecimento, representar interesses e sustentar desenvolvimento por gerações."
  }
];

const audiences = [
  {
    code: "MEM",
    eyebrow: "Comunidade global",
    title: "Pessoas e famílias",
    description:
      "Pertencimento, identidade, formação, mobilidade, rede econômica e participação em uma instituição construída pela própria diáspora.",
    items: [
      "Associação global e CIMA ID",
      "Reconstrução de história e genealogia",
      "Formação, mobilidade e oportunidades",
      "Assembleias, propostas e representação regional"
    ],
    action: "Tornar-se membro fundador",
    href: "/membership"
  },
  {
    code: "GOV",
    eyebrow: "Cooperação pública",
    title: "Governos e cidades",
    description:
      "Infraestrutura para transformar políticas de diáspora, igualdade racial, retorno, cultura e desenvolvimento em programas executáveis e mensuráveis.",
    items: [
      "Programas oficiais de reconexão e retorno",
      "Mapeamento voluntário de competências da diáspora",
      "Corredores de estudo, negócios e investimento",
      "Indicadores de impacto e prestação de contas"
    ],
    action: "Estruturar uma parceria pública",
    href: "#fundacao"
  },
  {
    code: "ENT",
    eyebrow: "Economia da diáspora",
    title: "Empresas e investidores",
    description:
      "Uma rede confiável para contratar, vender, comprar, investir e formar cadeias de valor entre África, Brasil e comunidades afrodescendentes.",
    items: [
      "Diretório de empresas verificadas",
      "Talentos, fornecedores e compradores",
      "Missões comerciais e corredores econômicos",
      "Originação de projetos e capital de impacto"
    ],
    action: "Entrar na rede econômica",
    href: "#ecossistema"
  },
  {
    code: "MLT",
    eyebrow: "Infraestrutura de impacto",
    title: "Fundos e multilaterais",
    description:
      "Execução, rastreabilidade e governança para programas de reparação, desenvolvimento, educação, inclusão produtiva e fortalecimento institucional.",
    items: [
      "Grants, blended finance e capital catalítico",
      "Programas por território e população",
      "Metas, indicadores e auditoria independente",
      "Dados de impacto e governança compartilhada"
    ],
    action: "Construir um programa de impacto",
    href: "#genesis"
  }
];

const services = [
  {
    number: "01",
    name: "CIMA Identity",
    title: "Identidade, memória e pertencimento",
    text: "Credencial privada de membro, trajetória, consentimentos, vínculos comunitários e acesso a programas da Fundação.",
    tags: ["CIMA ID", "Memória", "Privacidade"]
  },
  {
    number: "02",
    name: "CIMA Mobility",
    title: "Reconexão, retorno e circulação",
    text: "Jornadas com governos e parceiros para estudo, turismo de origem, residência, trabalho, empreendedorismo e cooperação.",
    tags: ["Retorno", "Estudo", "Negócios"]
  },
  {
    number: "03",
    name: "CIMA Money",
    title: "Infraestrutura financeira global",
    text: "Conta, cartão, pagamentos e câmbio oferecidos por parceiros autorizados e integrados à experiência dos membros.",
    tags: ["Conta global", "Cartão", "Câmbio"]
  },
  {
    number: "04",
    name: "CIMA Trade",
    title: "Poder econômico em rede",
    text: "Empresas, profissionais, fornecedores, compradores, investidores e projetos conectados pela confiança e pela identidade comum.",
    tags: ["B2B", "Capital", "Talentos"]
  },
  {
    number: "05",
    name: "CIMA Learning",
    title: "Conhecimento que reconstrói",
    text: "História, idiomas, tecnologia, educação financeira, liderança e formação profissional conectadas a oportunidades reais.",
    tags: ["História", "Carreira", "Tecnologia"]
  },
  {
    number: "06",
    name: "CIMA Legacy",
    title: "Patrimônio para as próximas gerações",
    text: "Fundo patrimonial segregado, programas permanentes e transparência para transformar contribuições atuais em capacidade institucional futura.",
    tags: ["Endowment", "Reparação", "Impacto"]
  }
];

const governance = [
  {
    number: "01",
    title: "Assembleia Global de Membros",
    text: "Uma pessoa verificada, uma voz comunitária para prioridades, representantes, consultas e acompanhamento da missão."
  },
  {
    number: "02",
    title: "Conselhos Regionais",
    text: "Representação territorial da diáspora com mandatos, diversidade, prestação de contas e conexão permanente com as comunidades."
  },
  {
    number: "03",
    title: "Conselho de Reparação e Memória",
    text: "Historiadores, juristas, lideranças, pesquisadores e instituições orientando verdade, reconhecimento e justiça reparatória."
  },
  {
    number: "04",
    title: "Conselho de Integridade",
    text: "Proteção da missão, direitos humanos, privacidade, independência institucional e prevenção de captura econômica ou política."
  }
];

const genesisLayers = [
  {
    code: "F",
    title: "Genesis Funding",
    status: "Capital fundador",
    text: "Estrutura de financiamento para tecnologia, pesquisa, programas-piloto, CIMA Hubs e formação do patrimônio institucional."
  },
  {
    code: "V",
    title: "CIMA Voice",
    status: "Governança comunitária",
    text: "Credencial de participação para propostas, consultas, representação e orçamento participativo, distribuída por vínculo e contribuição."
  },
  {
    code: "L",
    title: "Genesis Legacy",
    status: "Memória permanente",
    text: "Registro verificável de membros, doadores, organizações e parceiros que ajudaram a fundar e sustentar a instituição."
  }
];

export default function HomePage() {
  return (
    <main className="site-shell repair-site">
      <header className="topbar">
        <div className="container nav nav-premium">
          <Link href="/" className="brand brand-lockup" aria-label="CIMA — início">
            <span className="brand-symbol">C</span>
            <span>
              CIMA
              <small>Cidadania Múltipla Africana</small>
            </span>
          </Link>

          <nav className="nav-links" aria-label="Navegação principal">
            <a href="#manifesto">Manifesto</a>
            <a href="#reparacao">Reparação</a>
            <a href="#propostas">Propostas</a>
            <a href="#ecossistema">Ecossistema</a>
            <a href="#genesis">Genesis</a>
          </nav>

          <div className="actions nav-actions">
            <Link href="/sign-in" className="button button-ghost">
              Entrar
            </Link>
            <Link href="/membership" className="button primary">
              Fundar junto
            </Link>
          </div>
        </div>
      </header>

      <section className="container hero hero-premium repair-hero">
        <div className="hero-copy">
          <div className="status-pill">
            <span className="pulse" /> Instituição global em formação
          </div>
          <p className="eyebrow">Fundação CIMA — Cidadania Múltipla Africana</p>
          <h1>
            Reparar o que foi arrancado. <span>Reconstruir o que tentaram apagar.</span>
          </h1>
          <p className="lead hero-lead repair-lead">
            Uma instituição global criada para transformar memória, pertencimento e
            identidade africana em representação, mobilidade, poder econômico,
            justiça reparatória e patrimônio intergeracional.
          </p>
          <div className="repair-declaration">
            <strong>A diáspora não é público-alvo.</strong>
            <span>É fundadora, dirigente, financiadora e protagonista do CIMA.</span>
          </div>
          <div className="actions hero-actions">
            <Link href="/membership" className="button primary button-large">
              Ser membro fundador <span aria-hidden="true">↗</span>
            </Link>
            <a href="#manifesto" className="button button-large">
              Conhecer a causa
            </a>
          </div>
          <div className="hero-proof repair-proof">
            <div>
              <strong>África</strong>
              <span>origem, memória e futuro</span>
            </div>
            <div>
              <strong>Diáspora</strong>
              <span>comunidade global protagonista</span>
            </div>
            <div>
              <strong>Legado</strong>
              <span>instituição para gerações</span>
            </div>
          </div>
        </div>

        <div className="repair-hero-visual" aria-label="Arquitetura institucional CIMA">
          <div className="repair-orbit repair-orbit-one" />
          <div className="repair-orbit repair-orbit-two" />
          <div className="repair-core">
            <span className="brand-symbol repair-core-symbol">C</span>
            <strong>FUNDAÇÃO CIMA</strong>
            <small>Missão • Comunidade • Legado</small>
          </div>
          <div className="repair-node repair-node-one">
            <span>01</span>
            <strong>Reconhecimento</strong>
            <small>Identidade e memória</small>
          </div>
          <div className="repair-node repair-node-two">
            <span>02</span>
            <strong>Reparação</strong>
            <small>Justiça e reconstrução</small>
          </div>
          <div className="repair-node repair-node-three">
            <span>03</span>
            <strong>Capital</strong>
            <small>Autonomia econômica</small>
          </div>
          <div className="repair-node repair-node-four">
            <span>04</span>
            <strong>Governança</strong>
            <small>Poder civil compartilhado</small>
          </div>
        </div>
      </section>

      <section className="repair-banner">
        <div className="container repair-banner-row">
          <span>Uma instituição construída para</span>
          <strong>VERDADE</strong><i />
          <strong>RECONHECIMENTO</strong><i />
          <strong>JUSTIÇA</strong><i />
          <strong>RECONSTRUÇÃO</strong><i />
          <strong>LEGADO</strong>
        </div>
      </section>

      <section id="manifesto" className="section repair-manifesto-section">
        <div className="container">
          <div className="repair-manifesto-grid">
            <div>
              <p className="eyebrow">Manifesto fundador</p>
              <h2>A abolição formal não devolveu o que foi retirado.</h2>
            </div>
            <div className="repair-manifesto-copy">
              <p>
                Não reconstruiu famílias. Não restaurou patrimônios. Não devolveu
                territórios, nomes, documentos, línguas, conhecimentos ou poder de
                decisão. As consequências permanecem na distribuição de riqueza, no
                acesso à educação, à saúde, à terra, à mobilidade e à representação.
              </p>
              <p>
                O CIMA nasce para transformar essa verdade histórica em instituição,
                comunidade organizada, programas permanentes e capacidade de construir
                o futuro com autonomia.
              </p>
            </div>
          </div>

          <blockquote className="repair-quote">
            “Nada sobre a diáspora sem a diáspora. Nada para as próximas gerações sem
            patrimônio, memória e poder institucional.”
          </blockquote>

          <div className="repair-principles">
            <span>Protagonismo negro</span>
            <span>Verdade histórica</span>
            <span>Justiça reparatória</span>
            <span>Autodeterminação</span>
            <span>Cooperação transnacional</span>
            <span>Patrimônio intergeracional</span>
          </div>
        </div>
      </section>

      <section id="reparacao" className="section repair-justice-section">
        <div className="container">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow">A causa transformada em capacidade</p>
              <h2>Reparação é reconstruir condições de existência, poder e futuro.</h2>
            </div>
            <p className="lead">
              O CIMA trata reparação como um programa contínuo de verdade,
              reconhecimento, redistribuição de oportunidades e construção de
              instituições dirigidas pela própria comunidade.
            </p>
          </div>

          <div className="repair-pillar-grid">
            {justicePillars.map((pillar) => (
              <article className="repair-pillar" key={pillar.number}>
                <span>{pillar.number}</span>
                <h3>{pillar.title}</h3>
                <p>{pillar.text}</p>
              </article>
            ))}
          </div>

          <div className="repair-program-grid">
            <article>
              <span>MEMÓRIA</span>
              <h3>Arquivo Global da Diáspora</h3>
              <p>Documentos, relatos, genealogias, patrimônio cultural e pesquisa histórica em uma infraestrutura aberta e protegida.</p>
            </article>
            <article>
              <span>JUSTIÇA</span>
              <h3>Instituto CIMA de Reparação</h3>
              <p>Pesquisa, advocacy, políticas públicas, apoio jurídico estratégico e formulação de mecanismos reparatórios.</p>
            </article>
            <article>
              <span>CAPITAL</span>
              <h3>Fundo Patrimonial CIMA</h3>
              <p>Patrimônio permanente para educação, mobilidade, empreendedorismo, cultura, inovação e fortalecimento institucional.</p>
            </article>
          </div>
        </div>
      </section>

      <section id="propostas" className="section proposals-section repair-proposals-section">
        <div className="container">
          <div className="section-heading centered-heading">
            <p className="eyebrow">Uma instituição, quatro pactos</p>
            <h2>Comunidade, governos, empresas e capital atuando sobre uma missão comum.</h2>
            <p className="lead">
              Cada público entra com responsabilidades diferentes, mas a comunidade de
              membros permanece no centro da legitimidade institucional.
            </p>
          </div>

          <div className="audience-grid">
            {audiences.map((audience) => (
              <article className="audience-card repair-audience-card" key={audience.code}>
                <div className="audience-top">
                  <span>{audience.code}</span>
                  <small>{audience.eyebrow}</small>
                </div>
                <h3>{audience.title}</h3>
                <p>{audience.description}</p>
                <ul>
                  {audience.items.map((item) => (
                    <li key={item}><span>✓</span>{item}</li>
                  ))}
                </ul>
                <a href={audience.href}>{audience.action}<span>↗</span></a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="ecossistema" className="section civic-platform-section repair-ecosystem-section">
        <div className="container">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow">CIMA Citizenship OS</p>
              <h2>A causa ganha serviços, programas, dados e infraestrutura.</h2>
            </div>
            <p className="lead">
              Conta, cartão, tecnologia e tokenização são ferramentas. O objetivo é
              converter pertencimento em acesso, participação, autonomia econômica e
              permanência institucional.
            </p>
          </div>

          <div className="services-grid repair-services-grid">
            {services.map((service) => (
              <article className="service-card repair-service-card" key={service.name}>
                <div className="service-number">{service.number}</div>
                <p className="kicker">{service.name}</p>
                <h3>{service.title}</h3>
                <p className="muted">{service.text}</p>
                <div className="tag-row">
                  {service.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
              </article>
            ))}
          </div>

          <div className="repair-member-product">
            <div className="repair-member-copy">
              <p className="eyebrow">Comunidade de membros</p>
              <h3>Uma identidade para pertencer. Uma rede para prosperar. Uma assembleia para decidir.</h3>
              <p>
                O membro não entra apenas para consumir serviços. Ele participa da
                construção da instituição, da formulação de prioridades e da formação do
                patrimônio coletivo.
              </p>
              <ul className="clean-list">
                <li><span>✓</span> CIMA ID e trajetória de pertencimento</li>
                <li><span>✓</span> Conta global e cartão integrados</li>
                <li><span>✓</span> Programas de formação e mobilidade</li>
                <li><span>✓</span> Propostas, consultas e representação</li>
              </ul>
            </div>
            <div className="repair-member-visual">
              <div className="global-card repair-payment-card">
                <div className="card-topline"><span className="card-brand">CIMA</span><span className="contactless">)))</span></div>
                <div className="chip"><i /><i /><i /></div>
                <strong className="card-number">4826  2108  0001  2026</strong>
                <div className="card-footer-line"><span><small>FOUNDING MEMBER</small>GLOBAL DIASPORA</span><span className="card-network">ONE</span></div>
              </div>
              <div className="identity-card repair-identity-card">
                <div className="identity-top"><span>CIMA MEMBER ID</span><span className="verified-dot">✓ VERIFIED</span></div>
                <div className="identity-main">
                  <div className="portrait-placeholder">C</div>
                  <div><small>GLOBAL MEMBERSHIP</small><strong>000 001 2026</strong><p>Brasil • Diáspora africana</p></div>
                  <div className="qr-pattern" aria-hidden="true">{Array.from({ length: 25 }).map((_, index) => <i key={index} />)}</div>
                </div>
              </div>
              <div className="repair-assembly-card">
                <small>ASSEMBLEIA GLOBAL</small>
                <strong>Plano Reparação 2036</strong>
                <span>Consulta aberta • membro elegível</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="genesis" className="section genesis-section repair-genesis-section">
        <div className="container genesis-layout">
          <div className="genesis-intro">
            <p className="eyebrow">CIMA Genesis</p>
            <h2>Financiar o nascimento da instituição. Distribuir voz. Formar legado.</h2>
            <p className="lead">
              O Genesis reúne pessoas, organizações, governos, empresas e capital para
              construir os primeiros programas, a plataforma e o patrimônio permanente
              da Fundação CIMA.
            </p>
            <div className="repair-genesis-callout">
              <strong>Capital não compra a causa.</strong>
              <span>Financiamento, governança comunitária e memória fundadora possuem funções separadas.</span>
            </div>
          </div>

          <div className="genesis-stack">
            {genesisLayers.map((layer, index) => (
              <article className="genesis-layer" key={layer.code}>
                <div className={`genesis-coin genesis-coin-${index + 1}`}><span>{layer.code}</span></div>
                <div className="genesis-copy">
                  <div><h3>{layer.title}</h3><span>{layer.status}</span></div>
                  <p>{layer.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="container repair-capital-grid">
          <article className="repair-capital-card repair-capital-primary">
            <p className="eyebrow">Mandato de capital fundador</p>
            <h3>Recursos destinados a capacidade institucional.</h3>
            <div className="repair-allocation">
              <div><span style={{ width: "28%" }} /><p><b>28%</b> Tecnologia, identidade e proteção de dados</p></div>
              <div><span style={{ width: "24%" }} /><p><b>24%</b> Instituto de Reparação e Arquivo Global</p></div>
              <div><span style={{ width: "20%" }} /><p><b>20%</b> Programas-piloto e CIMA Hubs</p></div>
              <div><span style={{ width: "16%" }} /><p><b>16%</b> Formação da comunidade global</p></div>
              <div><span style={{ width: "12%" }} /><p><b>12%</b> Reserva, auditoria e integridade</p></div>
            </div>
          </article>

          <article className="repair-capital-card">
            <p className="eyebrow">Governança fundadora</p>
            <h3>Voz não é comprada apenas com capital.</h3>
            <div className="repair-rights-list">
              <div><span>1</span><p><strong>Membros</strong><small>Participação pessoal e representação comunitária.</small></p></div>
              <div><span>2</span><p><strong>Territórios</strong><small>Conselhos regionais e equilíbrio geográfico.</small></p></div>
              <div><span>3</span><p><strong>Conhecimento</strong><small>Especialistas, universidades e guardiões de memória.</small></p></div>
              <div><span>4</span><p><strong>Capital</strong><small>Transparência e participação econômica sem captura da missão.</small></p></div>
            </div>
          </article>
        </div>
      </section>

      <section id="fundacao" className="section repair-foundation-section">
        <div className="container">
          <div className="section-heading centered-heading">
            <p className="eyebrow">Arquitetura institucional</p>
            <h2>A Fundação CIMA é titular da missão. A Akin ajuda a construir a infraestrutura.</h2>
            <p className="lead">
              A comunidade, a missão e o patrimônio pertencem à Fundação. A Akin atua
              como parceira fundadora e estruturadora tecnológica, operacional e
              financeira, ao lado de instituições especializadas.
            </p>
          </div>

          <div className="repair-architecture">
            <article className="repair-architecture-main">
              <span className="brand-symbol">C</span>
              <p className="eyebrow">Instituição central</p>
              <h3>Fundação CIMA</h3>
              <p>Missão histórica, comunidade global, programas, representação, pesquisa, reparação e patrimônio intergeracional.</p>
            </article>
            <div className="repair-architecture-connector"><span>estrutura e conecta</span></div>
            <article>
              <span>AKIN</span>
              <h3>Estruturação</h3>
              <p>Tecnologia, dados, integrações financeiras, operação e desenho de produtos.</p>
            </article>
            <article>
              <span>GOV</span>
              <h3>Parcerias públicas</h3>
              <p>Programas de retorno, mobilidade, educação, cultura, investimento e desenvolvimento.</p>
            </article>
            <article>
              <span>CAP</span>
              <h3>Capital e impacto</h3>
              <p>Doadores, empresas, fundos, universidades e organismos multilaterais.</p>
            </article>
          </div>
        </div>
      </section>

      <section id="governanca" className="section governance-section repair-governance-section">
        <div className="container">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow">Governança para durar</p>
              <h2>Uma instituição da diáspora precisa ser dirigida, protegida e fiscalizada pela diáspora.</h2>
            </div>
            <p className="lead">
              A governança combina voz pessoal, representação territorial, conhecimento
              histórico e integridade independente para impedir concentração e captura.
            </p>
          </div>

          <div className="repair-governance-grid">
            {governance.map((item) => (
              <article key={item.number}>
                <span>{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section final-cta-section repair-final-section">
        <div className="container final-cta repair-final-cta">
          <div>
            <p className="eyebrow">Convocação fundadora</p>
            <h2>A diáspora já existe. Agora ela precisa de uma instituição à sua altura.</h2>
          </div>
          <div>
            <p>
              Pessoas, famílias, lideranças, governos, universidades, empresas, fundos e
              organizações podem ajudar a fundar os primeiros programas e formar o
              patrimônio permanente do CIMA.
            </p>
            <div className="actions">
              <Link href="/membership" className="button primary button-large">Ser membro fundador</Link>
              <Link href="/sign-in" className="button button-large">Acessar área do membro</Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer footer-premium repair-footer">
        <div className="container footer-grid">
          <div>
            <Link href="/" className="brand brand-lockup">
              <span className="brand-symbol">C</span>
              <span>CIMA<small>Cidadania Múltipla Africana</small></span>
            </Link>
            <p>Instituição global de pertencimento, reparação, desenvolvimento, participação e patrimônio intergeracional da diáspora africana.</p>
          </div>
          <div><strong>Causa</strong><a href="#manifesto">Manifesto</a><a href="#reparacao">Reparação</a><a href="#propostas">Propostas</a></div>
          <div><strong>Ecossistema</strong><a href="#ecossistema">Citizenship OS</a><a href="#genesis">Genesis</a><a href="#governanca">Governança</a></div>
          <div className="legal-footer"><strong>Estrutura</strong><p>A Fundação CIMA lidera a missão institucional. A Akin atua como parceira fundadora e estruturadora tecnológica, operacional e financeira do ecossistema.</p></div>
        </div>
        <div className="container footer-bottom"><span>© 2026 Fundação CIMA. Conceito institucional em estruturação.</span><span>Verdade • Reconhecimento • Justiça • Desenvolvimento</span></div>
      </footer>
    </main>
  );
}
