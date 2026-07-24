# Contributing

This repo is a **design/functionality prototype** for the ELIET website rebuild.
The production site will be built on **WordPress + WooCommerce + Elementor + Astra**.

## Rules

- **No real backend code** — no APIs, cart/checkout logic, auth, or CMS integration.
- **Mock data is fine** — product data lives in `src/app/products.ts` and `src/app/comparison/comparisonSpecs.ts`.
- **Match the Figma design** — the goal is design fidelity so the dev team can translate to Elementor/Astra.
- **Don't delete `src/imports/` files** — hash-named image/SVG files are source files; removing one can break a view.

## Commands

```bash
npm install
npm run dev      # local dev server
npm run build    # static build to dist/
```

## Conventions

- `src/app/App.tsx` — main shell with section comments (`─── Section ───`); keep the comment organization intact.
- `src/app/products.ts` — product data (type, full Maestro City detail, `productDetailFrom()`, 71-item `CATALOG`).
- `src/app/comparison/` — compare UX mirroring **Advanced Product Comparison** (Extify) in popup mode.
- `src/styles/` — CSS layers: `fonts.css` → `tailwind.css` → `theme.css` → `globals.css`. Global rules go in `@layer base`.
- `AGENTS.md` is canonical; `CLAUDE.md` is a symlink to it.
- `JOURNAL.md` is the shared session log — add an entry at the top before ending a session.

## Deployment

Every push to `main` auto-deploys to GitHub Pages via `.github/workflows/deploy-pages.yml`.
Don't push half-finished visual states without saying so.