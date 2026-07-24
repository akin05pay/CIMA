import Link from "next/link";

const history = [
  {
    period: "2003–2012",
    title: "A diáspora torna-se a sexta região",
    text: "A União Africana consolidou progressivamente a diáspora como parte essencial da construção continental e de sua agenda de desenvolvimento.",
    source: "União Africana",
    href: "https://ecosocc.au.int/fr/node/516"
  },
  {
    period: "2019–2026",
    title: "O retorno vira política pública",
    text: "Países africanos ampliaram programas de retorno, relacionamento, cidadania, investimento e transferência de conhecimento para comunidades da diáspora.",
    source: "Governo de Gana",
    href: "https://cairo.mfa.gov.gh/citizenship-application-for-the-historic-diaspora-community/"
  },
  {
    period: "Próxima etapa",
    title: "Pertencimento precisa de infraestrutura",
    text: "O desafio deixa de ser apenas simbólico: identidade, programas oficiais, capital, comércio, formação e governança precisam operar em uma mesma camada confiável.",
    source: "Tese CIMA",
    href: "#manifesto"
  }
];

const audiences = [
  {
    code: "GOV",
    title: "Governos e cidades",
    subtitle: "CIMA Government Partnerships",
    text: "Infraestrutura para transformar políticas de diáspora em programas mensuráveis e acessíveis.",
    items: [
      "Cadastro voluntário e protegido da diáspora",
      "Jornadas oficiais de retorno, residência, estudo e investimento",
      "Portal de oportunidades e atendimento integrado",
      "Dados agregados para planejamento, sem substituir registros estatais"
    ],
    cta: "Propor programa governamental"
  },
  {
    code: "MEM",
    title: "Pessoas e famílias",
    subtitle: "CIMA Global Membership",
    text: "Uma relação contínua com a África baseada em pertencimento, acesso, mobilidade e voz.",
    items: [
      "Credencial digital de membro",
      "Conta e cartão por parceiro autorizado",
      "Formação, mobilidade e rede profissional",
      "Participação em assembleias e propostas comunitárias"
    ],
    cta: "Conhecer a associação"
  },
  {
    code: "ENT",
    title: "Empresas e investidores",
    subtitle: "CIMA Economic Network",
    text: "Uma camada confiável para contratar, vender, investir e formar cadeias entre continente e diáspora.",
    items: [
      "Diretório de empresas e fornecedores verificados",
      "Corredores comerciais e missões empresariais",
      "Talentos, contratação e pagamentos internacionais",
      "Originação de projetos e instrumentos de impacto"
    ],
    cta: "Entrar na rede econômica"
  },
  {
    code: "MLT",
    title: "Fundos e multilaterais",
    subtitle: "CIMA Impact Infrastructure",
    text: "Execução, rastreabilidade e mensuração para programas de desenvolvimento orientados à diáspora.",
    items: [
      "Programas com metas, beneficiários e indicadores",
      "Blended finance, grants e capital catalítico",
      "Prestação de contas por projeto e território",
      "Dados de impacto, auditoria e governança independente"
    ],
    cta: "Estruturar programa de impacto"
  }
];

const services = [
  { number: "01", eyebrow: "CIMA Identity", title: "Pertencimento verificável", text: "Credencial privada de membro, reputação, consentimentos e elegibilidade para programas.", tags: ["CIMA ID", "Privacidade", "Reputação"] },
  { number: "02", eyebrow: "CIMA Mobility", title: "Jornadas de retorno e mobilidade", text: "Informação, triagem e encaminhamento a governos, consulados, ensino e assessorias habilitadas.", tags: ["Retorno", "Residência", "Estudo"] },
  { number: "03", eyebrow: "CIMA Money", title: "Conta global e pagamentos", text: "Experiência multimoeda, cartão e pagamentos por meio de instituições financeiras autorizadas.", tags: ["BRL", "USD", "EUR"] },
  { number: "04", eyebrow: "CIMA Trade", title: "Economia da diáspora", text: "Empresas, fornecedores, talentos, investidores e corredores comerciais conectados em uma rede verificável.", tags: ["B2B", "Capital", "Talentos"] },
  { number: "05", eyebrow: "CIMA Learning", title: "Conhecimento que circula", text: "Idiomas, tecnologia, educação financeira, história e formação conectadas a oportunidades reais.", tags: ["Carreira", "Cultura", "Tecnologia"] },
  { number: "06", eyebrow: "CIMA Legacy", title: "Patrimônio intergeracional", text: "Endowment segregado, programas permanentes e transparência para sustentar a instituição por gerações.", tags: ["Endowment", "Auditoria", "Impacto"] }
];

