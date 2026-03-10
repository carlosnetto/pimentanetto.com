<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# pimentanetto.com

Personal website for Carlos Netto, built with React, Vite, and Tailwind CSS, and hosted on Cloudflare Pages.

## Project Structure

- `src/`: React source files.
- `target/`: Build output directory (production-ready).
- `vite.config.ts`: Configured for a "giant javascript" bundle to simplify hosting.

## Local Development

**Prerequisites:** Node.js

1.  **Install dependencies:**
    ```bash
    npm install
    ```
2.  **Environment Setup:**
    Ensure you have your `GEMINI_API_KEY` in a `.env` file (see `.env.example`).
3.  **Run Dev Server:**
    ```bash
    npm run dev
    ```
    The app will be available at `http://localhost:3000`.

## Production Build

To create a production-ready bundle in the `target/` directory:

```bash
npm run build
```

This generates:
- `target/index.html`
- `target/assets/index.js` (Consolidated JavaScript bundle)
- `target/assets/index.css` (Tailwind CSS bundle)

## Deployment

The project is hosted on **Cloudflare Pages**.

### Deployment Command
To deploy manually from the CLI:
```bash
npx wrangler pages deploy target --project-name pimentanetto-com
```

### Custom Domain
The site is configured to serve from **pimentanetto.com**.
- **Project Name:** `pimentanetto-com`
- **Deployment URL:** `https://pimentanetto-com.pages.dev`

## Tech Stack
- **Frontend:** React 19, Vite 6, TypeScript
- **Styling:** Tailwind CSS 4, Motion (Framer Motion)
- **Deployment:** Cloudflare Pages
