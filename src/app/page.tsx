import Link from "next/link";

const services = [
  {
    number: "01",
    eyebrow: "CIMA Money",
    title: "Conta global multimoeda",
    text: "Uma experiência única para consultar saldos, pagar, receber e organizar moedas por meio de instituições financeiras autorizadas.",
    tags: ["BRL", "USD", "EUR", "GBP"]
  },
  {
    number: "02",
    eyebrow: "CIMA Identity",
    title: "Credencial digital verificável",
    text: "Identidade privada de membro para acesso à comunidade, benefícios e programas. Não substitui documentos oficiais ou soberanos.",
    tags: ["QR verificável", "Consentimento", "Privacidade"]
  },
  {
    number: "03",
    eyebrow: "CIMA Mobility",
    title: "Mobilidade assistida",
    text: "Triagem, informação e encaminhamento a consulados, governos, instituições de ensino e assessorias habilitadas.",
    tags: ["Residência", "Estudo", "Negócios"]
  },
  {
    number: "04",
    eyebrow: "CIMA Trade",
    title: "Rede econômica da diáspora",
    text: "Marketplace B2B, oportunidades, fornecedores, investidores e corredores comerciais entre África, Brasil e outros mercados.",
    tags: ["Empresas", "Comércio", "Capital"]
  },
  {
    number: "05",
    eyebrow: "CIMA Learning",
    title: "Formação para o mundo",
    text: "Idiomas, tecnologia, educação financeira, cultura e capacitação profissional conectados a oportunidades reais.",
    tags: ["Carreira", "Idiomas", "Tecnologia"]
  },
  {
    number: "06",
    eyebrow: "CIMA Legacy",
    title: "Patrimônio intergeracional",
    text: "Contribuições segregadas, governança e transparência para sustentar programas de impacto por várias gerações.",
    tags: ["Endowment", "Auditoria", "Impacto"]
  }
];

const tokenLayers = [
  {
    code: "ID",
    title: "CIMA ID Credential",
    status: "Não financeiro",
    text: "Credencial digital intransferível de associação, reputação e elegibilidade para serviços."
  },
  {
    code: "XP",
    title: "CIMA Access Points",
    status: "Utilidade fechada",
    text: "Pontos de participação e benefícios, sem promessa de rendimento, resgate em dinheiro ou negociação pública."
  },
  {
    code: "IM",
    title: "CIMA Impact Instrument",
    status: "Trilha regulada",
    text: "Instrumento futuro de impacto somente após enquadramento jurídico, parceiro autorizado e regime de oferta aplicável."
  }
];

