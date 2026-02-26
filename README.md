# Restaurante Las Tejas — Web

Web moderna y responsive para el Restaurante Las Tejas (Alcorcón). Next.js, TypeScript, TailwindCSS. Enfocada a conversión: reservas, llamada y WhatsApp.

## Requisitos

- Node.js 18+
- (Opcional) Cuenta en [Supabase](https://supabase.com) para guardar reseñas

## Instalación

```bash
npm i
```

## Variables de entorno

Copia el ejemplo y rellena si vas a usar Supabase:

```bash
cp .env.example .env.local
```

- `NEXT_PUBLIC_SUPABASE_URL`: URL del proyecto Supabase  
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Anon key del proyecto  

Si no configuras Supabase, las reseñas funcionan en **modo demo** (localStorage).

## Desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Build y producción

```bash
npm run build
npm run start
```

## Deploy en Vercel

1. Sube el repositorio a GitHub y conecta el proyecto en [Vercel](https://vercel.com).
2. En **Settings → Environment Variables** añade (si usas Supabase):
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
3. Deploy. No incluyas secretos en el repo (usa solo variables públicas de Supabase).

## Supabase: crear proyecto y tabla

1. Crea un proyecto en [supabase.com](https://supabase.com).
2. En **SQL Editor** ejecuta el contenido de `supabase/schema.sql`:
   - Crea la tabla `reviews` con: `id`, `name`, `rating`, `comment`, `created_at`, `approved`.
   - Activa RLS.
   - Policy: `INSERT` público, `SELECT` solo donde `approved = true`.
3. En **Settings → API** copia la URL y la **anon key** y ponlas en `.env.local` (o en Vercel).

Para publicar una reseña: en el dashboard de Supabase, en **Table Editor → reviews**, pon `approved = true` en la fila que quieras mostrar.

## Estructura del proyecto

```
├── app/
│   ├── layout.tsx       # Layout global, fuentes, Navbar/Footer
│   ├── page.tsx         # Home: hero, destacados, historia, galería, ubicación, FAQ, reseñas
│   ├── carta/
│   │   ├── page.tsx     # Carta con filtros y buscador
│   │   └── CartaFloatingCTA.tsx
│   ├── resena/
│   │   └── page.tsx     # Formulario de reseña + listado
│   ├── actions/
│   │   └── reviews.ts   # Server Actions: enviar y listar reseñas
│   └── globals.css
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── HeroVideo.tsx
│   ├── CTAButtons.tsx
│   ├── MapEmbed.tsx
│   ├── Gallery.tsx
│   ├── MenuSection.tsx  # Carta: categorías, búsqueda, alérgenos
│   └── ReviewForm.tsx
├── data/
│   ├── menu.ts          # Carta (categorías, platos, alérgenos)
│   └── site.ts          # Datos del restaurante (nombre, teléfono, redes, etc.)
├── lib/
│   └── supabase.ts      # Cliente Supabase
├── supabase/
│   └── schema.sql       # Script para crear tabla reviews
└── public/
    └── logo.png         # Añade aquí el logo del restaurante (opcional)
```

## Contenido a completar (TODO)

En `data/site.ts` revisa y rellena:

- **Dirección** y **enlace Google Maps** (y, si quieres, la URL del iframe de embed en `components/MapEmbed.tsx`).
- **Horarios** (`schedule.weekdays` y `schedule.closed`).
- **Email** (si lo tenéis).
- **Logo**: coloca el archivo del logo en `public/logo.png` para que aparezca en la barra de navegación. Si no existe, se muestra el texto "Las Tejas".
- **Hero**: para video de fondo, guarda un MP4 en `public/hero.mp4` y en `site.ts` pon `heroVideo: '/hero.mp4'`.
- **Galería**: sustituye las URLs de `galleryImages` en `site.ts` por tus propias fotos (o déjalas para placeholder).

En `data/menu.ts` puedes añadir **precios** a cada plato (campo `price`) si quieres mostrarlos en la carta.

## Scripts

| Comando      | Descripción              |
|-------------|---------------------------|
| `npm run dev`   | Servidor de desarrollo   |
| `npm run build` | Build de producción     |
| `npm run start` | Servidor de producción  |
| `npm run lint`  | ESLint                  |

## Buenas prácticas

- **Imágenes**: `next/image` con tamaños y `sizes` adecuados; galería y hero usan lazy loading.
- **Accesibilidad**: contraste, estados de foco, `aria-label` en botones e iconos.
- **SEO**: metadatos en `layout.tsx` y en cada página.
- **Sin secretos**: solo variables públicas de Supabase; no subas `.env` ni `.env.local`.
