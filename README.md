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

## Model API

The model runs on AWS (OpenAI-compatible `/v1/chat/completions`). Local dev
reaches it via port-forward at `http://localhost:8003`. Production needs a
public hostname — run a Cloudflare quick tunnel on the AWS host:

```bash
cloudflared tunnel --url http://localhost:8003
```

Set the printed `https://<random>.trycloudflare.com` URL as a Worker variable
(do not commit it to git):

| Variable | Local (`.dev.vars`) | Production (Cloudflare dashboard) |
|---|---|---|
| `VLLM_URL` | `http://localhost:8003` | `https://<random>.trycloudflare.com` |
| `VLLM_MODEL` | `typewriter-1938-sft-v1` | `typewriter-1938-sft-v1` |
| `VLLM_API_KEY` | `dummy` | `dummy` (any string works) |

Max context is 1024 tokens (prompt + completion), so `max_tokens` stays at 256.

## Structure

- `src/index.ts` - Worker entrypoint with routes:
  - `/` - entry point linking to the sections below
  - `/instruct` - the 1913 chat page
  - `/blog` - empty blog page
  - `/api/chat` - vLLM proxy
- `wrangler.jsonc` - Worker config
- `package.json` - local dev dependencies and scripts
