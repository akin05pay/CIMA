# AGENTS.md — CIMA Platform

## Mission

Build the CIMA platform as auditable infrastructure for the African diaspora. Protect the separation between user funds, membership billing, Foundation operations, Akin services and the endowment.

## Non-negotiable domain rules

1. Never move or allocate a user's global-account balance without a separate explicit instruction and regulated payment flow.
2. Membership fees and account balances are different domains.
3. Never describe CIMA Identity as a passport, visa, citizenship or state-issued credential.
4. Never implement racial classification from photos, facial recognition or skin tone.
5. Never add a tradable token to the MVP.
6. Financial records are append-only. Corrections use reversing entries, never edits or deletes.
7. Allocation policies must total exactly 10,000 basis points and be formally approved before use.
8. Stripe, Supabase, BaaS and investment providers must remain replaceable adapters.
9. Akin, Fundação CIMA, the account issuer and the endowment manager are separate legal and accounting domains.
10. Production billing remains disabled until legal, fiscal and governance approvals are documented.

## Technology rules

- Next.js App Router and TypeScript strict mode.
- Server Components by default; Client Components only for interactivity.
- Lazy initialization for Stripe, Supabase admin and future provider SDKs.
- Never expose `SUPABASE_SERVICE_ROLE_KEY`, Stripe secret keys or webhook secrets.
- Use Supabase publishable keys in public clients.
- Enable RLS on every exposed table.
- Do not authorize from user-editable metadata.
- Webhooks must verify signatures and be idempotent.
- External webhooks use Route Handlers, not Server Actions.
- Store currency amounts as integer minor units.
- Store allocation percentages as integer basis points.
- Use UTC timestamps.
- Avoid logging personal, financial, migratory or ethnoracial data.

## Database workflow

Do not apply `supabase/bootstrap.sql` directly to production.

1. Create an isolated CIMA Supabase project.
2. Run `supabase migration new cima_core`.
3. Copy the reviewed bootstrap SQL into the generated migration.
4. Apply to a development branch or local database.
5. Run security and performance advisors.
6. Generate TypeScript database types.
7. Commit the migration and generated types.
8. Test RLS using at least two separate users.

## Stripe workflow

1. Operate in test mode.
2. Create three products/prices only after commercial approval.
3. Configure Checkout in subscription mode.
4. Configure Customer Portal.
5. Register `/api/stripe/webhook`.
6. Subscribe initially to:
   - `checkout.session.completed`
   - `invoice.paid`
   - `invoice.payment_failed`
   - `customer.subscription.updated`
   - `customer.subscription.deleted`
7. Test duplicate webhook delivery.
8. Test refund, cancellation and payment failure accounting before production.

## Vercel workflow

1. Import `akin05pay/CIMA` as a new project.
2. Use a CIMA-specific project name.
3. Link Preview to the feature branch and Production to `main`.
4. Create separate environment variables for Development, Preview and Production.
5. Never copy secrets from unrelated Akin or AgroDeri projects.
6. Require successful build, lint and typecheck before merge.

## Delivery order

1. Make the repository build cleanly.
2. Create isolated Supabase infrastructure.
3. Implement sign-in and profile creation.
4. Apply schema and generate types.
5. Implement Stripe test-mode subscriptions.
6. Verify ledger and member dashboard.
7. Add administrator governance screens.
8. Add BaaS adapter only after provider contract and API documentation exist.
9. Add institutional-program modules after the first corridor is selected.

## Definition of done for a change

- Typecheck passes.
- Lint passes.
- Build passes.
- No secret is committed.
- RLS implications are reviewed.
- Financial idempotency is tested.
- User-facing text respects legal guardrails.
- Documentation is updated when architecture changes.
