## 2026-07-27 — Cursor / Composer — sitewide responsive propagation (≤1200)

- Propagated home-page responsive conventions across all prototype views in `App.tsx` + builder heroes in `DevPages.tsx`.
- **PageHero** (Warranty, FAQ, Finance, Dealers, Contact): H1 now matches HomeHero stepped scale (`36→44→52→56→64→72`); body adds `min-[1201px]:text-[22px]`.
- **Inline page heroes** — Downloads, Products, About: same HomeHero discipline (removed `md:text-[90px]` / `lg:text-[110px]` jumps).
- **DemoHero**: display-sized but capped through 1200 — `… lg:text-[72px] min-[1201px]:text-[96px] xl:text-[110px]` (was 110/132 at md/lg).
- **WhyElietCompact** + Finance page: headline `min-[1201px]:text-[36px]`; Finance duplicate block replaced with shared `WhyElietCompact`.
- **CTA bands** (home Demo/Dealer, Contact escalation, Warranty/FAQ/Dealer CTAs): softened to `md:text-[36px]` / `min-[1201px]:text-[38–48px]`.
- **About tab H2s**: `lg:text-[42px]` → `min-[1201px]:text-[42px]`; Story intro keeps `xl:text-[52px]` for display emphasis.
- **Detail PDP title**, **Login hero**, **DevPages** type samples: aligned to same breakpoint convention.
- Validation: `npm run build` passes. Not committed.

## 2026-07-27 — Cursor / Composer — responsive typography + category card heights

- **WhyElietBanner** headline capped at ≤1200px: `text-[26px] sm:text-[28px] md:text-[30px] lg:text-[26px] min-[1201px]:text-[36px]` (was flat `md:text-[36px]` through laptop widths).
- **ShopByCategory** `CategoryCard` heights: `h-[240px] sm:h-[280px] lg:h-[300px] min-[1201px]:h-[480px]` (was `h-[240px] sm:h-[380px] lg:h-[480px]`). Full 480px height only above 1200px.
- **Responsive type pass** across `App.tsx`: section H2s (Why Eliet banners, About, support pages, CTA bands), TrustedBy column titles, demo/event headings, product card titles (`break-words`), PageHero body, About/Demo heroes, PDP tab headings, login cards, brochure subheads, finance cards, warranty durations. Pattern: `text-[28px] sm:text-[32px] md:text-[36px]` (or similar stepped scales matching HomeHero/PageHero discipline).
- Validation: `npm run build` passes. Not committed.

## 2026-07-27 — Cursor — footer 4-col grid + local host

- Picked up Zed footer/image-grid handoff: footer is now one grid `1 → 2×2 → 4` with brand as column 1 + three link groups (true 4-across at `xl`).
- USA Team: `sm:2` / `lg:4`. TrustedBy remains intentional 3-up at `md+`.
- Marked responsive pass **COMPLETE** in AGENTS.md; cleared stale Zed TODO list.
- Local: `npm run dev` (check terminal for port — prefer 5173).

## 2026-07-27 — Zed / GPT-5.4 — footer / image-grid handoff for Cursor

- User reported they were still seeing centered footer text and wanted image sections to resolve to either **4 across** or **2 on top / 2 on bottom**, plus another fix for the earlier 3-column issue.
- Updated `src/app/App.tsx`:
  - footer bottom row now uses `text-left` with `items-start sm:items-center`
  - footer outer layout breakpoint softened from `md` → `lg`
  - footer links grid changed from `grid-cols-1 xs:grid-cols-2 md:grid-cols-2 xl:grid-cols-4` to `grid-cols-1 sm:grid-cols-2 2xl:grid-cols-4`
  - `UsaTeamSection` changed from `sm:grid-cols-3` to `sm:grid-cols-2 xl:grid-cols-4`
- Validation: `npm run build` passes.
- Loose end for Cursor: footer still cannot become a true 4-column layout because `FOOTER_COLS` only has 3 groups; likely next step is to fold the logo/about block into the same responsive grid as a 4th column and visually confirm whether the user's "3 col issue" refers to footer, USA Team, TrustedBy, or another section at `http://localhost:5173/`.

## 2026-07-27 — Zed / GPT-5.4 — 768px tablet cleanup pass

- Follow-up pass for the user-reported broken **768px** view.
- Kept major CTA / escalation banners stacked until `lg` instead of forcing side-by-side layout at `md`, and softened their tablet heading scales/padding so they stop feeling overblown at iPad-width screens.
- Refined tablet behavior in Contact/Login flows: contact resource cards now stay `1 → 2 → 3` columns (`base` / `sm` / `xl`), office-hours rows wrap cleanly, phone/email links keep stronger tap targets, and the login remember/forgot row no longer collides at mid widths.
- Dealer/support CTA buttons now expand full-width on narrow/tight widths for more stable large-phone/tablet layouts.
- Validation: `npm run build` passes.

