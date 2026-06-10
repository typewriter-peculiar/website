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

## vLLM

Set these Cloudflare Worker variables/secrets:

```bash
VLLM_URL=http://108.39.26.2:48891
VLLM_MODEL=typewriter-1913-sft
VLLM_API_KEY=YOUR_SECRET_KEY
```

Run vLLM on Vast.ai so it listens publicly:

```bash
--host 0.0.0.0 --port 8000 --api-key YOUR_SECRET_KEY
```

## Structure

- `src/index.ts` - Worker entrypoint with routes:
  - `/` - entry point linking to the sections below
  - `/instruct` - the 1913 chat page
  - `/blog` - empty blog page
  - `/api/chat` - vLLM proxy
- `wrangler.jsonc` - Worker config
- `package.json` - local dev dependencies and scripts