const governance = [
  { number: "01", title: "Assembleia Global", text: "Membros deliberam sobre prioridades, elegem representantes e acompanham resultados dentro das competências definidas no estatuto." },
  { number: "02", title: "Conselhos Regionais", text: "Representação territorial da diáspora, com mandatos, diversidade, prestação de contas e prevenção de captura." },
  { number: "03", title: "Fórum de Governos Parceiros", text: "Canal institucional para programas e acordos, sem atribuir ao CIMA poderes soberanos ou consulares." },
  { number: "04", title: "Conselho de Integridade", text: "Supervisão jurídica, financeira, tecnológica, de direitos humanos, privacidade e conflitos de interesse." }
];

const genesisLayers = [
  {
    code: "F",
    title: "Genesis Funding Token",
    status: "Financiamento regulado",
    text: "Instrumento tokenizado futuro para financiar plataforma, pilotos e hubs, emitido apenas por uma rota jurídica e de oferta compatível com seus direitos econômicos."
  },
  {
    code: "V",
    title: "CIMA Voice Credential",
    status: "Governança não transferível",
    text: "Credencial separada, vinculada à participação e ao pertencimento, usada para propostas, consultas e votações da comunidade — sem representar cidadania estatal."
  },
  {
    code: "A",
    title: "CIMA Access Credits",
    status: "Utilidade após operação",
    text: "Créditos fechados para serviços, benefícios e incentivos quando a rede estiver ativa, sem promessa de rendimento ou mercado secundário público."
  }
];

const roadmap = [
  { phase: "Fase 01", title: "Constituição e legitimidade", text: "Fundação, carta de princípios, conselho internacional, políticas de integridade e memorandos com parceiros." },
  { phase: "Fase 02", title: "Comunidade e identidade", text: "Founding members, CIMA ID, assembleias experimentais e mapa global de competências da diáspora." },
  { phase: "Fase 03", title: "Pilotos públicos e financeiros", text: "Corredor Brasil–África, mobilidade assistida, marketplace, conta global e projetos de impacto." },
  { phase: "Fase 04", title: "Genesis e expansão", text: "Financiamento regulado, governança madura, CIMA Hubs e replicação com governos e multilaterais." }
];

