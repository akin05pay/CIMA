# Arquitetura Técnica CIMA

## 1. Objetivo

Construir uma plataforma modular que conecte associação, identidade, cobrança, conta global, programas institucionais e transparência patrimonial sem misturar responsabilidades regulatórias.

## 2. Stack inicial

- **Frontend e backend web:** Next.js App Router e TypeScript.
- **Hospedagem:** Vercel.
- **Identidade e banco:** Supabase Auth e PostgreSQL.
- **Cobrança recorrente:** Stripe Billing e Checkout.
- **Conta global:** adaptador para parceiro Banking as a Service da Akin.
- **Código e governança técnica:** GitHub.
- **Apresentações institucionais:** Gamma.

## 3. Princípios de arquitetura

1. **Conta não é mensalidade.** O saldo do usuário pertence ao usuário; a cobrança CIMA é uma operação separada.
2. **Ledger antes de transferência.** A destinação é contabilizada antes de qualquer remessa ao fundo patrimonial.
3. **Idempotência.** Eventos de cobrança não podem gerar lançamentos duplicados.
4. **Políticas versionadas.** Cada mensalidade aponta para a versão exata da política de alocação aceita.
5. **Append-only.** Eventos financeiros, lançamentos e auditoria não podem ser editados ou apagados.
6. **Privilégio mínimo.** Chaves administrativas ficam exclusivamente no servidor.
7. **Entidades desacopladas.** Fundação, Akin, emissor da conta e gestora patrimonial são domínios separados.
8. **Adaptadores substituíveis.** Nenhum fornecedor deve ser irremovível.

## 4. Domínios do sistema

### 4.1 Membership

- planos;
- adesão;
- consentimentos;
- status da assinatura;
- portal de autoatendimento;
- direitos de acesso.

### 4.2 Identity

- autenticação;
- perfil;
- país e idioma;
- credencial CIMA;
- KYC/KYB por parceiro autorizado;
- permissões e papéis.

### 4.3 Billing

- criação de Checkout Session;
- clientes Stripe;
- assinaturas;
- invoices;
- falhas e cancelamentos;
- webhooks verificados.

### 4.4 Allocation Ledger

- política aprovada;
- linhas em pontos-base;
- evento de pagamento;
- lançamento por destino;
- imutabilidade;
- consulta individual e agregada.

### 4.5 Endowment Operations

- proposta de transferência;
- aprovação;
- execução;
- vínculo com lançamentos;
- evidência bancária;
- reconciliação;
- relatórios de patrimônio e impacto.

### 4.6 Global Account Adapter

Interface futura padronizada:

```ts
export interface GlobalAccountProvider {
  createApplicant(input: CreateApplicantInput): Promise<Applicant>;
  createAccount(input: CreateAccountInput): Promise<GlobalAccount>;
  getBalances(accountId: string): Promise<Balance[]>;
  listTransactions(accountId: string): Promise<Transaction[]>;
  createTransfer(input: CreateTransferInput): Promise<Transfer>;
  getKycStatus(applicantId: string): Promise<KycStatus>;
}
```

O código de domínio não deve conhecer detalhes internos do BaaS.

### 4.7 Institutional Programs

- corredores bilaterais;
- parceiros e MoUs;
- mobilidade;
- eventos e formação;
- oportunidades comerciais;
- hubs;
- métricas de impacto.

## 5. Fluxo de cobrança

1. Usuário autenticado escolhe plano.
2. Interface exige consentimento para os termos e a declaração patrimonial.
3. Backend registra consentimentos versionados.
4. Backend cria Checkout Session em modo subscription.
5. Stripe processa o pagamento.
6. Webhook valida assinatura criptográfica.
7. Banco reivindica o evento de forma atômica.
8. Invoice paga chama a função `post_paid_invoice`.
9. Banco encontra a política aprovada e efetiva.
10. Banco cria evento de cobrança e lançamentos por destino.
11. Painel do membro exibe os totais.

## 6. Modelo de segurança

### Supabase

- RLS em todas as tabelas expostas;
- usuário acessa apenas suas linhas;
- `service_role` apenas no servidor;
- funções financeiras executáveis somente pelo `service_role`;
- views com `security_invoker`;
- ledger, eventos e auditoria imutáveis;
- políticas de update com `USING` e `WITH CHECK`.

### Stripe

- Checkout hospedado;
- Customer Portal hospedado;
- webhook com corpo bruto e assinatura;
- metadata mínima e não sensível;
- reconciliação pelo evento `invoice.paid`;
- tratamento de falha e cancelamento;
- chaves armazenadas na Vercel.

### Vercel

- ambientes separados: development, preview e production;
- variáveis de ambiente sem exposição pública;
- preview deployments por pull request;
- produção protegida por branch principal;
- logs sem dados pessoais ou segredos.

## 7. Estrutura do repositório

```text
src/app/                  Rotas, páginas e APIs Next.js
src/lib/                  Clientes e regras de domínio
docs/                     Arquitetura institucional e técnica
supabase/bootstrap.sql    Schema inicial para futura migration
.env.example              Contrato de configuração
AGENTS.md                  Instruções para Codex e agentes
```

## 8. Fases técnicas

### Fase 0 — Arquitetura

- repositório;
- documentação;
- schema;
- interface institucional;
- cobrança em modo teste.

### Fase 1 — Associação

- Supabase isolado;
- autenticação;
- Stripe test mode;
- painel do membro;
- ledger auditável.

### Fase 2 — Conta global

- contrato com emissor;
- adaptador BaaS;
- KYC/KYB;
- saldos e transações;
- atendimento e compliance.

### Fase 3 — Endowment

- entidade gestora constituída;
- conta e custodiante segregados;
- fluxo de aprovação;
- reconciliação bancária;
- política de investimentos;
- relatórios públicos.

### Fase 4 — Programas transnacionais

- corredor Brasil–África;
- parceiros governamentais;
- mobilidade;
- rede comercial;
- hubs e métricas de impacto.

## 9. Critério de produção

Nenhuma cobrança real será ativada até existirem:

- entidades jurídicas definidas;
- termos revisados;
- política de alocação aprovada;
- preços e incidências tributárias validados;
- projeto Supabase exclusivo;
- webhook Stripe testado;
- conciliação financeira validada;
- responsável formal por proteção de dados e compliance;
- plano de incidentes e continuidade.