## 2026-07-27 — Zed / GPT-5.4 — tablet / large-phone nav + footer polish

- Follow-up responsive QA pass focused on awkward in-between widths.
- Replaced header dropdown carets with **plus / minus** treatment: desktop nav now shows `+` on items with children; mobile accordion toggles use `+` / `−` instead of chevrons.
- Improved mobile/tablet nav readability with slightly cleaner nested spacing.
- Refined footer layout in `src/app/App.tsx` for large phones and tablets: moved from loose wrapping flex columns to a more structured grid, improved link wrapping, and ensured footer links keep comfortable tap targets.
- Tightened banner / CTA behavior at mid widths: Demo Tour banner inner padding and Dealer escalation CTA alignment/button stacking now read more cleanly before full desktop.
- Validation: `npm run build` passes.

## 2026-07-27 — Zed / GPT-5.4 — finished responsive pass handoff

- Completed the remaining responsive cleanup in `src/app/App.tsx`.
- **Finished:** `WhyElietCompact` mobile padding, product card image height (`h-[200px] sm:h-[260px]`), detail spec row wrapping, accessories row stacking/wrapping, CTA band padding normalization, dealer phone/email tap targets with `tel:` / `mailto:` links, and compare popup narrow-screen button shortening (`View →` on mobile).
- Updated `wordpress/HANDOFF.md` responsive notes to document the 1-column products grid on phones, touch target guidance, compare safe-area / compare-open padding behavior, and long-row wrapping expectations.
- Validation: `npm run build` passes after the responsive finish.
- Loose ends: latest responsive commit is still local unless pushed; prototype still intentionally uses placeholder FAQ / warranty / dealer content where client copy is pending.

## 2026-07-27 — Cursor — STOP handoff: responsive pass → Zed

- **Stopped mid responsive professional pass.** Core P0/P1 work is in the working tree (uncommitted) + untracked `src/app/DevPages.tsx`.
- **Done:** hero type scales, 1-col mobile product/featured/category grids, touch Explore on category cards, products pill scroll, downloads search stack, brochure 1-col form, header 44px targets + scrollable mobile nav + body lock, compare bar safe-area/padding/BackToTop lift, PDP feature stack, lightbox inset, toaster top-center. `npm run build` OK.
- **Zed next:** see **AGENTS.md → “Responsive pass — IN PROGRESS”** numbered list (WhyElietCompact padding leftovers, ProductCard image height, detail spec rows, CTA `px-10`, dealer tap targets, compare popup polish, visual QA, then commit + HANDOFF note).
- Do not start unrelated work until that section is cleared or cancelled.

## 2026-07-27 — Cursor — Design System + Navigation Lab pages

- Added builder-only prototype views in `src/app/DevPages.tsx`:
  - **Design System** (`design-system`): colors, type, buttons, category pills, forms, FAQ accordion, compare control, layout/breakpoints table.
  - **Navigation Lab** (`nav-lab`): desktop header anatomy, all dropdowns shown open, interactive mobile accordion in a 390px frame, WP menu map table.
- Wired into `App.tsx` routing; entry via About dropdown + footer **FOR BUILDERS**.
- Docs: `AGENTS.md`, `README.md`, `wordpress/HANDOFF.md`, `wordpress/PAGE-MAPPING.md`.
- Not production WP pages — handoff reference only. Build passes.

## 2026-07-27 — Cursor — Figma→prototype design alignment

- Canonical HQ from Figma Desk majority (9× Dalton vs 3× Moreland): **2850 N Dug Gap Road, Dalton, GA 30720**, phone **470-762-6266**.
- Updated `App.tsx`: `FOOTER_COLS`, `CONTACT_BLOCKS` (HQ + support/sales phone), Contact map label, `tel:` href. Left mock dealers + Demo Tour Philly event as placeholders.
- Hero subtext already matched Figma (“Family-owned since 1980”); no change. Trust strip “Over 30 years” / Why Eliet “30+ years” already match Figma.
- Also aligned Desk hero primary CTA to Figma: **Shredders →** (was All Products →) with `__navCategory` filter.
- Updated `AGENTS.md` (Dalton canonical; reversed earlier “keep Philadelphia” note). Visual spot-checks + discrepancy list in session summary.
- Loose ends: Figma Products/PDP/Contact still show Philadelphia in places; live GitHub Pages still shows old Philadelphia until deploy.

## 2026-07-27 — Cline — Finalization: 3 bug fixes, cleanup, WordPress refresh

