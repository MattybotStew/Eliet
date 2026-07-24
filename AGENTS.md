# Eliet — agent instructions

Marketing/product website for ELIET (garden machinery brand), originally exported from Figma Make and evolved in code. Single-page React app with client-side section routing between views: Desk (home), Products, product Detail, Downloads, About ELIET, Demo Tour, Warranty, FAQ, Dealer Locator, Finance Options, Contact, and Login.

## Project intent — prototype only

This repo is a **design/functionality prototype** for the dev team, who will build the production site on **WordPress + WooCommerce + Elementor + Astra theme**. See README.md. Consequences for any work here:

- Do NOT build real backend functionality (APIs, cart/checkout logic, auth, CMS integration). Commerce elements are visual mockups; WooCommerce supplies the real thing.
- Optimize for design fidelity and demonstrable interactions — the deliverable is something the dev team can look at and translate to Elementor/Astra.
- Mock data inline is fine; production data structures are WooCommerce's concern, not this repo's.

## Stack & commands

- Vite 6 + React 18, Tailwind CSS v4 (via `@tailwindcss/vite`), Radix UI / shadcn-style components, `motion` for animation.
- Dependencies are pruned to what the code actually imports (the original Figma Make export shipped ~200MB of unused packages, incl. MUI — removed 2026-07-07). Before adding a dependency, check it isn't already covered by an existing one; keep `date-fns` (peer of react-day-picker) and `tw-animate-css` (imported in `src/styles/tailwind.css`).
- `vite.config.ts` defines manual vendor chunks (`react`, `motion`, `vendor`) so app-code edits don't invalidate cached vendor JS between deploys — keep new heavy libraries grouped there.
- `npm run dev` — local dev server. `npm run build` — production build to `dist/`.
- Path alias `@/` → `src/`. The custom `figma:asset/` import prefix resolves to `src/assets/` (see `vite.config.ts`).

## Structure & conventions

