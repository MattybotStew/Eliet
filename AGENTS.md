# Eliet — agent instructions

Marketing/product website for ELIET (garden machinery brand), originally exported from Figma Make and evolved in code. Single-page React app with client-side section routing between views: Desk (home), Products, product Detail, Downloads, About ELIET, and Demo Tour.

## Stack & commands

- Vite 6 + React 18, Tailwind CSS v4 (via `@tailwindcss/vite`), Radix UI / shadcn-style components, MUI, `motion` for animation.
- `npm run dev` — local dev server. `npm run build` — production build to `dist/`.
- Path alias `@/` → `src/`. The custom `figma:asset/` import prefix resolves to `src/assets/` (see `vite.config.ts`).

## Structure & conventions

- `src/app/App.tsx` — the whole app lives here (~2,200 lines): all page sections, navigation state, and asset imports. Expect to work in this file; keep its section-comment organization (`─── Section ───`) intact.
- `src/app/components/ui/` — shadcn-style primitives; `src/app/components/figma/` — Figma Make helpers. Don't hand-edit generated primitives unless the task requires it.
- `src/imports/<Section>/` — Figma-exported images and SVG modules, imported directly by `App.tsx`. These are source files: they must be committed, never gitignored or "cleaned up" — deleting an unreferenced-looking hash-named file can break a view.
- The React and Tailwind Vite plugins are both required by Figma Make even if unused — do not remove them from `vite.config.ts`.

## Session continuity

This project is worked on by multiple AI agents (Claude Code, Gemini CLI, Deep Code, …).
- At session start: read `JOURNAL.md` (newest first) and recent `git log`.
- Before ending a session: add a short entry at the top of `JOURNAL.md` — date, agent/model, what was done, decisions, loose ends.
