# Eliet — agent instructions

Marketing/product website for ELIET (garden machinery brand), originally exported from Figma Make and evolved in code. Single-page React app with client-side section routing between views: Desk (home), Products, product Detail, Downloads, About ELIET, Demo Tour, Warranty, FAQ, Dealer Locator, Finance Options, Contact, Login, plus builder-only **Design System** and **Navigation Lab**.

## Project intent — prototype only

This repo is a **design/functionality prototype** for the dev team, who will build the production site on **WordPress + WooCommerce + Elementor + Astra theme**. See README.md. Consequences for any work here:

- Do NOT build real backend functionality (APIs, cart/checkout logic, auth, CMS integration). Commerce elements are visual mockups; WooCommerce supplies the real thing.
- Optimize for design fidelity and demonstrable interactions — the deliverable is something the dev team can look at and translate to Elementor/Astra.
- Mock data inline is fine; production data structures are WooCommerce's concern, not this repo's.

## Stack & commands

- Vite 6 + React 18, Tailwind CSS v4 (via `@tailwindcss/vite`), Radix UI / shadcn-style components, `motion` for animation.
- Dependencies are pruned to what the code actually imports (the original Figma Make export shipped ~200MB of unused packages, incl. MUI — removed 2026-07-07). Before adding a dependency, check it isn't already covered by an existing one; keep `date-fns` (peer of react-day-picker) and `tw-animate-css` (imported in `src/styles/tailwind.css`).
- `react` and `react-dom` are direct dependencies (moved from optional peerDeps 2026-07-27 — they're required at runtime).
- `package.json` has no `peerDependencies`, `peerDependenciesMeta`, or `pnpm.overrides` blocks — none of these are used.
- `vite.config.ts` defines manual vendor chunks (`react`, `motion`, `vendor`) so app-code edits don't invalidate cached vendor JS between deploys — keep new heavy libraries grouped there.
- `npm run dev` — local dev server (Vite default **http://localhost:5173/** unless the port is taken; there is no fixed `8080` in `vite.config.ts`). `npm run build` — production build to `dist/`.
- Path alias `@/` → `src/`. The custom `figma:asset/` import prefix resolves to `src/assets/` (see `vite.config.ts`).

## Figma design source

Live design file (not Figma Make): [Eliet](https://www.figma.com/design/WfoDRzDKzzZxCez2ksbCEF/Eliet) — file key `WfoDRzDKzzZxCez2ksbCEF`.

- Page **⚠️ Designs** (`node-id=3284-3221`) holds the full desktop artboard set at **1440** width: `desk` (home), `Products`, product PDP (e.g. E401 PRO), Downloads, FAQs, Dealer Locator, Contact, Finance Options, About ELIET, Warranty Conditions, Demo Tour, Login / Machine Registration, plus Compare **Dialog** states (1/2/3 products).
- Use Cursor’s Figma MCP / skills for design review and design↔code work. Prefer `get_screenshot` + `get_metadata` for reviews; load **figma-design-to-code** before `get_design_context` when implementing.
- The React prototype and this Figma file should stay aligned for handoff. When they diverge on product/FAQ/warranty facts, prefer **client-approved copy** (xlsx / Equipment List) over inventing fixes; for shared chrome (footer HQ, hero subtext), prefer the **Desk / majority Figma artboards**.
- **Canonical HQ (Figma Desk majority, aligned in prototype 2026-07-27):** `2850 N Dug Gap Road, Dalton, GA 30720`, phone `470-762-6266`, `info@elietusa.com`. Products/PDP Figma footers still show Philadelphia — treat those as Figma inconsistencies; do not reintroduce Philadelphia HQ into the prototype.
- **Page hero assets** (wired from Designs artboards; mirrored under `wordpress/assets/images/`):
  - Products `5757:4939` → `src/imports/Products/products-hero.jpg`
  - Downloads `5497:1220` → `src/imports/Downloads/downloads-hero.jpg`
  - FAQ `5497:1568` → `src/imports/FAQ/faq-hero.jpg`
  - Contact `5509:746` → `src/imports/Contact/contact-hero.jpg`
  - Dealer Locator `5497:1883` / page `5481:459` → `dealer-hero.jpg` + `dealer-map.jpg`
  - Finance `5497:2058` → `src/imports/Finance/finance-hero.jpg`
  - About `5480:226` → `src/imports/AboutEliet/about-hero.png`
  - Warranty `5497:2086` → `src/imports/Warranty/warranty-hero.jpg`
- Other known Figma canvas issues:
  - **E401 PRO PDP**: Figma body copy says “dethatcher” while features describe a chipper/shredder — Figma content bug; confirm against Equipment List / Product Import Smartsheet.
  - **Desktop only** on ⚠️ Designs — no mobile artboards; prototype already has responsive breakpoints.
  - **File hygiene**: orphan/unlabeled `Section` frames and “§5 - The Latest Drop” left of `desk`; Dialogs named only “Dialog”; shared Why Eliet / Footer should ideally be components.

## Structure & conventions

- `src/app/App.tsx` — main shell (~3,100+ lines): page sections, navigation state, and asset imports. Keep its section-comment organization (`─── Section ───`) intact. Key shared components live here: `WhyElietBanner` (3-column banner reused across 5 pages), `WhyElietCompact` (single-column variant), `PageHero` (hero for support pages), `FadeUp` (scroll-reveal), `FaqItem` (accordion). Products grid pagination lives here — square page buttons must use `inline-flex items-center justify-center leading-none` so labels stay centered.
  - **Builder reference views** (not production marketing pages): `design-system` and `nav-lab` live in `src/app/DevPages.tsx`. Entry points: About dropdown + footer **FOR BUILDERS**. Design System shows tokens/type/buttons/pills/forms/FAQ/compare; Navigation Lab shows desktop dropdown open-states, mobile accordion phone frame, and WP menu map.
  - **Nav → Products category filtering**: The header nav dropdown stores the target category on `window.__navCategory` when navigating to the Products page. `ProductsPage` consumes it in a `useEffect` on mount (sets `activeCategory`, then deletes the property). Don't break this two-step pattern.
  - **Form date fields**: Use regular text inputs (`type="text"`) with placeholder hints (`mm/dd/yyyy`). Native `type="date"` inputs ignore the placeholder attribute — the hint becomes invisible.
- `src/app/products.ts` — product data: the `ProductDetail` type, full Maestro City content, `productDetailFrom()` helper, and the 71-item `CATALOG` (real 2026 equipment list). `DetailPage` is a reusable template that renders whatever `ProductDetail` it's given — to add a real product page, add a `ProductDetail` object here; don't hardcode product content in `App.tsx`.
- `src/app/comparison/` — product compare UX mirroring **[Advanced Product Comparison](https://woocommerce.com/products/advanced-product-comparison/)** (Extify Plugins, WooCommerce Marketplace) in **popup widget mode** (not a dedicated Compare page, not YITH):
  - `CompareCheckbox` — styled **Compare** button on shop cards + product detail (max 3; disables when full)
  - `ComparisonBar` — sticky footer tray; hidden while popup is open
  - `ComparisonPopup` — overlay table + related products; **auto-opens when a product is added**
  - `ComparisonContext` — max 3, `localStorage` list (`exppc_compare_list`)
  - `comparisonSpecs.ts` — attribute rows with `wcSlug` / `pa_*` + `getRelatedInCategory()`
  - Flow: Compare → sticky bar → **popup**. Production uses that extension + WooCommerce attributes — do not invent a custom compare backend. See README “Product comparison → Advanced Product Comparison”.
- `src/styles/` — CSS layers loaded via `index.css`: `fonts.css` (Overpass), `tailwind.css` (Tailwind v4 + tw-animate-css), `theme.css` (Figma Make tokens), `globals.css` (smooth scroll, scrollbar, orange focus ring, selection color, **safe-area / compare-open / nav-open body classes**). In `@layer base`, buttons use `inline-flex` + `align-items` + **`justify-content: center`** so square controls (pagination, icon buttons) center correctly; Tailwind utilities can still override per-button.
  - `body.eliet-nav-open` — locks scroll while mobile header menu is open.
  - `body.eliet-compare-open main` — adds bottom padding so sticky `ComparisonBar` doesn’t cover CTAs/footer.
- `src/app/components/ui/` — shadcn-style primitives; `src/app/components/figma/` — Figma Make helpers. Don't hand-edit generated primitives unless the task requires it.
- `src/imports/<Section>/` — Figma-exported images and SVG modules, imported directly by `App.tsx`. These are source files: they must be committed, never gitignored or "cleaned up" — deleting an unreferenced-looking hash-named file can break a view. Dedicated page hero JPGs/PNGs per artboard — see **Figma design source → Page hero assets**.
- **Dealer Locator** (`DealerLocatorPage`): aligned to Figma `5481:459` — breadcrumb, dark zip+radius search panel, map image, grid/list results, orange-tier cards, `WhyElietBanner` (not old escalation band). Mock dealer rows remain placeholders until client data arrives.
- **About ELIET** (`AboutPage`): single long page with sticky in-page anchor subnav (`#story`, `#values`, `#team`, `#testimonials`, `#video`, plus `#brochure` below nav). Subnav uses smooth-scroll links + `scroll-mt-[130px]` on sections (70px header + sticky subnav). Not tab panels.
- The React and Tailwind Vite plugins are both required by Figma Make even if unused — do not remove them from `vite.config.ts`.
- Images in `src/imports/` were compressed in place on 2026-07-07. Re-exporting from Figma Make overwrites them with heavyweight originals — re-run compression afterwards (recipe in JOURNAL.md).
- `CLAUDE.md` is a symlink to `AGENTS.md` — edit `AGENTS.md` only.

## Responsive pass — COMPLETE (main, 2026-07-27)

**Goal:** professional mobile → tablet → desktop fidelity. Figma Designs has **no mobile artboards** — use `HomeHero` / `PageHero` as the type-scale reference and the conventions below. **Soften large display sizes until `min-[1201px]`** — don't blow out at 768–1200.

**Shipped on `main`:** sitewide typography propagation; HomeHero / PageHero stepped H1; WhyElietBanner stacked until 1201px; ShopByCategory shorter cards ≤1200; footer copyright-only below `md`; header no drop shadow; Figma page heroes wired (see **Page hero assets**); Dealer Locator aligned to Figma `5481:459`. Visual polish / remaining Figma page matching is the **Cursor track** — not Zed's scope.

### Key patterns (keep consistent)

- **Hero H1** (`HomeHero` / `PageHero`): `text-[36px] sm:text-[44px] md:text-[52px] lg:text-[56px] min-[1201px]:text-[64px] xl:text-[72px]`
- **WhyElietBanner:** stacked until `min-[1201px]`; 3-col only above 1200; logo hidden below 1201
- **ShopByCategory** card heights: shorter ≤1200, full height `min-[1201px]:h-[480px]`
- **Header:** no scroll drop shadow
- **Footer:** copyright-only below `md`; ≤1200 brand full-width + 3 link cols under; >1200 **4-across**; brand body `max-[1200px]:w-3/4`; link buttons `justify-start`
- **TrustedBy:** `items-stretch` / full-width images on mobile; `md:grid-cols-3` intentional (three narrative columns)
- **USA Team:** `grid-cols-1 sm:grid-cols-2 lg:grid-cols-4` (2×2 tablet, 4-up desktop)
- Builder pages: Design System / Nav Lab in `src/app/DevPages.tsx` (About dropdown + footer entry may vary — check current nav)

### Breakpoint convention

| Prefix          | Width    | Expectation                                                                   |
| --------------- | -------- | ----------------------------------------------------------------------------- |
| (base)          | &lt; 640 | Single column; stacked forms; hamburger nav                                   |
| `sm:`           | ≥ 640    | 2-col cards where appropriate                                                 |
| `md:`           | ≥ 768    | 2–3 col grids; sticky subnavs                                                 |
| `lg:`           | ≥ 1024   | Desktop horizontal nav + hover dropdowns; 4-col shop                          |
| `min-[1201px]:` | ≥ 1201   | Full desktop display sizes (hero H1 64px, banner 3-col, category cards 480px) |

Touch targets: prefer **≥ 44×44** (`min-h-11 min-w-11`) for icon/hamburger/compare remove.

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
- **Prototype HQ / footer contact** (aligned to Figma Desk majority): `2850 N Dug Gap Road, Dalton, GA 30720`, `470-762-6266`, `info@elietusa.com`. Mock dealer-list rows may use other cities — those are not HQ. Figma Products/PDP/Contact artboards still inconsistently show Philadelphia / Moreland — keep prototype on Dalton until design file is cleaned.
- Desk hero subtext matches Figma: **“Engineered for professionals. Built to last. Family-owned since 1980.”** Trust / Why Eliet use **“Over 30 years…”** / **“30+ years of engineering”** — both appear in Figma; keep both (different sections), do not invent “40+”.
- Still pending from the client — do NOT invent this content, render clearly-marked placeholders instead: FAQ answers, real warranty terms, real dealer list, and per-product detail copy (comes from their "Product Import Smartsheet", not yet provided).

## Agent handoff — next for Zed (Option A + C)

**Scope:** cleanup and dev-prep audit + pre-release checklist only. **Do not** do visual/Figma polish or invent pending client content (FAQ answers, warranty terms, dealer list, per-product Smartsheet copy).

### Option A — cleanup / handoff audit

Produce a recommended cleanup list (fix only if trivial; otherwise report):

- **Dead code:** unused imports, unreachable components, orphan hash-named files in `src/imports/` (never delete without confirming zero references).
- **Doc mismatches:** `AGENTS.md` ↔ `README.md` ↔ `wordpress/HANDOFF.md` ↔ `wordpress/PAGE-MAPPING.md` (breakpoints, page list, compare flow, HQ contact).
- **Asset / handoff mirrors:** new or changed files in `src/imports/` missing from `wordpress/assets/images/`; hero map in **Page hero assets** still accurate.
- **Data export:** if `products.ts` / `comparisonSpecs.ts` changed since last export, run `node tools/export-products.mjs` and note drift.
- **Stale JOURNAL entries:** superseded handoff notes (e.g. old “responsive IN PROGRESS” items) — flag, don't rewrite history.

### Cleanup audit status — 2026-07-27

- **Completed doc sync:** `README.md`, `wordpress/HANDOFF.md`, and `wordpress/PAGE-MAPPING.md` were updated to match the current prototype state.
- **README:** now points to the canonical Eliet Figma file `WfoDRzDKzzZxCez2ksbCEF` instead of the old Enhance Design file.
- **WordPress handoff docs:** footer notes now reflect the current responsive structure (brand/about block + 3 link groups, true 4-across above 1200px rather than the old simplified `grid-cols-2 md:grid-cols-4` wording).
- **Dealer Locator docs:** handoff docs now describe the current page structure more accurately (breadcrumb, dark zip+radius search panel, map image, dealer results cards/list, `WhyElietBanner`) instead of the older placeholder-only mapping with `WhyElietCompact`.
- **Responsive doc alignment:** handoff notes now better match the shipped `1 / 2 / 4` category/shop/footer patterns and the stepped PageHero type scale.
- **Asset mirror audit:** newly referenced hero assets checked present in both prototype and WordPress mirror paths:
  - `src/imports/Contact/contact-hero.jpg` ↔ `wordpress/assets/images/Contact/contact-hero.jpg`
  - `src/imports/FAQ/faq-hero.jpg` ↔ `wordpress/assets/images/FAQ/faq-hero.jpg`
  - `src/imports/Products/products-hero.jpg` ↔ `wordpress/assets/images/Products/products-hero.jpg`
- **Remaining release hygiene:** after Cursor finishes visual work, verify the new image files are actually tracked/committed (`git status`) before pushing `main`.

### Option C — pre-release checklist

- **Go/no-go:** `npm run build` passes; triage uncommitted work; confirm nothing half-finished should hit `main`.
- **Commit:** only when user asks; message reflects handoff/cleanup not visual WIP.
- **Deploy:** pushing `main` auto-publishes GitHub Pages — warn if visual polish is still in flight.
- **Post-deploy smoke:** https://mattybotstew.github.io/Eliet/ — Home, Products, one PDP, Contact, Login; hamburger nav + scroll lock; add-to-compare → bar → popup; footer HQ shows Dalton GA.

### Parallel tracks (avoid doc collisions)

| Agent      | Owns                                                                       |
| ---------- | -------------------------------------------------------------------------- |
| **Zed**    | Option A + C above; doc consistency; `wordpress/` handoff accuracy         |
| **Cursor** | Figma page matching / visual polish in `App.tsx` (+ hero assets as needed) |

If both agents need doc updates, **Zed owns handoff docs**; Cursor limits doc edits to visual notes in JOURNAL unless coordinating.

## Session continuity

This project is worked on by multiple AI agents (Claude Code, Gemini CLI, Deep Code, Cursor, Zed, …).

- At session start: read `JOURNAL.md` (newest first) and recent `git log`.
- Before ending a session: add a short entry at the top of `JOURNAL.md` — date, agent/model, what was done, decisions, loose ends.