- `src/app/App.tsx` — main shell (~3,100+ lines): page sections, navigation state, and asset imports. Keep its section-comment organization (`─── Section ───`) intact. Key shared components live here: `WhyElietBanner` (3-column banner reused across 5 pages), `WhyElietCompact` (single-column variant), `PageHero` (hero for support pages), `FadeUp` (scroll-reveal), `FaqItem` (accordion). Products grid pagination lives here — square page buttons must use `inline-flex items-center justify-center leading-none` so labels stay centered.
- `src/app/products.ts` — product data: the `ProductDetail` type, full Maestro City content, `productDetailFrom()` helper, and the 71-item `CATALOG` (real 2026 equipment list). `DetailPage` is a reusable template that renders whatever `ProductDetail` it's given — to add a real product page, add a `ProductDetail` object here; don't hardcode product content in `App.tsx`.
- `src/app/comparison/` — product compare UX mirroring **[Advanced Product Comparison](https://woocommerce.com/products/advanced-product-comparison/)** (Extify Plugins, WooCommerce Marketplace) in **popup widget mode** (not a dedicated Compare page, not YITH):
  - `CompareCheckbox` — styled **Compare** button on shop cards + product detail (max 3; disables when full)
  - `ComparisonBar` — sticky footer tray; hidden while popup is open
  - `ComparisonPopup` — overlay table + related products; **auto-opens when a product is added**
  - `ComparisonContext` — max 3, `localStorage` list (`exppc_compare_list`)
  - `comparisonSpecs.ts` — attribute rows with `wcSlug` / `pa_*` + `getRelatedInCategory()`
  - Flow: Compare → sticky bar → **popup**. Production uses that extension + WooCommerce attributes — do not invent a custom compare backend. See README “Product comparison → Advanced Product Comparison”.
- `src/styles/` — CSS layers loaded via `index.css`: `fonts.css` (Overpass), `tailwind.css` (Tailwind v4 + tw-animate-css), `theme.css` (Figma Make tokens), `globals.css` (smooth scroll, scrollbar, orange focus ring, selection color). In `@layer base`, buttons use `inline-flex` + `align-items` + **`justify-content: center`** so square controls (pagination, icon buttons) center correctly; Tailwind utilities can still override per-button.
- `src/app/components/ui/` — shadcn-style primitives; `src/app/components/figma/` — Figma Make helpers. Don't hand-edit generated primitives unless the task requires it.
- `src/imports/<Section>/` — Figma-exported images and SVG modules, imported directly by `App.tsx`. These are source files: they must be committed, never gitignored or "cleaned up" — deleting an unreferenced-looking hash-named file can break a view.
- The React and Tailwind Vite plugins are both required by Figma Make even if unused — do not remove them from `vite.config.ts`.
- Images in `src/imports/` were compressed in place on 2026-07-07. Re-exporting from Figma Make overwrites them with heavyweight originals — re-run compression afterwards (recipe in JOURNAL.md).
- `CLAUDE.md` is a symlink to `AGENTS.md` — edit `AGENTS.md` only.

## WordPress handoff (`wordpress/`)

The `wordpress/` directory is a **deliverable for the dev team** — not consumed by the prototype build at all. It should be kept up to date when prototype content or structure changes:

- `wordpress/HANDOFF.md` — comprehensive handoff document: design tokens, typography, spacing, color palette, component specs, responsive breakpoints, animation specs, global CSS rules, navigation structure, and page-by-page build notes.
- `wordpress/PAGE-MAPPING.md` — detailed mapping of all 12 prototype views → WordPress page templates, Elementor sections, shared components, WooCommerce integrations, and known content gaps.
- `wordpress/assets/css/eliet-tokens.css` — design tokens as plain CSS variables (colors, fonts, spacing, radii, shadows, layers).
- `wordpress/assets/css/eliet-components.css` — component-level CSS (compare button, pagination, focus ring, scrollbar, fade-up, FAQ accordion, etc.).
- `wordpress/assets/images/` — copies of all image assets from `src/imports/` organized by section. **When images are added or changed in `src/imports/`, copy them here too.**
- `wordpress/data/products.json` — complete product data export (71 products, comparison specs, WC attribute slugs, Maestro City full detail). **When `CATALOG` or `COMPARISON_PRODUCT_DATA` changes in the TS source, re-run `node tools/export-products.mjs` to regenerate this file.**

## Tools (`tools/`)

- `tools/export-products.mjs` — standalone Node.js script that extracts the product catalog + comparison specs + Maestro City detail from the TS source files and writes `wordpress/data/products.json`. Run after any change to `src/app/products.ts` or `src/app/comparison/comparisonSpecs.ts`. Uses ESM (`import`/`export` syntax); run with `node tools/export-products.mjs`.

## Root files

- `.gitignore` — excludes `node_modules`, `dist`, `.vscode/`, cache dirs.
- `LICENSE` — MIT.
- `CONTRIBUTING.md` — contribution guidelines for prototype work.
- `CODEOWNERS` — default PR reviewers.
- `ATTRIBUTIONS.md` — third-party attributions (kept from Figma Make export).

## Deployment

- **Pushing to `main` publishes the site.** Every push auto-deploys to GitHub Pages at https://mattybotstew.github.io/Eliet/ via `.github/workflows/deploy-pages.yml`. Don't push half-finished visual states without saying so.
- Vite `base: './'` in `vite.config.ts` is required for assets to resolve under the `/Eliet/` URL prefix — keep it.

## Content sources & pending content

- Approved page copy: client's "Eliet Website Content Document" (xlsx). Product catalog: "Equipment List 2026.csv" (Smartsheet export) → `CATALOG` in `products.ts`.
- Still pending from the client — do NOT invent this content, render clearly-marked placeholders instead: FAQ answers, real warranty terms, real dealer list, and per-product detail copy (comes from their "Product Import Smartsheet", not yet provided).

## Session continuity

This project is worked on by multiple AI agents (Claude Code, Gemini CLI, Deep Code, Cursor, …).
- At session start: read `JOURNAL.md` (newest first) and recent `git log`.
- Before ending a session: add a short entry at the top of `JOURNAL.md` — date, agent/model, what was done, decisions, loose ends.
