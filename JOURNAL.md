# Project journal — Eliet

Shared session log for all AI agents. Newest entries at the top.

## 2026-07-20 — Cursor (Grok) — YITH-aligned comparison UX

- Aligned `src/app/comparison/` with **YITH WooCommerce Compare** as the production path (design spec, not a custom React port).
- Compare control: prominent pill + checkbox (shop cards + product detail share `CompareCheckbox`); scale feedback on toggle.
- Sticky preview bar: capacity slots (n/3), empty placeholders, “Compare Now” requires ≥2 products; optional “Quick specs” expand for engine/power/weight with difference tint.
- Modal table: `#yith-woocompare` / `#yith-woocompare-table` structure, dark product header row, sticky attribute column, `td.different` highlight (`#fef3e8`), Escape to close.
- Persistence: `localStorage` stand-in for YITH’s cookie-backed compare list; max 3 products.
- Spec rows carry `wcSlug` (`pa_*`) for WooCommerce attribute mapping; README documents YITH install, attributes, theme CSS, and build timeline.
- Card pulse/outline when a product is added to compare.
- Loose ends: drag-reorder of columns intentionally skipped (not a YITH core free flow); real attribute values still await Product Import Smartsheet.

## 2026-07-07 — Claude Code (responsive fixes, login page, design review, cleanup)

- Featured Machines: replaced flex-wrap (3+1 with stretched last card) with `grid grid-cols-2 lg:grid-cols-4`; card images 200px below sm.
- Added visual-only Login page, then rebuilt it to Figma node 5484-2435 ("Login / Machine Registration"): two white form cards (login + machine registration with model dropdown fed from CATALOG), "Why register" benefits band, reused HomeDealerLocator, Newsletter+Footer. Footer "Machine Registration" link now routes here (was warranty). Submits show a prototype notice — no real auth/backend (per project scope).
- Fixed a cascade bug: globals.css rules were unlayered, so they outranked ALL Tailwind utilities — the button display reset was defeating `hidden`/`lg:hidden` (hamburger visible on desktop, header LOGIN visible on mobile). Globals now sit in `@layer base`. Any future global CSS must go inside a layer.
- Design review vs the Astra starter template the devs will use (SpartaX / Sports Wear Store 04): homepage is structurally a re-skin of it, section for section. Open decision points for client/devs: dark-vs-light tone (ours is much darker), prices on product cards or dealer-led, how close to stock Woo product loop, pill-chip category labels, header cart/account space.
- Cleanup: removed unused Figma Make leftovers — `guidelines/`, `default_shadcn_theme.css`, `pnpm-workspace.yaml`, empty `public/plugins/` husk; gitignored `.claude/`. Kept ATTRIBUTIONS.md and postcss.config.mjs deliberately.

## 2026-07-07 — Claude Code (TrustedBy fixes, journal attribution)

- TrustedBy section: headline "Trusted by professionals" no longer collides with images — label column widened to `lg:w-64`, font reduced to 28px on lg+ (36px kept below lg). Verified via Playwright screenshots at 1440/1100/390.
- TrustedBy mobile: images now always render above their headline (image-first DOM order; offset middle column uses `sm:order-last` to keep the staggered desktop layout).
- Corrected the two journal entries below: the design-polish/mobile-audit sessions were done with **Cline**, not Claude Code (identified by missing `Co-Authored-By` trailers on commits 7e2dfa6..c0fbb52).
- Noted but not done (awaiting decision): removing unused Figma Make leftovers — `guidelines/`, `default_shadcn_theme.css`, `pnpm-workspace.yaml`, empty `public/plugins/` dirs.

## 2026-07-07 — Cline (mobile audit, design polish, situ cleanup)

