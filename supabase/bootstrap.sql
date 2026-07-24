-- CIMA Foundation Platform — initial schema draft.
-- Before applying to a real project, create a migration with:
--   supabase migration new cima_core
-- Then copy this SQL into the generated migration file and run Supabase advisors.

create extension if not exists pgcrypto;

create type public.membership_status as enum (
  'incomplete',
  'trialing',
  'active',
  'past_due',
  'canceled',
  'unpaid',
  'paused'
);

create type public.policy_status as enum ('draft', 'approved', 'retired');

create type public.allocation_bucket as enum (
  'akin_services',
  'cima_operations',
  'endowment_contribution'
);

create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  country_code text,
  preferred_language text not null default 'pt-BR',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.membership_plans (
  plan_code text primary key,
  name text not null,
  description text not null,
  is_active boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.allocation_policies (
  id uuid primary key default gen_random_uuid(),
  version text not null unique,
  name text not null,
  status public.policy_status not null default 'draft',
  effective_from timestamptz,
  approved_at timestamptz,
  governance_resolution text,
  created_at timestamptz not null default now()
);

create table public.allocation_policy_lines (
  policy_id uuid not null references public.allocation_policies(id) on delete restrict,
  bucket public.allocation_bucket not null,
  basis_points integer not null check (basis_points >= 0 and basis_points <= 10000),
  sort_order smallint not null check (sort_order > 0),
  primary key (policy_id, bucket),
  unique (policy_id, sort_order)
);

create table public.consents (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  consent_type text not null,
  document_version text not null,
  accepted_at timestamptz not null,
  ip_address inet,
  user_agent text,
  created_at timestamptz not null default now(),
  unique (user_id, consent_type, document_version)
);

create table public.billing_customers (
  user_id uuid primary key references auth.users(id) on delete cascade,
  stripe_customer_id text not null unique,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.memberships (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  plan_code text not null references public.membership_plans(plan_code) on delete restrict,
  stripe_customer_id text not null,
  stripe_subscription_id text not null unique,
  status text not null,
  current_period_end timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.stripe_events (
  stripe_event_id text primary key,
  event_type text not null,
  payload jsonb not null,
  status text not null check (status in ('processing', 'processed', 'failed')),
  error_message text,
  received_at timestamptz not null default now(),
  processed_at timestamptz
);

create table public.billing_events (
  id uuid primary key default gen_random_uuid(),
  stripe_event_id text not null unique,
  stripe_invoice_id text not null unique,
  stripe_subscription_id text not null,
  user_id uuid not null references auth.users(id) on delete restrict,
  plan_code text not null references public.membership_plans(plan_code) on delete restrict,
  policy_id uuid not null references public.allocation_policies(id) on delete restrict,
  currency text not null check (char_length(currency) = 3),
  amount_paid bigint not null check (amount_paid >= 0),
  paid_at timestamptz not null default now(),
  created_at timestamptz not null default now()
);

create table public.ledger_entries (
  id uuid primary key default gen_random_uuid(),
  billing_event_id uuid not null references public.billing_events(id) on delete restrict,
  user_id uuid not null references auth.users(id) on delete restrict,
  bucket public.allocation_bucket not null,
  currency text not null check (char_length(currency) = 3),
  amount bigint not null check (amount >= 0),
  policy_id uuid not null references public.allocation_policies(id) on delete restrict,
  created_at timestamptz not null default now(),
  unique (billing_event_id, bucket)
);

create table public.endowment_transfers (
  id uuid primary key default gen_random_uuid(),
  currency text not null check (char_length(currency) = 3),
  amount bigint not null check (amount > 0),
  transfer_reference text not null unique,
  destination_vehicle text not null,
  status text not null check (status in ('proposed', 'approved', 'executed', 'reconciled', 'rejected')),
  approved_by text,
  executed_at timestamptz,
  reconciled_at timestamptz,
  evidence_uri text,
  created_at timestamptz not null default now()
);

create table public.endowment_transfer_entries (
  transfer_id uuid not null references public.endowment_transfers(id) on delete restrict,
  ledger_entry_id uuid not null unique references public.ledger_entries(id) on delete restrict,
  primary key (transfer_id, ledger_entry_id)
);

create table public.audit_log (
  id bigint generated always as identity primary key,
  actor_id uuid,
  actor_type text not null,
  action text not null,
  entity_type text not null,
  entity_id text not null,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create index memberships_user_id_idx on public.memberships(user_id);
create index billing_events_user_id_idx on public.billing_events(user_id);
create index ledger_entries_user_id_idx on public.ledger_entries(user_id);
create index ledger_entries_bucket_idx on public.ledger_entries(bucket, currency);
create index stripe_events_status_idx on public.stripe_events(status, received_at);

insert into public.membership_plans (plan_code, name, description, is_active)
values
  ('citizen', 'CIMA Citizen', 'Acesso à comunidade, identidade de membro e rede de benefícios.', false),
  ('builder', 'CIMA Builder', 'Participação ampliada em programas, projetos e hubs da diáspora.', false),
  ('patron', 'CIMA Patron', 'Apoio institucional recorrente e relatórios de impacto.', false)
on conflict (plan_code) do nothing;

insert into public.allocation_policies (version, name, status)
values ('pilot-v1', 'Política piloto — sujeita à aprovação jurídica e de governança', 'draft')
on conflict (version) do nothing;

with policy as (
  select id from public.allocation_policies where version = 'pilot-v1'
)
insert into public.allocation_policy_lines (policy_id, bucket, basis_points, sort_order)
select id, 'akin_services'::public.allocation_bucket, 2000, 1 from policy
union all
select id, 'cima_operations'::public.allocation_bucket, 3000, 2 from policy
union all
select id, 'endowment_contribution'::public.allocation_bucket, 5000, 3 from policy
on conflict (policy_id, bucket) do nothing;

create or replace function public.claim_stripe_event(
  p_stripe_event_id text,
  p_event_type text,
  p_payload jsonb
)
returns boolean
language plpgsql
security definer
set search_path = public, pg_temp
as $$
begin
  insert into public.stripe_events (
    stripe_event_id,
    event_type,
    payload,
    status
  ) values (
    p_stripe_event_id,
    p_event_type,
    p_payload,
    'processing'
  )
  on conflict (stripe_event_id) do nothing;

  return found;
end;
$$;

create or replace function public.post_paid_invoice(
  p_stripe_event_id text,
  p_stripe_invoice_id text,
  p_stripe_subscription_id text,
  p_user_id uuid,
  p_plan_code text,
  p_policy_version text,
  p_currency text,
  p_amount_paid bigint
)
returns uuid
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_policy_id uuid;
  v_total_basis_points integer;
  v_billing_event_id uuid;
  v_existing_event_id uuid;
  v_line record;
  v_line_count integer;
  v_line_number integer := 0;
  v_remaining bigint := p_amount_paid;
  v_amount bigint;
begin
  if p_amount_paid < 0 then
    raise exception 'Paid amount cannot be negative';
  end if;

  select id
    into v_policy_id
  from public.allocation_policies
  where version = p_policy_version
    and status = 'approved'
    and (effective_from is null or effective_from <= now());

  if v_policy_id is null then
    raise exception 'Allocation policy % is not approved or effective', p_policy_version;
  end if;

  select coalesce(sum(basis_points), 0), count(*)
    into v_total_basis_points, v_line_count
  from public.allocation_policy_lines
  where policy_id = v_policy_id;

  if v_total_basis_points <> 10000 or v_line_count = 0 then
    raise exception 'Allocation policy must contain lines totaling 10000 basis points';
  end if;

  select id
    into v_existing_event_id
  from public.billing_events
  where stripe_invoice_id = p_stripe_invoice_id;

  if v_existing_event_id is not null then
    return v_existing_event_id;
  end if;

  insert into public.billing_events (
    stripe_event_id,
    stripe_invoice_id,
    stripe_subscription_id,
    user_id,
    plan_code,
    policy_id,
    currency,
    amount_paid
  ) values (
    p_stripe_event_id,
    p_stripe_invoice_id,
    p_stripe_subscription_id,
    p_user_id,
    p_plan_code,
    v_policy_id,
    lower(p_currency),
    p_amount_paid
  )
  returning id into v_billing_event_id;

  for v_line in
    select bucket, basis_points
    from public.allocation_policy_lines
    where policy_id = v_policy_id
    order by sort_order
  loop
    v_line_number := v_line_number + 1;

    if v_line_number = v_line_count then
      v_amount := v_remaining;
    else
      v_amount := floor((p_amount_paid::numeric * v_line.basis_points) / 10000)::bigint;
      v_remaining := v_remaining - v_amount;
    end if;

    insert into public.ledger_entries (
      billing_event_id,
      user_id,
      bucket,
      currency,
      amount,
      policy_id
    ) values (
      v_billing_event_id,
      p_user_id,
      v_line.bucket,
      lower(p_currency),
      v_amount,
      v_policy_id
    );
  end loop;

  insert into public.audit_log (
    actor_type,
    action,
    entity_type,
    entity_id,
    metadata
  ) values (
    'system',
    'invoice_allocated',
    'billing_event',
    v_billing_event_id::text,
    jsonb_build_object(
      'stripe_invoice_id', p_stripe_invoice_id,
      'policy_version', p_policy_version,
      'amount_paid', p_amount_paid,
      'currency', lower(p_currency)
    )
  );

  return v_billing_event_id;
end;
$$;

create or replace function public.prevent_mutation()
returns trigger
language plpgsql
as $$
begin
  raise exception '% is append-only', tg_table_name;
end;
$$;

create trigger ledger_entries_append_only
before update or delete on public.ledger_entries
for each row execute function public.prevent_mutation();

create trigger billing_events_append_only
before update or delete on public.billing_events
for each row execute function public.prevent_mutation();

create trigger audit_log_append_only
before update or delete on public.audit_log
for each row execute function public.prevent_mutation();

alter table public.profiles enable row level security;
alter table public.membership_plans enable row level security;
alter table public.allocation_policies enable row level security;
alter table public.allocation_policy_lines enable row level security;
alter table public.consents enable row level security;
alter table public.billing_customers enable row level security;
alter table public.memberships enable row level security;
alter table public.stripe_events enable row level security;
alter table public.billing_events enable row level security;
alter table public.ledger_entries enable row level security;
alter table public.endowment_transfers enable row level security;
alter table public.endowment_transfer_entries enable row level security;
alter table public.audit_log enable row level security;

create policy profiles_select_own on public.profiles
for select to authenticated
using ((select auth.uid()) = id);

create policy profiles_update_own on public.profiles
for update to authenticated
using ((select auth.uid()) = id)
with check ((select auth.uid()) = id);

create policy plans_read_active on public.membership_plans
for select to authenticated
using (is_active = true);

create policy policies_read_approved on public.allocation_policies
for select to authenticated
using (status = 'approved');

create policy policy_lines_read_approved on public.allocation_policy_lines
for select to authenticated
using (
  exists (
    select 1
    from public.allocation_policies p
    where p.id = policy_id and p.status = 'approved'
  )
);

create policy consents_select_own on public.consents
for select to authenticated
using ((select auth.uid()) = user_id);

create policy consents_insert_own on public.consents
for insert to authenticated
with check ((select auth.uid()) = user_id);

create policy consents_update_own on public.consents
for update to authenticated
using ((select auth.uid()) = user_id)
with check ((select auth.uid()) = user_id);

create policy billing_customers_select_own on public.billing_customers
for select to authenticated
using ((select auth.uid()) = user_id);

create policy memberships_select_own on public.memberships
for select to authenticated
using ((select auth.uid()) = user_id);

create policy billing_events_select_own on public.billing_events
for select to authenticated
using ((select auth.uid()) = user_id);

create policy ledger_entries_select_own on public.ledger_entries
for select to authenticated
using ((select auth.uid()) = user_id);

create view public.member_ledger_summary
with (security_invoker = true)
as
select
  user_id,
  currency,
  bucket,
  sum(amount) as amount
from public.ledger_entries
group by user_id, currency, bucket;

grant select on public.member_ledger_summary to authenticated;

revoke all on function public.claim_stripe_event(text, text, jsonb) from public, anon, authenticated;
grant execute on function public.claim_stripe_event(text, text, jsonb) to service_role;

revoke all on function public.post_paid_invoice(text, text, text, uuid, text, text, text, bigint)
from public, anon, authenticated;
grant execute on function public.post_paid_invoice(text, text, text, uuid, text, text, text, bigint)
to service_role;
