# Gemini CLI Project Memory

## Project Context
- **Name:** pimentanetto.com
- **Goal:** Personal portfolio/landing page for Carlos Netto.
- **Tech Stack:** React 19, Vite 6, Tailwind CSS 4, Motion, Lucide Icons.

## Infrastructure & Deployment
- **Platform:** Cloudflare Pages
- **Project Name:** `pimentanetto-com`
- **Deployment Command:** `npx wrangler pages deploy target --project-name pimentanetto-com`
- **Domain:** `pimentanetto.com`

## Architectural Decisions
- **Build Output Directory:** Changed from `dist/` to `target/`.
- **Single Bundle Strategy:** `vite.config.ts` is configured to disable chunking and bundle assets as a "single giant javascript" (`target/assets/index.js`) to simplify deployment and testing.
- **Vite Alias:** `@` is mapped to the project root (`.`).

## Operational Guidelines for AI
- **Building:** Always use `npm run build` which populates the `target/` directory.
- **Cleaning:** `npm run clean` removes the `target/` directory.
- **Testing:** Use `npm run dev` for local development.
- **Formatting:** Keep the single-bundle configuration in `vite.config.ts` unless explicitly asked to optimize for large-scale chunking.
