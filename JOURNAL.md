# Project journal — Eliet

Shared session log for all AI agents. Newest entries at the top.

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
