# AGENTS.md

## Overview
Single-page portfolio site: Next.js 14 (App Router) statically exported to Cloudflare Pages. All content is in Spanish (`lang="es"`) — keep new copy in Spanish. No tests, no CI workflows; `next build` is the only typecheck.

## Commands
- `npm run dev` — dev server
- `npm run build` — static export to `out/` (type-checks; no separate `typecheck` script)
- `npm run lint` — `next lint` (uses `.eslintrc.json`, `next/core-web-vitals`)
- `npm run deploy` — `npx wrangler pages deploy out`; **build first**, `out/` must exist. Deploys to Cloudflare Pages per `wrangler.toml` (`pages_build_output_dir = "out"`)

## Architecture
- `output: 'export'` in `next.config.mjs` — fully static. No API routes, SSR, or dynamic data fetching. `images.unoptimized: true`.
- Single entry: `src/app/page.tsx` composes `Navbar`, `Hero`, `About`, `Skills`, `Projects`, `Contact`, `Footer` from `src/components/*`. Each section component renders its own `<section id="...">` with a `SectionBg` backdrop.
- `src/app/layout.tsx` mounts global `SmoothScroll` (Lenis), `CustomCursor`, and a `.noise-overlay` div. Keep these wrappers when touching layout.
- Path alias `@/*` → `./src/*`; import components as `@/components/...`.
- Fonts: `next/font/google` (`Outfit`, `Plus_Jakarta_Sans`, `DM_Mono`) bundled at build time into CSS variables `--font-outfit`, `--font-jakarta`, `--font-dm-mono`; consumed via Tailwind classes `font-display`, `font-sans`, `font-mono`.

## Styling conventions
- Tailwind v3 theme in `tailwind.config.ts`: custom colors are CSS-variable-driven (`bg.*`, `accent.*`, `text.*`) with fallbacks — override via variables in `globals.css`, not by adding raw color values. Card surfaces use `bg-card` / `bg-card-hover`; never hardcode hex literals in components.
- Motion stack: GSAP + Lenis (`smooth-scroll.tsx`) + ScrollTrigger + SplitType (via `useGSAP` in `@gsap/react`). Section reveals go through the shared `useSectionReveal` hook (`src/components/use-section-reveal.ts`); the hero opening sequence lives in `hero-section.tsx`. All animation is gated behind `prefers-reduced-motion`. Icons via `react-icons` (Tabler/Phosphor/Simple Icons) — do NOT reintroduce `lucide-react`, it was deliberately replaced.
- The design-aesthetics skill lives at `.agents/skills/frontend-design/SKILL.md`; follow it when making visual changes.

## Gotchas
- `out/`, `.next/`, `next-env.d.ts`, `.wrangler` are gitignored — don't commit build output.
- `.npmrc` sets `legacy-peer-deps=true` — run `npm install`, not `npm ci`.
- Repo-relative: recent style direction is dark, flat/sharp-cornered with abstract monochrome images; avoid glassmorphism and rounded surfaces that were refactored away.