- Mobile audit pass: responsive heading breakpoints on Home hero (`text-[42px] sm:text-[64px]`), PageHero support pages (`text-[36px] sm:text-[48px] md:text-[72px]`). Several headings still need sm: breakpoints.
- Dealer Locator redesign: home page CTA banner — gradient adjusted to 35% for better text centering, taller min-height (420px), orange corner accent, button now navigates to dealers page.
- Removed unused `public/plugins/situ-design/` (~3,200 files of phosphor-icons-reg variants, situ plugin bundles, etc.) — dead weight from original Figma Make export.
- Removed Demo Tour banner from home page (per user request).
- Increased all product image viewports: CategoryCard 440→480px, MachineCard 240→280px, TrustedBy 340→380px, ProductCard 200→260px, DetailPage hero 460→520px.
- Fixed dropdown nav: merged NavDropdown into NavItemDesktop so hover events work correctly.
- Added dropdown navigation from Figma sitemap (NAV_STRUCTURE, NavItemDesktop, mobile accordion menus).
- Code review: fixed overly aggressive button CSS, extracted WhyElietBanner/Compact shared components.
- Design refinements: page transitions (AnimatePresence), back-to-top button, globals.css (smooth scroll, focus ring, scrollbar, button centering).
- Updated README.md (11 pages, shared components, style layers), AGENTS.md (shared components, CSS layers).


## 2026-07-07 — Cline (design refinement pass)

- Added page-level transitions: `AnimatePresence` on the root `App` component so navigating between pages has a subtle cross-fade + slide (y:12→0 → y:0→-8, 250ms, eased).
- Added floating back-to-top button (appears after scrolling 500px, dark pill with orange border, smooth-scrolls to top).
- Added `src/styles/globals.css` with `scroll-behavior: smooth`, custom scrollbar styling, consistent orange `:focus-visible` ring, selection color, and font-family form element reset.
- Imported globals.css into `index.css` to load alongside tailwind/theme/fonts.

## 2026-07-07 — Claude Code (five support pages)
Built all five missing pages from the approved content doc, in this order. Per-page status for picking up later:
1. **Warranty** (`warranty`) — DONE. Coverage tiers, exclusions checklist, 4-step claims flow, register CTA. Content doc itself flags the warranty terms as placeholder — amber banner on page says so; needs real terms from client.
2. **FAQ** (`faq`) — DONE structurally. All 10 approved questions render as accordions; ANSWERS ARE PLACEHOLDERS ("pending from client") because the content doc has [Missing Text: Content Required] for every answer.
3. **Dealer Locator** (`dealers`) — DONE. Search bar + map placeholder + 12 dealer cards from the doc (doc data appears to be sample dealers); real map/search is production (WooCommerce/WP plugin) scope.
4. **Finance Options** (`finance`) — DONE. Two program cards + Why-ELIET band. Doc only defines 2 programs.
5. **Contact** (`contact`) — DONE. Info blocks, office hours, map placeholder, full form (visual only), resource cards linking downloads/dealers/faq.

Wiring: header "Where to Find ELIET"→dealers, "Contact"→contact (desktop+mobile); footer links now route (Find a Dealer, Finance Options, Service→faq, Machine Registration→warranty). New shared PageHero component. All pages end with Newsletter+Footer per site pattern.
Verified with Playwright: 12 assertions across all five pages + cross-links. Remaining for these pages: real FAQ answers, real warranty terms, real dealer list.

## 2026-07-07 — Matt + Claude Code (home hero)
- Committed Matt's home-page edit: hero background now uses the shredder action photo (full opacity, lighter gradient), and the "Trusted by professionals" pillars reuse the Why-ELIET photos.

