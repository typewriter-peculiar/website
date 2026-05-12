# typewriter.chat

Basic website for typewriter.chat, served from a Cloudflare Worker.

## Workflow

```bash
local (wrangler dev)  ->  git push main  ->  Workers Builds  ->  typewriter.chat
```

No `wrangler deploy` from laptop. The CI deploy should be the only deploy once
Workers Builds is configured.

## Develop

```bash
npm install
npm run dev
```

Open the URL printed by Wrangler. Change `src/index.ts`, save, refresh.

## Deploy

After Cloudflare Workers Builds is connected, `git push origin main` can run
`npm ci` then `npx wrangler deploy` and serve the result on `typewriter.chat`.

## Structure

- `src/index.ts` - Worker entrypoint and inline landing page
- `wrangler.jsonc` - Worker config
- `package.json` - local dev dependencies and scripts
