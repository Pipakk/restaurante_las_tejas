-- Restaurante Las Tejas: tabla de reseñas
-- Ejecutar en el SQL Editor de tu proyecto Supabase

-- Tabla reviews
create table if not exists public.reviews (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  rating int not null check (rating >= 1 and rating <= 5),
  comment text not null,
  created_at timestamptz default now() not null,
  approved boolean default false not null
);

-- RLS
alter table public.reviews enable row level security;

-- Cualquiera puede insertar (enviar reseña)
create policy "Allow public insert"
  on public.reviews for insert
  to public
  with check (true);

-- Solo se pueden leer las reseñas aprobadas
create policy "Allow public select approved"
  on public.reviews for select
  to public
  using (approved = true);

-- Opcional: policy para que solo admins (o service role) puedan update/delete
-- create policy "Service role full access"
--   on public.reviews for all
--   using (auth.role() = 'service_role');

-- Índice para listar reseñas aprobadas por fecha
create index if not exists idx_reviews_approved_created_at
  on public.reviews (approved, created_at desc);