## 2026-07-07 — Claude Code (real product catalog)
- Replaced the 12 mock products with the real 2026 equipment list: 71 machines, 9 categories (source: client's "Equipment List 2026.csv" Smartsheet export; parsed/cleaned into CATALOG in products.ts).
- Category filter pills now derive from the data (Shredders, Dethatchers, Overseeders, Top Dressers, Edgers, Sod Cutters, Seeders, Blowers, Leaf Vacs).
- Every catalog item opens the reusable detail template with its real name/SKU/engine; long-form description/specs/features still fall back to Maestro City content — real per-product copy lives in the client's Product Import Smartsheet (not yet provided).
- Also reviewed "Eliet Website Content Document (1).xlsx" (approved page copy): existing pages already match it closely. It defines 5 pages the prototype doesn't have: Warranty, FAQ, Dealer Locator, Finance Options, Contact — pending decision.
- Verified with Playwright: category filtering works, real products open the template with correct SKU/engine.

## 2026-07-07 — Claude Code (reusable detail template)
- Refactored DetailPage into a reusable template: all content now renders from a ProductDetail object (new src/app/products.ts — type, MAESTRO_CITY data, productDetailFrom() helper). Visual design unchanged (matches Figma node 5359-182).
- Every catalog card on the Products page now opens the template with its own name/SKU/engine/description; non-identity content falls back to Maestro City until real data exists. In production all of this comes from WooCommerce.
- Fixed: the six Features-tab thumbnails were 1x1-pixel placeholders from the original Figma Make export — replaced with the real images from the Figma design (same filenames).
- Verified with Playwright: two different products open the template with correct data, specs tab renders, screenshots checked.
- To add a real product: add a ProductDetail object in products.ts and pass it to openProduct().

## 2026-07-07 — Claude Code (GitHub Pages)
- Added .github/workflows/deploy-pages.yml: every push to main builds and deploys dist/ to GitHub Pages (also runnable manually via workflow_dispatch).
- Set Vite base './' so assets resolve under the /Eliet/ path prefix.
- Prototype URL for the dev team: https://mattybotstew.github.io/Eliet/

## 2026-07-07 — Claude Code (prototype framing)
- Rewrote README.md for the dev team: this repo is a design/functionality prototype; production will be WordPress + WooCommerce + Elementor + Astra. Included prototype-view → production-page mapping table. Kept the Figma source link.
- Added "Project intent — prototype only" section to AGENTS.md: no real backend work here, optimize for design fidelity.

## 2026-07-07 — Claude Code (image compression)
- Recompressed 13 large images in src/imports in place (palette PNG q85 / mozjpeg q80): 23.6MB -> 7.8MB, dist 32MB -> 24MB. Same filenames, no code changes; visually verified the most-compressed image.
- The 1f82331... background PNG (4 copies) is already optimized — quantizing it made it bigger, left untouched. Don't retry.
- If images are ever re-exported from Figma Make, rerun compression (script pattern: sharp, palette:true quality:85, only replace if ≥25% smaller).

## 2026-07-07 — Claude Code (build optimization)
- Removed 12 unused dependencies (MUI, Emotion, react-dnd, react-router, react-slick, canvas-confetti, popper, masonry): node_modules 388MB → 181MB. Kept date-fns (react-day-picker peer) and tw-animate-css (CSS import).
- Added manual vendor chunking in vite.config.ts (react / motion / vendor): app edits now only invalidate a ~28KB-gzip index chunk instead of the whole 117KB bundle.
- Verified: production build passes (1.6s) and preview serves all chunks. App.tsx untouched.
- Known remaining weight: multi-MB PNGs in src/imports ship unoptimized — compressing them is the next biggest win if page load matters.

## 2026-07-07 — Claude Code (project setup)
- Added .gitignore (node_modules, dist, caches) and wrote a real AGENTS.md documenting the stack (Vite 6 + React 18 + Tailwind v4, Figma Make export), commands, and conventions.
- Committed previously untracked source assets: src/imports images/SVGs (imported by App.tsx), public/, package-lock.json.
- Left uncommitted: an in-progress edit to src/app/App.tsx (7+/8-) that predates this session — intentionally not committed.

## 2026-07-07 — Claude Code (setup)
- Adopted agent-agnostic setup: AGENTS.md is canonical (CLAUDE.md is a symlink), this journal tracks cross-agent session history.
- Recent git history at time of setup:
  - 9091eae Update files from Figma Make
  - c9818ea Add files from Figma Make
  - 6c89629 Initial commit
