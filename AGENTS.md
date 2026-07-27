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
- `src/imports/<Section>/` — Figma-exported images and SVG modules, imported directly by `App.tsx`. These are source files: they must be committed, never gitignored or "cleaned up" — deleting an unreferenced-looking hash-named file can break a view.
- The React and Tailwind Vite plugins are both required by Figma Make even if unused — do not remove them from `vite.config.ts`.
- Images in `src/imports/` were compressed in place on 2026-07-07. Re-exporting from Figma Make overwrites them with heavyweight originals — re-run compression afterwards (recipe in JOURNAL.md).
- `CLAUDE.md` is a symlink to `AGENTS.md` — edit `AGENTS.md` only.

## Responsive pass — IN PROGRESS (handoff to Zed)

**Goal:** professional mobile → tablet → desktop fidelity across the prototype (not just desktop 1440). Figma Designs page has **no mobile artboards** — use prototype judgment + existing `sm`/`md`/`lg` patterns (`HomeHero` / `PageHero` as the type-scale reference).

### Already done (uncommitted on `main` as of 2026-07-27 Cursor stop)

Working tree includes these changes — **commit before continuing** (also includes untracked `src/app/DevPages.tsx` from Design System / Nav Lab):

- **Hero type scale:** Products / Downloads / Demo / About → `text-[42px] sm:… md:…` (was fixed huge sizes that clipped on phones).
- **Grids:** Shop-by-category → `grid-cols-1 sm:2 lg:4` + aspect heights; Featured machines → 1-col mobile; Products shop → `grid-cols-1 sm:2 md:3 lg:4`; TrustedBy → `md:grid-cols-3` (not `sm`).
- **Category cards:** Explore CTA always visible on touch; hover-only fade reserved for `md+`.
- **Products filter pills:** horizontal scroll on small screens; lighter sticky toolbar.
- **Downloads search:** stacks `flex-col sm:flex-row`.
- **Brochure form:** `grid-cols-1 sm:grid-cols-2`.
- **Header:** 44px tap targets (menu/search); mobile nav `max-h-[calc(100dvh-70px)] overflow-y-auto` + body scroll lock.
- **Compare:** safer tap targets on bar remove / checkbox / popup close; safe-area on bar; `eliet-compare-open` main padding; BackToTop lifts when bar visible.
- **Misc:** Newsletter gutters + type; PDP feature cards stack image above text on mobile; lightbox close inset; toaster `top-center`.
- **Build:** `npm run build` passes with current WIP.

### Next steps for Zed (finish the pass)

1. **Commit current WIP** if not already (DevPages + responsive + docs) so Pages deploy isn’t half-done later — or finish polish first then one commit; ask user preference.
2. **Finish WhyElietCompact padding** — two remaining `px-10 md:px-14 py-14` blocks in `App.tsx` (~665, ~2753 Finance compact). Match banner: `px-6 sm:px-10 md:px-14 py-12 sm:py-14`.
3. **ProductCard image height** — still fixed `height: 260`; use `h-[200px] sm:h-[260px]` (or similar) so 1-col mobile cards aren’t oversized.
4. **Detail specs / accessories rows** — long values can collide; `flex-col sm:flex-row` or `gap` + `break-words` / `min-w-0`.
5. **CTA / escalation bands** — any remaining `px-10` without `sm:` step (dealer/FAQ/contact bands ~2530–2690); align to `px-6 sm:px-10`.
6. **Dealer text links** — ensure `min-h-11` tap targets on phone/email.
7. **Comparison popup mobile** — optional: truncate “View {name} →” / shorter label on narrow; table already scrolls horizontally.
8. **Visual QA** — resize or device check: Home, Products, PDP, Contact, Login, Design System, Nav Lab; open compare bar on phone width; open hamburger + accordion scroll.
9. **Docs after finish** — note responsive conventions in `wordpress/HANDOFF.md` Responsive Breakpoints (safe-area, compare padding, 1-col product grid); short JOURNAL entry; sync `eliet-components.css` only if new reusable rules belong there.
10. **Do not** invent Figma mobile frames; do not touch Cline-owned WordPress export unless catalog/compare specs change.

### Breakpoint convention (keep consistent)

| Prefix | Width | Expectation |
|--------|-------|-------------|
| (base) | &lt; 640 | Single column; stacked forms; hamburger nav |
| `sm:` | ≥ 640 | 2-col cards where appropriate |
| `md:` | ≥ 768 | 2–3 col grids; sticky subnavs |
| `lg:` | ≥ 1024 | Desktop horizontal nav + hover dropdowns; 4-col shop |

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

## Session continuity

This project is worked on by multiple AI agents (Claude Code, Gemini CLI, Deep Code, Cursor, …).
- At session start: read `JOURNAL.md` (newest first) and recent `git log`.
- Before ending a session: add a short entry at the top of `JOURNAL.md` — date, agent/model, what was done, decisions, loose ends.
