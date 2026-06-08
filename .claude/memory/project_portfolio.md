---
name: project-portfolio
description: Personal portfolio website for Badereddin Matar — Next.js 16 + Tailwind v4 + Framer Motion
metadata:
  type: project
---

Full personal portfolio website built from scratch inside the existing Next.js 16.2.7 project.

**Why:** User provided CV (Badereddin Matar, Full-Stack Laravel Dev) and a reference screenshot and asked for a complete production-ready portfolio.

**Stack:** Next.js 16 App Router · React 19 · Tailwind CSS v4 · Framer Motion · Lucide React · Inter + Playfair Display fonts

**Key constraints:**
- Tailwind v4 uses `@import "tailwindcss"` not a config file — gradients are `bg-linear-to-r` not `bg-gradient-to-r`
- `lucide-react` does NOT export `Github` or `Linkedin` — custom SVG icons created in `components/ui/BrandIcons.tsx`
- `@/` maps to the project root (not `src/`), per `tsconfig.json` paths

**File structure (all new):**
- `data/profile.ts` — all CV data (single source of truth)
- `types/index.ts` — TypeScript interfaces
- `utils/animations.ts` — Framer Motion variants
- `lib/utils.ts` — `cn()` and `easeOutCubic()`
- `hooks/useScrollProgress.ts`
- `components/ui/` — ScrollProgressBar, BackToTop, PageLoader, SectionTitle, AnimatedCounter, BrandIcons
- `components/layout/` — Header, Footer
- `components/sections/` — Hero, About, Stats, Skills, Services, Portfolio, Experience, Education, Certifications, Testimonials, Contact
- `app/robots.ts`, `app/sitemap.ts` — SEO files

**How to apply:** Run `npm run dev` → http://localhost:3000. Site is live and type-checks clean.
