-- =====================================================================
--  RANKING DE ANIMES — tablas para Supabase
--  Cómo usarlo: Supabase → tu proyecto → SQL Editor → New query →
--  pega todo este archivo → Run. Solo hace falta hacerlo una vez.
--
--  - perfiles:     tu nombre de usuario público (el del enlace ranking.html?u=...)
--  - valoraciones: tu nota (1-10) de cada anime completo y el orden de los empates
--  Cualquiera puede LEER (para que tus amigos vean tu ranking con el enlace),
--  pero cada persona solo puede crear, cambiar o borrar lo suyo.
-- =====================================================================

create table if not exists public.perfiles (
  user_id    uuid primary key references auth.users (id) on delete cascade,
  usuario    text not null unique check (usuario ~ '^[a-z0-9_]{3,20}$'),
  nombre     text,
  updated_at timestamptz not null default now()
);

create table if not exists public.valoraciones (
  user_id    uuid not null references auth.users (id) on delete cascade,
  serie      text not null,                                   -- id del anime (una nota por anime completo)
  nota       smallint not null check (nota between 1 and 10),
  orden      integer,                                         -- desempate manual entre animes con la misma nota
  updated_at timestamptz not null default now(),
  primary key (user_id, serie)
);

alter table public.perfiles     enable row level security;
alter table public.valoraciones enable row level security;

-- Lectura pública (para compartir el ranking con un enlace)
drop policy if exists "perfiles: leer todos" on public.perfiles;
create policy "perfiles: leer todos" on public.perfiles for select using (true);
drop policy if exists "valoraciones: leer todas" on public.valoraciones;
create policy "valoraciones: leer todas" on public.valoraciones for select using (true);

-- Escritura: solo lo tuyo
drop policy if exists "perfiles: crear el mío" on public.perfiles;
create policy "perfiles: crear el mío" on public.perfiles for insert with check (auth.uid() = user_id);
drop policy if exists "perfiles: editar el mío" on public.perfiles;
create policy "perfiles: editar el mío" on public.perfiles for update using (auth.uid() = user_id);

drop policy if exists "valoraciones: crear las mías" on public.valoraciones;
create policy "valoraciones: crear las mías" on public.valoraciones for insert with check (auth.uid() = user_id);
drop policy if exists "valoraciones: editar las mías" on public.valoraciones;
create policy "valoraciones: editar las mías" on public.valoraciones for update using (auth.uid() = user_id);
drop policy if exists "valoraciones: borrar las mías" on public.valoraciones;
create policy "valoraciones: borrar las mías" on public.valoraciones for delete using (auth.uid() = user_id);

-- =====================================================================
--  COMENTARIOS EN LOS RANKINGS
--  Cualquiera con cuenta y nombre de usuario puede comentar el ranking
--  de otra persona (o el suyo). Todos pueden leerlos.
--  Puede borrar un comentario quien lo escribió o el dueño del ranking.
-- =====================================================================

create table if not exists public.comentarios_ranking (
  id         bigint generated always as identity primary key,
  ranking    uuid not null references auth.users (id) on delete cascade,  -- dueño del ranking comentado
  autor      uuid not null references auth.users (id) on delete cascade,  -- quien escribe
  texto      text not null check (char_length(texto) between 1 and 500),
  created_at timestamptz not null default now()
);
create index if not exists comentarios_ranking_ranking_idx on public.comentarios_ranking (ranking, created_at);

alter table public.comentarios_ranking enable row level security;

drop policy if exists "comentarios: leer todos" on public.comentarios_ranking;
create policy "comentarios: leer todos" on public.comentarios_ranking for select using (true);
drop policy if exists "comentarios: escribir como yo" on public.comentarios_ranking;
create policy "comentarios: escribir como yo" on public.comentarios_ranking for insert
  with check (auth.uid() = autor and exists (select 1 from public.perfiles p where p.user_id = auth.uid()));
drop policy if exists "comentarios: borrar los míos o los de mi ranking" on public.comentarios_ranking;
create policy "comentarios: borrar los míos o los de mi ranking" on public.comentarios_ranking for delete
  using (auth.uid() = autor or auth.uid() = ranking);