export default function HomePage() {
  return (
    <main className="site-shell">
      <header className="topbar">
        <div className="container nav nav-premium">
          <Link href="/" className="brand brand-lockup" aria-label="CIMA — início">
            <span className="brand-symbol">C</span>
            <span>CIMA<small>Cidadania Múltipla Africana</small></span>
          </Link>

          <nav className="nav-links" aria-label="Navegação principal">
            <a href="#historia">História</a>
            <a href="#propostas">Propostas</a>
            <a href="#cidadania">Plataforma</a>
            <a href="#genesis">Genesis</a>
            <a href="#governanca">Governança</a>
          </nav>

          <div className="actions nav-actions">
            <Link href="/sign-in" className="button button-ghost">Entrar</Link>
            <Link href="/membership" className="button primary">Fundar junto</Link>
          </div>
        </div>
      </header>

      <section className="container hero hero-premium civic-hero" id="manifesto">
        <div className="hero-copy">
          <div className="status-pill"><span className="pulse" /> Constituição fundadora em desenvolvimento</div>
          <p className="eyebrow">Cidadania Múltipla Africana</p>
          <h1>
            Pertencer a muitos lugares.<span>Construir um futuro comum.</span>
          </h1>
          <p className="lead hero-lead">
            O CIMA transforma o vínculo histórico entre a África e sua diáspora em uma
            infraestrutura civil permanente para identidade, mobilidade, participação,
            comércio, capital e patrimônio intergeracional.
          </p>
          <div className="civic-definition">
            <span>Não é passaporte privado.</span>
            <span>Não é governo paralelo.</span>
            <strong>É uma camada institucional entre pessoas, Estados e oportunidades.</strong>
          </div>
          <div className="actions hero-actions">
            <Link href="/membership" className="button primary button-large">Ser membro fundador <span aria-hidden="true">↗</span></Link>
            <a href="#propostas" className="button button-large">Ver propostas institucionais</a>
          </div>
          <div className="hero-proof civic-proof">
            <div><strong>6ª</strong><span>região da diáspora africana</span></div>
            <div><strong>4</strong><span>públicos institucionais</span></div>
            <div><strong>1</strong><span>assembleia global conectada</span></div>
          </div>
        </div>

        <div className="citizenship-orbit" aria-label="Arquitetura visual da Cidadania Múltipla Africana">
          <div className="orbit-ring ring-one" />
          <div className="orbit-ring ring-two" />
          <div className="orbit-center">
            <span className="brand-symbol orbit-logo">C</span>
            <strong>CIMA</strong>
            <small>Cidadania Múltipla Africana</small>
          </div>
          <div className="orbit-node node-identity"><span>ID</span><b>Identidade</b><small>Pertencimento verificável</small></div>
          <div className="orbit-node node-mobility"><span>↗</span><b>Mobilidade</b><small>Rotas oficiais</small></div>
          <div className="orbit-node node-capital"><span>$</span><b>Capital</b><small>Financiamento e legado</small></div>
          <div className="orbit-node node-voice"><span>V</span><b>Voz</b><small>Governança comunitária</small></div>
          <div className="orbit-caption">África ↔ Diáspora ↔ Mundo</div>
        </div>
      </section>

      <section className="trust-strip">
        <div className="container trust-row">
          <span>Uma infraestrutura civil para</span>
          <strong>PERTENCIMENTO</strong><i />
          <strong>POLÍTICA PÚBLICA</strong><i />
          <strong>ECONOMIA</strong><i />
          <strong>GOVERNANÇA</strong><i />
          <strong>LEGADO</strong>
        </div>
      </section>

      <section id="historia" className="section history-section">
        <div className="container">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow">Por que o CIMA existe</p>
              <h2>A história já reconheceu a diáspora. Falta uma instituição capaz de operá-la.</h2>
            </div>
            <p className="lead">
              A cidadania múltipla começa como memória e pertencimento, mas só ganha força
              quando vira acesso, programas, direitos possíveis, capital e capacidade de decisão.
            </p>
          </div>

          <div className="history-line">
            {history.map((item, index) => (
              <article className="history-card" key={item.title}>
                <div className="history-marker"><span>{index + 1}</span></div>
                <p className="history-period">{item.period}</p>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                  {item.source} <span>↗</span>
                </a>
              </article>
            ))}
          </div>

          <div className="manifesto-panel">
            <p className="eyebrow">Definição CIMA</p>
            <blockquote>
              Cidadania Múltipla Africana é o direito civil de construir pertencimento,
              contribuição e participação em mais de uma comunidade, sem confundir essa
              relação com nacionalidade, passaporte ou poder soberano.
            </blockquote>
            <div className="manifesto-principles">
              <span>Autodeterminação</span><span>Pluralidade</span><span>Não discriminação fenotípica</span><span>Soberania respeitada</span><span>Reciprocidade</span>
            </div>
          </div>
        </div>
      </section>

      <section id="propostas" className="section proposals-section">
        <div className="container">
          <div className="section-heading centered-heading">
            <p className="eyebrow">Quatro propostas, uma infraestrutura</p>
            <h2>O CIMA entrega valor diferente para cada parte da rede.</h2>
            <p className="lead">A mesma plataforma organiza demanda social, programas públicos, atividade econômica e capital de impacto.</p>
          </div>

          <div className="audience-grid">
            {audiences.map((audience) => (
              <article className="audience-card" key={audience.code}>
                <div className="audience-top"><span>{audience.code}</span><small>{audience.subtitle}</small></div>
                <h3>{audience.title}</h3>
                <p>{audience.text}</p>
                <ul>
                  {audience.items.map((item) => <li key={item}><span>✓</span>{item}</li>)}
                </ul>
                <a href="#roadmap">{audience.cta}<span>↗</span></a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="cidadania" className="section civic-platform-section">
        <div className="container">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow">CIMA Citizenship OS</p>
              <h2>Uma cidadania civil que funciona todos os dias.</h2>
            </div>
            <p className="lead">
              O cartão e a identidade são apenas a porta de entrada. O produto real é a
              combinação de acesso, mobilidade, economia, aprendizado, participação e legado.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <div className="service-number">{service.number}</div>
                <p className="kicker">{service.eyebrow}</p>
                <h3>{service.title}</h3>
                <p className="muted">{service.text}</p>
                <div className="tag-row">{service.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                <a href="#governanca" className="service-link">Ver na arquitetura <span>↗</span></a>
              </article>
            ))}
          </div>

          <div className="citizenship-product">
            <div className="citizenship-product-copy">
              <span className="feature-index">MEMBERSHIP / IDENTITY / MONEY</span>
              <h3>Uma credencial de pertencimento. Um cartão para circular. Uma assembleia para participar.</h3>
              <p>
                O CIMA ID verifica associação e consentimentos. A conta global é emitida por
                parceiro autorizado. A governança acontece em ambiente separado, com regras e
                trilhas de auditoria.
              </p>
              <ul className="clean-list">
                <li><span>✓</span> Identidade de membro — não passaporte</li>
                <li><span>✓</span> Conta e cartão — saldo fora da Fundação</li>
                <li><span>✓</span> Voz comunitária — sem poder soberano</li>
                <li><span>✓</span> Benefícios e programas — por elegibilidade transparente</li>
              </ul>
            </div>

            <div className="citizenship-product-visual">
              <div className="global-card civic-card">
                <div className="card-topline"><span className="card-brand">CIMA</span><span className="contactless">)))</span></div>
                <div className="chip"><i /><i /><i /></div>
                <strong className="card-number">4826 2108 0001 2026</strong>
                <div className="card-footer-line"><span><small>GLOBAL MEMBER</small>FOUNDING CITIZEN</span><span className="card-network">ONE</span></div>
              </div>
              <div className="identity-card civic-id">
                <div className="identity-top"><span>CIMA CITIZEN ID</span><span className="verified-dot">✓ VERIFIED</span></div>
                <div className="identity-main">
                  <div className="portrait-placeholder">C</div>
                  <div><small>MULTIPLE CITIZENSHIP MEMBER</small><strong>000 001 2026</strong><p>Brasil • Diáspora africana</p></div>
                  <div className="qr-pattern" aria-hidden="true">{Array.from({ length: 25 }).map((_, index) => <i key={index} />)}</div>
                </div>
              </div>
              <div className="assembly-ticket"><span>Próxima assembleia</span><strong>Constituição CIMA 2026</strong><small>Proposta 04 • voto elegível</small></div>
            </div>
          </div>
        </div>
      </section>

      <section id="genesis" className="section genesis-section">
        <div className="container genesis-layout">
          <div className="genesis-intro">
            <p className="eyebrow">CIMA Genesis Protocol</p>
            <h2>Financiar o nascimento. Distribuir capacidade de governança.</h2>
            <p className="lead">
              O Genesis organiza a fase fundadora sem misturar investimento, associação e
              utilidade. A marca é única; os direitos e os instrumentos jurídicos permanecem separados.
            </p>
            <div className="token-warning">
              <span>ESTRUTURA PROPOSTA — NÃO É OFERTA</span>
              <p>Qualquer token com expectativa econômica será emitido somente por uma rota regulatória compatível, com documentação, parceiros e disclosures aplicáveis.</p>
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

        <div className="container genesis-economics">
          <div className="funding-card">
            <p className="eyebrow">Uso inicial dos recursos</p>
            <h3>Capital com mandato visível.</h3>
            <div className="funding-bars">
              <div><span style={{ width: "32%" }} /><p><b>32%</b> Plataforma, identidade e segurança</p></div>
              <div><span style={{ width: "24%" }} /><p><b>24%</b> Pilotos com governos e territórios</p></div>
              <div><span style={{ width: "18%" }} /><p><b>18%</b> CIMA Hubs e comunidade</p></div>
              <div><span style={{ width: "14%" }} /><p><b>14%</b> Reserva, auditoria e compliance</p></div>
              <div><span style={{ width: "12%" }} /><p><b>12%</b> Fundo de inovação e impacto</p></div>
            </div>
            <small>Percentuais ilustrativos sujeitos à modelagem jurídica, financeira e de governança.</small>
          </div>

          <div className="governance-rights-card">
            <p className="eyebrow">O que a governança decide</p>
            <h3>Voz real, mas com limites claros.</h3>
            <div className="rights-matrix">
              <div><span>✓</span><p><strong>Prioridades programáticas</strong><small>Formação, mobilidade, empreendedorismo e cultura.</small></p></div>
              <div><span>✓</span><p><strong>Orçamento participativo</strong><small>Parcela definida do orçamento social e de inovação.</small></p></div>
              <div><span>✓</span><p><strong>Representação regional</strong><small>Eleição e avaliação de conselhos da comunidade.</small></p></div>
              <div><span>—</span><p><strong>Sem poderes soberanos</strong><small>Não decide cidadania estatal, visto, passaporte ou política externa.</small></p></div>
            </div>
          </div>
        </div>
      </section>

      <section id="governanca" className="section governance-section">
        <div className="container">
          <div className="section-heading centered-heading">
            <p className="eyebrow">Governança policêntrica</p>
            <h2>Nenhum fundador, governo, investidor ou grupo controla o CIMA sozinho.</h2>
            <p className="lead">A legitimidade nasce do equilíbrio entre comunidade, missão institucional, parceiros públicos, capital e controles independentes.</p>
          </div>

          <div className="governance-map">
            <div className="governance-center"><span>C</span><strong>Fundação CIMA</strong><small>Missão, estatuto e proteção do propósito</small></div>
            {governance.map((item, index) => (
              <article className={`governance-node governance-node-${index + 1}`} key={item.title}>
                <span>{item.number}</span><h3>{item.title}</h3><p>{item.text}</p>
              </article>
            ))}
          </div>

          <div className="constitutional-guardrails">
            <div><span>01</span><strong>Uma pessoa, dignidade inviolável</strong><p>Nenhuma classificação fenotípica ou hierarquia de ancestralidade.</p></div>
            <div><span>02</span><strong>Governança não é soberania</strong><p>O CIMA não emite nacionalidade, passaporte, visto ou imunidade.</p></div>
            <div><span>03</span><strong>Capital não compra a missão</strong><p>Direitos econômicos não permitem capturar a Fundação ou seus beneficiários.</p></div>
            <div><span>04</span><strong>Dados pertencem às pessoas</strong><p>Consentimento, minimização, portabilidade e trilha de acesso.</p></div>
          </div>
        </div>
      </section>

      <section id="legado" className="section legacy-section">
        <div className="container legacy-layout">
          <div className="legacy-dashboard">
            <div className="dashboard-topline"><div><small>CIMA LEGACY</small><strong>Painel de impacto coletivo</strong></div><span>Modelo auditável</span></div>
            <div className="legacy-total"><small>Patrimônio destinado ao legado</small><strong>R$ 1.284.620</strong><span>MODELO DEMONSTRATIVO</span></div>
            <div className="impact-chart" aria-label="Gráfico ilustrativo de evolução patrimonial">
              <div className="chart-grid"><i /><i /><i /><i /></div>
              <svg viewBox="0 0 600 180" role="img" aria-label="Curva ascendente ilustrativa">
                <defs><linearGradient id="area" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#d6a84b" stopOpacity=".45"/><stop offset="100%" stopColor="#d6a84b" stopOpacity="0"/></linearGradient></defs>
                <path d="M0 150 C70 130,100 145,150 112 S250 120,305 78 S400 92,445 47 S535 58,600 18 L600 180 L0 180 Z" fill="url(#area)" />
                <path d="M0 150 C70 130,100 145,150 112 S250 120,305 78 S400 92,445 47 S535 58,600 18" fill="none" stroke="#f0c96a" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </div>
            <div className="impact-stats"><div><span>32%</span><small>Formação</small></div><div><span>28%</span><small>Mobilidade</small></div><div><span>24%</span><small>Empreendedorismo</small></div><div><span>16%</span><small>Cultura e pesquisa</small></div></div>
          </div>

          <div className="legacy-copy">
            <p className="eyebrow">Do financiamento fundador ao patrimônio permanente</p>
            <h2>O capital inicial constrói. O endowment faz permanecer.</h2>
            <p className="lead">Mensalidades, doações, grants, rendimentos e contribuições patrimoniais possuem registros e mandatos separados. O saldo do membro nunca é apropriado pelo CIMA.</p>
            <div className="allocation-list">
              <div><span className="allocation-dot dot-one" /><p><strong>Infraestrutura e serviços</strong><small>Contratos, tecnologia e operação</small></p><b>EXECUÇÃO</b></div>
              <div><span className="allocation-dot dot-two" /><p><strong>Programas de impacto</strong><small>Metas, beneficiários e prestação de contas</small></p><b>IMPACTO</b></div>
              <div><span className="allocation-dot dot-three" /><p><strong>Fundo patrimonial</strong><small>Gestão segregada e horizonte intergeracional</small></p><b>LEGADO</b></div>
            </div>
          </div>
        </div>
      </section>

      <section id="roadmap" className="section roadmap-section">
        <div className="container">
          <div className="section-heading split-heading">
            <div><p className="eyebrow">Rota de fundação</p><h2>Começar pequeno o suficiente para provar. Grande o suficiente para importar.</h2></div>
            <p className="lead">O primeiro corredor deve integrar comunidade, governo parceiro, instituição financeira, empresas e um financiador de impacto em um programa verificável.</p>
          </div>
          <div className="roadmap-grid">
            {roadmap.map((item) => <article key={item.phase}><span>{item.phase}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="section final-cta-section">
        <div className="container final-cta civic-cta">
          <div><p className="eyebrow">Convocação fundadora</p><h2>A diáspora já existe. Agora ela precisa de uma instituição à sua altura.</h2></div>
          <div>
            <p>Pessoas, governos, empresas, universidades, fundos e organizações multilaterais podem participar da construção dos primeiros pilotos do CIMA.</p>
            <div className="actions"><Link href="/membership" className="button primary button-large">Ser membro fundador</Link><a href="#propostas" className="button button-large">Apresentar parceria</a></div>
          </div>
        </div>
      </section>

      <footer className="footer footer-premium">
        <div className="container footer-grid">
          <div><Link href="/" className="brand brand-lockup"><span className="brand-symbol">C</span><span>CIMA<small>Cidadania Múltipla Africana</small></span></Link><p>Infraestrutura civil transnacional de pertencimento, programas públicos, cooperação econômica, governança e patrimônio intergeracional.</p></div>
          <div><strong>Plataforma</strong><a href="#historia">História</a><a href="#propostas">Propostas</a><a href="#cidadania">Serviços</a></div>
          <div><strong>Institucional</strong><a href="#genesis">Genesis</a><a href="#governanca">Governança</a><a href="#roadmap">Roadmap</a></div>
          <div className="legal-footer"><strong>Aviso</strong><p>Projeto em estruturação. O CIMA não concede cidadania, nacionalidade, visto ou passaporte. Produtos financeiros e instrumentos tokenizados dependerão de parceiros autorizados, enquadramento jurídico e regime de oferta aplicável.</p></div>
        </div>
        <div className="container footer-bottom"><span>© 2026 Fundação CIMA. Conceito institucional.</span><span>Plural citizenship • Regulatory first • Human dignity</span></div>
      </footer>
    </main>
  );
}
