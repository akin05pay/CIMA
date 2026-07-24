# CIMA — Cidadania Múltipla Africana

Infraestrutura transnacional de pertencimento, mobilidade, comércio e patrimônio intergeracional para a diáspora africana.

## Estado atual

Este repositório contém a arquitetura inicial da plataforma:

- landing institucional;
- associação recorrente;
- consentimentos versionados;
- autenticação Supabase por magic link;
- Stripe Checkout e Customer Portal;
- webhooks idempotentes;
- ledger de alocação append-only;
- painel individual de transparência;
- schema inicial Supabase;
- documentação institucional, técnica e jurídica;
- instruções para Codex em `AGENTS.md`.

**O projeto não está pronto para cobrar em produção.** A política de alocação inicial permanece como `draft` de propósito.

## Arquitetura institucional resumida

```text
Membro da diáspora
       │
       ├── Conta Global ──► instituição emissora autorizada
       │                    tecnologia e integração Akin
       │
       └── Mensalidade CIMA ──► Stripe Billing
                                │
                                ▼
                         Ledger de alocação
                    ┌───────────┼──────────────┐
                    ▼           ▼              ▼
              Serviços Akin  Operação CIMA  Endowment
                                             segregado
```

O saldo da conta global não é doado. Somente a mensalidade contratada é alocada conforme política aceita pelo membro.

## Stack

- Next.js App Router
- React e TypeScript
- Supabase Auth/Postgres/RLS
- Stripe Billing/Checkout
- Vercel
- GitHub

## Execução local

```bash
cp .env.example .env.local
npm install
npm run dev
```

Antes de executar, crie projetos isolados para o CIMA e preencha as variáveis de ambiente.

## Verificações

```bash
npm run typecheck
npm run lint
npm run build
```

## Banco de dados

O arquivo `supabase/bootstrap.sql` é um rascunho revisável. Não aplique diretamente em produção.

Fluxo recomendado:

```bash
supabase migration new cima_core
# Copie o SQL revisado para a migration gerada
supabase db reset
supabase db advisors
```

Depois, gere e versione os tipos TypeScript do banco.

## Stripe

A integração planejada usa:

- Checkout hospedado em modo `subscription`;
- preços fixos por plano;
- Customer Portal;
- Smart Retries;
- conciliação por webhook;
- valores em unidades monetárias mínimas;
- metadata com `user_id`, `plan_code` e versão da política.

Eventos iniciais:

- `checkout.session.completed`
- `invoice.paid`
- `invoice.payment_failed`
- `customer.subscription.updated`
- `customer.subscription.deleted`

## Documentação

- [`docs/INSTITUTIONAL-ARCHITECTURE.md`](docs/INSTITUTIONAL-ARCHITECTURE.md)
- [`docs/TECHNICAL-ARCHITECTURE.md`](docs/TECHNICAL-ARCHITECTURE.md)
- [`docs/LEGAL-GUARDRAILS.md`](docs/LEGAL-GUARDRAILS.md)
- [`AGENTS.md`](AGENTS.md)

## Regras centrais

1. A Fundação CIMA não emite conta bancária nem recebe depósitos do público.
2. A Akin é fornecedora contratada, não proprietária do patrimônio social.
3. A entidade gestora do endowment deve manter patrimônio segregado.
4. O CIMA não concede cidadania, visto ou passaporte.
5. A identidade CIMA não usa aparência ou tonalidade de pele para classificar pessoas.
6. O MVP não inclui token negociável.
7. Lançamentos financeiros não são editados ou apagados.
8. Cobrança real depende de aprovação jurídica, fiscal, contábil e de governança.

## Branch de implementação

A primeira versão foi estruturada em:

```text
agent/cima-foundation-platform
```

Use pull requests e Preview Deployments para qualquer evolução.
