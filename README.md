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
    Ensure you have a `.env` file with the following variables:
    ```bash
    GEMINI_API_KEY=your_gemini_api_key_here
    CLOUDFLARE_API_TOKEN=your_cloudflare_api_token_here
    ```
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

### Automated Deployment
To deploy your site, run:
```bash
npm run deploy
```
This command uses `dotenv` to load your `CLOUDFLARE_API_TOKEN` and deploy the `target/` folder to the `pimentanetto-com` project.

### Custom Domain
The site is live at: **[pimentanetto.com](https://pimentanetto.com)**
- **Project Name:** `pimentanetto-com`
- **Deployment URL:** `https://pimentanetto-com.pages.dev`

## Tech Stack
- **Frontend:** React 19, Vite 6, TypeScript
- **Styling:** Tailwind CSS 4, Motion (Framer Motion)
- **Deployment:** Cloudflare Pages + Wrangler
