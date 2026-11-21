# Uzair Ansari — Portfolio

Next.js portfolio powered by Neon Postgres. Portfolio content is fetched from Neon at request time; the résumé preview and download are generated from the same database content.

## Run locally

```bash
npm install
cp .env.example .env.local
# Set DATABASE_URL in .env.local
npm run dev
```

To seed the portfolio database, set `DATABASE_URL` and run:

```bash
npm run db:seed
```

The scripts in `db/` document the schema and the manual résumé import from its public Google Drive source. `data/portfolio.json` is the editable seed template; the live portfolio reads the Neon row.

## Deploy on Vercel

Import the `uzairansari11/uzairansari11.github.io` GitHub repository into Vercel and keep the detected **Next.js** framework and default build settings. Add `DATABASE_URL` in Vercel Project Settings → Environment Variables for Production (and Preview/Development if desired). The database must already contain the `portfolio_content` table and the `main` row; run `npm run db:seed` locally once if needed.

Deploy from this folder with:

```bash
npm run build
npm run deploy
```

`npm run deploy` uses the Vercel CLI and may prompt you to link this folder to your Vercel project the first time. Do not commit `.env.local` or put database credentials in client-side variables.

## Neon

`neon.ts` and `.neon` retain the existing Neon project configuration. See `db/README.md` for data and résumé sync details.
