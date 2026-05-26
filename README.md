# Junaak Landing Page

A minimal Next.js waitlist page for Junaak.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Supabase setup

Run this in Supabase SQL editor:

```sql
create extension if not exists citext;

create table if not exists public.waitlist (
  id uuid primary key default gen_random_uuid(),
  email citext not null unique,
  source text,
  referrer text,
  user_agent text,
  created_at timestamptz not null default now()
);

alter table public.waitlist enable row level security;
```

The signup form uses a server API route, so no public insert policy is needed.

## Environment variables

Create `.env.local` locally and add the same values in Vercel:

```bash
SUPABASE_URL=your_supabase_project_url
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
```

## Deploy

Push this folder to GitHub, then import the repo into Vercel.
