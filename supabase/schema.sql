-- Create table for simulation users (anonymous or authenticated)
create table public.sim_users (
  id uuid not null default gen_random_uuid (),
  created_at timestamp with time zone not null default now(),
  total_credits_spent integer default 0,
  constraint sim_users_pkey primary key (id)
);

-- Create table for bills/proposals
create table public.sim_bills (
  id uuid not null default gen_random_uuid (),
  created_at timestamp with time zone not null default now(),
  title text not null,
  description text not null,
  month integer not null, -- 1 to 12
  category text not null,
  constraint sim_bills_pkey primary key (id)
);

-- Create table for votes
create table public.sim_votes (
  id uuid not null default gen_random_uuid (),
  created_at timestamp with time zone not null default now(),
  user_id uuid not null references public.sim_users (id),
  bill_id uuid not null references public.sim_bills (id),
  credits integer not null, -- Number of credits spent (cost)
  vote_count integer not null, -- Number of votes (sqrt of cost)
  direction text not null, -- 'for' or 'against'
  constraint sim_votes_pkey primary key (id)
);

-- Enable RLS
alter table public.sim_users enable row level security;
alter table public.sim_bills enable row level security;
alter table public.sim_votes enable row level security;

-- Policies (Open for experimentation for now)
create policy "Enable read access for all users" on public.sim_bills for select using (true);
create policy "Enable insert for all users" on public.sim_users for insert with check (true);
create policy "Enable insert for all users" on public.sim_votes for insert with check (true);