- Fixed 3 issues from code re-audit:
  - **Login registration form**: Purchase date field changed from `type="date"` → `type="text"` with `placeholder="mm/dd/yyyy"` — same pattern that was fixed on the Demo Tour form in the previous audit but missed here.
  - **`tools/cline-copilot-bridge/` removed**: Cline checkpoint artifacts (VSIX, extension.js, package.json, README.md) no longer needed.
  - **ComparisonPopup View buttons**: Added `onClick={() => closePopup()}` so they're not dead controls.
- Regenerated `wordpress/data/products.json` via `tools/export-products.mjs` (71 products, counts unchanged).
- Verified: 52 images in `src/imports/` = 52 images in `wordpress/assets/images/`. Build passes cleanly.
- **Loose ends**: Cursor is handling Figma design alignment (footer address Philadelphia vs Dalton GA, brand claim consistency, visual spot-checks). See JOURNAL entry above for the Figma review findings from Cursor's MCP access.

## 2026-07-27 — Cline — Figma comparison report (plan mode)

- Cursor ran a Figma MCP review of the updated design file (`WfoDRzDKzzZxCez2ksbCEF`, node 3284:3221). Key prototype-relevant findings:
  - **Footer address mismatch**: Prototype uses Philadelphia (19 E Moreland Ave) everywhere; Figma uses Dalton, GA (2850 N Dug Gap Road) on most artboards. Client decision needed.
  - **Brand claim variance**: Hero says "Family-owned since 1980" but Figma trust strip uses "Over 30 years".
  - **E401 PRO PDP copy bug**: Figma frame has dethatcher copy but shredder features — prototype correctly categorizes it as Dethatchers.
  - All 13 prototype pages map to Figma artboards. Category pills, pagination ("Showing X of Y"), compare dialog (1/2/3 states) all match.
- Cursor assigned Figma alignment work; Cline handling code fixes + WordPress handoff.

# Project journal — Eliet

Shared session log for all AI agents. Newest entries at the top.

## 2026-07-27 — Cursor — Figma Designs review → AGENTS.md

- Reviewed Figma page **⚠️ Designs** (`WfoDRzDKzzZxCez2ksbCEF` / `3284:3221`): full 1440 desktop artboard set + compare dialogs; maps to prototype views.
- Updated `AGENTS.md`: Figma design source section (file URL, MCP guidance), known Figma issues (footer Dalton vs prototype Philadelphia, E401 PRO category mismatch, no mobile artboards, orphan frames), `npm run dev` port note (5173 not 8080), content rules for HQ address + “30+ years” claim.
- Decision: keep prototype Philadelphia footer until client confirms HQ; do not pull Dalton into code.
- Loose ends: client confirmation on HQ address; fix E401 PRO copy in Figma; optional Figma canvas cleanup / mobile frames; canvas review artifact at Cursor canvases `figma-designs-review.canvas.tsx`.

## 2026-07-27 — Cline — Code audit & fixes

- Audited entire codebase for issues. Found 8; fixed 6:
  - **Nav category filter was broken**: header nav dropdown wrote `window.__navCategory` but `ProductsPage` never read it. Added `useEffect` to consume the value on mount and set `activeCategory` — clicking e.g. "Shredders" / "Dethatchers" in nav now correctly filters the grid.
  - Removed dead `isNavPageActive` function in `Header` (defined but never called).
  - Moved `react` and `react-dom` from optional peerDeps → direct dependencies in `package.json`.
  - Removed unused `peerDependencies`, `peerDependenciesMeta`, and `pnpm.overrides` blocks from `package.json`.
  - Comparison popup "View" button now shows full product name (was `p.name.split(" ")[0]` — only first word).
  - Comparison bar product thumbnails: changed `alt=""` → `alt={p.name}` for accessibility.
  - Demo request date field: removed `type="date"` so `placeholder="mm/dd/yyyy"` actually renders (native date inputs ignore placeholder).
- Updated `AGENTS.md` with `__navCategory` pattern docs, date field convention, and dep notes.
- Build passes cleanly; pushed to main.

## 2026-07-24 — Cline — Commit WordPress handoff deliverables

- Committed all WordPress handoff work: `AGENTS.md` (handoff + tools sections), `README.md` (handoff table), `wordpress/assets/css/eliet-tokens.css` (design tokens), `wordpress/PAGE-MAPPING.md`, `wordpress/assets/css/eliet-components.css`, `tools/export-products.mjs`, `wordpress/data/products.json` (10,752 lines), and 52 copied image assets in `wordpress/assets/images/`.
- Working directory now clean (all changes committed on top of `de08114`).

## 2026-07-24 — Cline — WordPress handoff preparation