export default function HomePage() {
  return (
    <main className="site-shell">
      <header className="topbar">
        <div className="container nav nav-premium">
          <Link href="/" className="brand brand-lockup" aria-label="CIMA — início">
            <span className="brand-symbol">C</span>
            <span>
              CIMA
              <small>Global African Membership</small>
            </span>
          </Link>

          <nav className="nav-links" aria-label="Navegação principal">
            <a href="#servicos">Serviços</a>
            <a href="#money">Conta & identidade</a>
            <a href="#token">Tecnologia</a>
            <a href="#legado">Legado</a>
          </nav>

          <div className="actions nav-actions">
            <Link href="/sign-in" className="button button-ghost">
              Entrar
            </Link>
            <Link href="/membership" className="button primary">
              Fazer parte
            </Link>
          </div>
        </div>
      </header>

      <section className="container hero hero-premium">
        <div className="hero-copy">
          <div className="status-pill">
            <span className="pulse" /> Plataforma em construção institucional
          </div>
          <p className="eyebrow">Cidadania Múltipla Africana</p>
          <h1>
            A infraestrutura global da <span>diáspora africana.</span>
          </h1>
          <p className="lead hero-lead">
            Pagamentos, identidade, mobilidade, comércio, formação e patrimônio
            coletivo em uma única experiência — construída para conectar pessoas,
            governos, empresas e oportunidades sem ultrapassar limites soberanos.
          </p>
          <div className="actions hero-actions">
            <Link href="/membership" className="button primary button-large">
              Solicitar acesso pioneiro
              <span aria-hidden="true">↗</span>
            </Link>
            <a href="#money" className="button button-large">
              Explorar a plataforma
            </a>
          </div>
          <div className="hero-proof">
            <div>
              <strong>01</strong>
              <span>identidade de membro</span>
            </div>
            <div>
              <strong>06</strong>
              <span>verticais integradas</span>
            </div>
            <div>
              <strong>100%</strong>
              <span>rastreabilidade por lançamento</span>
            </div>
          </div>
        </div>

        <div className="product-stage" aria-label="Prévia visual da plataforma CIMA">
          <div className="orb orb-one" />
          <div className="orb orb-two" />

          <div className="app-window">
            <div className="app-window-top">
              <div className="window-dots"><i /><i /><i /></div>
              <span>CIMA ONE</span>
              <span className="secure-label">● Secure</span>
            </div>
            <div className="app-body">
              <div className="app-greeting">
                <div>
                  <small>Bem-vindo à sua rede global</small>
                  <strong>Membro Pioneiro</strong>
                </div>
                <span className="avatar">CP</span>
              </div>

              <div className="balance-panel">
                <small>Patrimônio disponível</small>
                <strong>R$ 18.420,60</strong>
                <span>+2,8% este mês</span>
              </div>

              <div className="quick-actions">
                <span><b>↗</b>Enviar</span>
                <span><b>↓</b>Receber</span>
                <span><b>◇</b>Câmbio</span>
                <span><b>•••</b>Mais</span>
              </div>

              <div className="mini-section-title">
                <strong>Suas moedas</strong><span>Ver todas</span>
              </div>
              <div className="currency-list">
                <div><span className="currency-icon">R$</span><p><strong>Real brasileiro</strong><small>BRL</small></p><b>R$ 12.240</b></div>
                <div><span className="currency-icon">$</span><p><strong>Dólar americano</strong><small>USD</small></p><b>US$ 820</b></div>
                <div><span className="currency-icon">€</span><p><strong>Euro</strong><small>EUR</small></p><b>€ 280</b></div>
              </div>
            </div>
          </div>

          <div className="global-card payment-card">
            <div className="card-topline">
              <span className="card-brand">CIMA</span>
              <span className="contactless">)))</span>
            </div>
            <div className="chip"><i /><i /><i /></div>
            <strong className="card-number">••••  ••••  ••••  4826</strong>
            <div className="card-footer-line">
              <span><small>MEMBER</small>CIMA PIONEER</span>
              <span className="card-network">GLOBAL</span>
            </div>
          </div>

          <div className="identity-card floating-id">
            <div className="identity-top">
              <span>CIMA ID</span>
              <span className="verified-dot">✓ Verified</span>
            </div>
            <div className="identity-main">
              <div className="portrait-placeholder">C</div>
              <div>
                <small>GLOBAL MEMBER</small>
                <strong>000 001 2026</strong>
                <p>Diáspora • Brasil</p>
              </div>
              <div className="qr-pattern" aria-hidden="true">
                {Array.from({ length: 25 }).map((_, index) => <i key={index} />)}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="trust-strip">
        <div className="container trust-row">
          <span>Uma única camada de acesso para</span>
          <strong>IDENTIDADE</strong><i />
          <strong>PAGAMENTOS</strong><i />
          <strong>MOBILIDADE</strong><i />
          <strong>COMÉRCIO</strong><i />
          <strong>LEGADO</strong>
        </div>
      </section>

      <section id="servicos" className="section services-section">
        <div className="container">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow">Ecossistema CIMA</p>
              <h2>Serviços feitos para uma comunidade sem fronteiras.</h2>
            </div>
            <p className="lead">
              Cada vertical pode começar com parceiros especializados e evoluir de
              forma modular, sem concentrar atividades reguladas na Fundação.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <div className="service-number">{service.number}</div>
                <p className="kicker">{service.eyebrow}</p>
                <h3>{service.title}</h3>
                <p className="muted">{service.text}</p>
                <div className="tag-row">
                  {service.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
                <a href="#money" className="service-link">Conhecer jornada <span>↗</span></a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="money" className="section product-section">
        <div className="container">
          <div className="section-heading centered-heading">
            <p className="eyebrow">CIMA Money + CIMA Identity</p>
            <h2>Duas credenciais. Uma experiência global.</h2>
            <p className="lead">
              O cartão movimenta o dinheiro mantido no parceiro autorizado. A
              credencial comprova a associação e libera jornadas dentro do ecossistema.
            </p>
          </div>

          <div className="feature-showcase">
            <article className="feature-panel money-panel">
              <div className="feature-copy">
                <span className="feature-index">01 / MONEY</span>
                <h3>Cartão global de pagamento</h3>
                <p>
                  Cartão físico e virtual, controles no aplicativo, moedas múltiplas,
                  notificações em tempo real e regras de segurança configuráveis.
                </p>
                <ul className="clean-list">
                  <li><span>✓</span> Emissão por instituição autorizada</li>
                  <li><span>✓</span> Saldo segregado da Fundação e da Akin</li>
                  <li><span>✓</span> Bloqueio, limites e cartão virtual</li>
                </ul>
              </div>
              <div className="card-scene">
                <div className="global-card payment-card-large">
                  <div className="card-topline"><span className="card-brand">CIMA</span><span className="contactless">)))</span></div>
                  <div className="chip"><i /><i /><i /></div>
                  <strong className="card-number">4826  2108  0001  2026</strong>
                  <div className="card-footer-line"><span><small>MEMBER SINCE</small>2026</span><span className="card-network">GLOBAL</span></div>
                </div>
                <div className="phone-wallet">
                  <div className="phone-notch" />
                  <small>Disponível para gastar</small>
                  <strong>R$ 12.240,00</strong>
                  <div className="wallet-bars"><i /><i /><i /><i /><i /></div>
                  <button type="button">Adicionar à carteira</button>
                </div>
              </div>
            </article>

            <article className="feature-panel identity-panel">
              <div className="feature-copy">
                <span className="feature-index">02 / IDENTITY</span>
                <h3>Identidade CIMA verificável</h3>
                <p>
                  Uma credencial digital orientada por consentimento, com atributos
                  mínimos, validade, nível de verificação e histórico de permissões.
                </p>
                <ul className="clean-list">
                  <li><span>✓</span> Associação e benefícios verificáveis</li>
                  <li><span>✓</span> Dados compartilhados apenas quando necessários</li>
                  <li><span>✓</span> Nunca apresentada como passaporte estatal</li>
                </ul>
              </div>
              <div className="id-scene">
                <div className="identity-card identity-card-large">
                  <div className="identity-top"><span>CIMA ID</span><span className="verified-dot">✓ VERIFIED</span></div>
                  <div className="identity-main">
                    <div className="portrait-placeholder">C</div>
                    <div><small>MEMBERSHIP CREDENTIAL</small><strong>000 001 2026</strong><p>Global Founding Member</p></div>
                    <div className="qr-pattern" aria-hidden="true">{Array.from({ length: 25 }).map((_, index) => <i key={index} />)}</div>
                  </div>
                  <div className="identity-bottom"><span>Issued by Fundação CIMA</span><span>Valid • 12/2027</span></div>
                </div>
                <div className="verification-sheet">
                  <span className="verification-icon">✓</span>
                  <div><strong>Credencial válida</strong><small>Verificada agora • consentimento ativo</small></div>
                </div>
              </div>
            </article>
          </div>

          <div className="regulatory-line">
            <span>IMPORTANTE</span>
            <p>
              Conta e cartão dependem de parceiro bancário ou de pagamentos autorizado.
              A Fundação CIMA não recebe depósitos do público e não utiliza o saldo do
              membro para financiar suas atividades.
            </p>
          </div>
        </div>
      </section>

      <section id="token" className="section token-section">
        <div className="container token-layout">
          <div className="token-intro">
            <p className="eyebrow">CIMA Protocol</p>
            <h2>Tokenização com função clara, não com promessa vazia.</h2>
            <p className="lead">
              A arquitetura separa identidade, utilidade e eventual investimento. O
              enquadramento regulatório é definido pelos direitos econômicos e pela
              forma de oferta — nunca apenas pelo nome “token”.
            </p>
            <div className="token-warning">
              <span>REGULATORY FIRST</span>
              <p>Nenhum instrumento de investimento está sendo ofertado nesta versão.</p>
            </div>
          </div>

          <div className="token-stack">
            {tokenLayers.map((layer, index) => (
              <article className="token-layer" key={layer.code}>
                <div className={`token-coin token-coin-${index + 1}`}><span>{layer.code}</span></div>
                <div className="token-copy">
                  <div><h3>{layer.title}</h3><span className="token-status">{layer.status}</span></div>
                  <p>{layer.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="container compliance-grid">
          <div className="compliance-card">
            <span className="compliance-icon">01</span>
            <h3>Teste funcional</h3>
            <p>Mapeamento de direitos, expectativa econômica, transferibilidade, governança e forma de distribuição.</p>
          </div>
          <div className="compliance-card">
            <span className="compliance-icon">02</span>
            <h3>Rota regulatória</h3>
            <p>Utility fechado, instrumento tokenizado regulado, crowdfunding, securitização ou outra estrutura adequada.</p>
          </div>
          <div className="compliance-card">
            <span className="compliance-icon">03</span>
            <h3>Parceiros habilitados</h3>
            <p>Intermediação, escrituração, custódia, distribuição e liquidação executadas por participantes autorizados quando exigido.</p>
          </div>
          <div className="compliance-card">
            <span className="compliance-icon">04</span>
            <h3>Disclosure completo</h3>
            <p>Riscos, destinação dos recursos, conflitos, governança, restrições e prestação de contas visíveis ao participante.</p>
          </div>
        </div>
      </section>

      <section id="legado" className="section legacy-section">
        <div className="container legacy-layout">
          <div className="legacy-dashboard">
            <div className="dashboard-topline">
              <div><small>CIMA LEGACY</small><strong>Painel de impacto coletivo</strong></div>
              <span>Atualizado agora</span>
            </div>
            <div className="legacy-total"><small>Patrimônio destinado ao legado</small><strong>R$ 1.284.620</strong><span>Modelo demonstrativo</span></div>
            <div className="impact-chart" aria-label="Gráfico ilustrativo de evolução patrimonial">
              <div className="chart-grid"><i /><i /><i /><i /></div>
              <svg viewBox="0 0 600 180" role="img" aria-label="Curva ascendente ilustrativa">
                <defs><linearGradient id="area" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#d6a84b" stopOpacity=".45"/><stop offset="100%" stopColor="#d6a84b" stopOpacity="0"/></linearGradient></defs>
                <path d="M0 150 C70 130,100 145,150 112 S250 120,305 78 S400 92,445 47 S535 58,600 18 L600 180 L0 180 Z" fill="url(#area)" />
                <path d="M0 150 C70 130,100 145,150 112 S250 120,305 78 S400 92,445 47 S535 58,600 18" fill="none" stroke="#f0c96a" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </div>
            <div className="impact-stats">
              <div><span>32%</span><small>Formação</small></div>
              <div><span>28%</span><small>Mobilidade</small></div>
              <div><span>24%</span><small>Empreendedorismo</small></div>
              <div><span>16%</span><small>Cultura e pesquisa</small></div>
            </div>
          </div>

          <div className="legacy-copy">
            <p className="eyebrow">Patrimônio intergeracional</p>
            <h2>O membro vê para onde cada centavo vai.</h2>
            <p className="lead">
              A mensalidade gera lançamentos separados para tecnologia e serviços,
              operação da Fundação e contribuição patrimonial. A política aplicável é
              aceita pelo membro, versionada e auditável.
            </p>
            <div className="allocation-list">
              <div><span className="allocation-dot dot-one" /><p><strong>Serviços e tecnologia</strong><small>Akin e fornecedores contratados</small></p><b>Contrato</b></div>
              <div><span className="allocation-dot dot-two" /><p><strong>Operação institucional</strong><small>Programas e estrutura da Fundação</small></p><b>Fundação</b></div>
              <div><span className="allocation-dot dot-three" /><p><strong>Contribuição patrimonial</strong><small>Destinação ao endowment segregado</small></p><b>Legado</b></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section final-cta-section">
        <div className="container final-cta">
          <div>
            <p className="eyebrow">Founding members</p>
            <h2>Não estamos criando apenas um aplicativo. Estamos construindo permanência.</h2>
          </div>
          <div>
            <p>
              Entre na lista pioneira para acompanhar os pilotos, contribuir com a
              governança e participar da primeira comunidade CIMA.
            </p>
            <div className="actions">
              <Link href="/membership" className="button primary button-large">Conhecer associação</Link>
              <Link href="/sign-in" className="button button-large">Acessar área do membro</Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer footer-premium">
        <div className="container footer-grid">
          <div>
            <Link href="/" className="brand brand-lockup">
              <span className="brand-symbol">C</span>
              <span>CIMA<small>Global African Membership</small></span>
            </Link>
            <p>Infraestrutura transnacional de pertencimento, mobilidade, cooperação econômica e patrimônio intergeracional.</p>
          </div>
          <div><strong>Plataforma</strong><a href="#servicos">Serviços</a><a href="#money">Conta e identidade</a><a href="#token">Protocolo</a></div>
          <div><strong>Institucional</strong><a href="#legado">Governança</a><Link href="/membership">Associação</Link><Link href="/sign-in">Área do membro</Link></div>
          <div className="legal-footer"><strong>Aviso</strong><p>Projeto em estruturação. O CIMA não concede cidadania, visto ou passaporte. Produtos financeiros e instrumentos tokenizados dependerão de parceiros autorizados e enquadramento regulatório aplicável.</p></div>
        </div>
        <div className="container footer-bottom"><span>© 2026 Fundação CIMA. Conceito institucional.</span><span>Privacy by design • Regulatory first</span></div>
      </footer>
    </main>
  );
}