- **Repo hygiene:** `.gitignore` adds `.vscode/`; `package.json` renamed to `eliet-prototype`; `index.html` title/description fixed; `LICENSE` (MIT), `CONTRIBUTING.md`, and `CODEOWNERS` created.
- **wordpress/HANDOFF.md** — comprehensive handoff document covering design tokens, typography, spacing, color palette, component specs, responsive breakpoints, animation specs, global CSS rules, navigation structure, page-by-page build notes, and image asset reference.
- **wordpress/assets/css/eliet-tokens.css** — design tokens as plain CSS variables (colors, fonts, spacing, radii, shadows, layers).
- **wordpress/assets/css/eliet-components.css** — component-level CSS (compare button, pagination, focus ring, scrollbar, fade-up, FAQ accordion, etc.).
- **wordpress/assets/images/** — all PNG/JPG assets copied from `src/imports/{Desk,Products,Detail,AboutEliet,DemoTour,Downloads}/` (52 images total, counts match source). 1Header has no standalone images (SVG components only).
- **tools/export-products.mjs** — script that extracts all 71 catalog products + 29 hardcoded comparison specs + 42 fallback specs + Maestro City full detail into `wordpress/data/products.json` (10,752 lines). Run via `node tools/export-products.mjs`.
- **wordpress/data/products.json** — complete product data export with comparison specs, `wcAttributeSlugs` mapping, comparison categories, and detail page content.
- **wordpress/PAGE-MAPPING.md** — detailed mapping of all 12 prototype views → WordPress page templates, Elementor sections, WooCommerce integrations, shared components, and known content gaps.

## 2026-07-21 — Cursor — Agents + pagination centering

- Updated `AGENTS.md` (CLAUDE.md symlink): Extify **popup** compare (not YITH/page), `ComparisonPopup`, max 3, button `justify-content: center` in `globals.css`, pagination square-button centering note.
- Fixed Products pagination: numbers/arrow were top-left; buttons now `inline-flex items-center justify-center leading-none`.

## 2026-07-21 — Cursor — Compare popup (Extify Advanced Product Comparison)

- Retargeted compare UX from YITH page mode to **[Advanced Product Comparison](https://woocommerce.com/products/advanced-product-comparison/)** **popup widget** mode.
- Flow: styled Compare button → sticky bar → **popup** (auto-opens on add); Escape/backdrop closes; max 3.
- Removed dedicated Compare page (`ComparisonPage`); added `ComparisonPopup.tsx`.
- Docs: README + AGENTS/CLAUDE updated for Extify popup mode.

## 2026-07-20 — Cursor — Related products visibility fix

- Related products were below the long attribute table (easy to miss). Moved strip **above** the compare table; horizontal scroll cards.
- `getRelatedInCategory` always uses the first selected product’s category (no longer hides on mixed categories).

## 2026-07-20 — Cursor — Commit: Compare page + agent docs

- Committed YITH page-mode compare (dedicated Compare page, related products, sticky bar) and updated `AGENTS.md` / `CLAUDE.md` with `src/app/comparison/` conventions.
- Pushed to `main` (GitHub Pages deploy).

## 2026-07-20 — Cursor — Compare page (YITH page mode)

- Switched from overlay modal to a dedicated **Compare** page (`page === "compare"`), matching YITH “display table on a page”.
- Flow: checkbox → sticky preview bar → **Compare** navigates to page; auto-opens page on 2nd product.
- Removed `ComparisonModal.tsx`; added `ComparisonPage.tsx` (full-width table + related products + empty state).
- Sticky bar hidden while on Compare page. Context uses `openCompareRequested` instead of `isModalOpen`.

## 2026-07-20 — Cursor — Related products in compare modal

- Added YITH-style **Related products** strip below the comparison table: same `CATALOG` category as the selection, exclude already-compared items, Compare checkbox to add (max 3).
- Hidden when selected products span mixed categories. Helper: `getRelatedInCategory()` in `comparisonSpecs.ts`.

## 2026-07-20 — Cursor — Rebuild compare UX to match YITH plugin

- Rebuilt `src/app/comparison/` so the **interaction model matches YITH WooCommerce Compare**, not a custom Eliet flow.
- Control: plain checkbox + “Compare” / “Added” label (YITH checkbox layout) on shop cards + detail.
- Sticky bar: white preview bar with thumbs, Clear all, Compare — hidden while overlay is open; removed custom “Quick specs” expand.
- Overlay table: classic `#yith-woocompare-table` (image → title → SKU → attribute rows → CTA); difference highlight on `td.different`.
- Auto-opens table when the 2nd product is selected (YITH “open on second product” option); max 3; list persisted in localStorage.
- Removed card pulse / branded pill button / dark sticky bar that diverged from the plugin UX.
- README updated to document the mirrored flow for the WP build team.

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
