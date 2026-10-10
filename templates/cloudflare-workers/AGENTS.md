# AGENTS.md

A [Hono](https://hono.dev) app on Cloudflare Workers. The Hono app is `src/index.ts` (default export); `cloudflare.config.ts` declares it as the Worker's entrypoint, and Vite (`@cloudflare/vite-plugin`) builds it.

## Run

The commands below are written for npm. If the project has a `pnpm-lock.yaml`, `yarn.lock`, or `bun.lock`, use that package manager instead.

- `npm install`
- `npm run dev` starts `cf dev`. It is for humans; do not start it to check your work.
- `npm run build` builds; `npm run deploy` deploys with the `cf` CLI.

Cloudflare:

- This project uses the `cf` CLI, not wrangler. Do not add a wrangler config.
- `cf` is in beta. Run `npx cf --help` first; it shows how to find a command with `cf cli search`.
- Bindings (KV, D1, R2, vars) are declared in `cloudflare.config.ts` with the `bindings` helpers from `cf/config`. After changing it, run `npm run typecheck` (it regenerates `.cloudflare/types`) and use the generated `Env` type: `new Hono<{ Bindings: Env }>()`. Never write the bindings type by hand.
- Hono CLI runs the app through Vite, so `c.env` has the real local bindings automatically.
- Local bindings need no IDs: declare `bindings.kv()` and Hono CLI uses a local namespace. Do not create Cloudflare resources (KV, D1, R2) or set IDs unless the user asks.

## Hono CLI

Run `npx hono --help` first, and use the CLI instead of a dev server.

## Docs

Fetch https://hono.dev/llms.txt to find the page, then fetch it with the `Accept: text/markdown` header, for example `curl -H "Accept: text/markdown" https://hono.dev/docs/guides/best-practices`.

For Cloudflare (bindings, the `cf` CLI, Workers APIs), start from https://developers.cloudflare.com/llms.txt; its pages also serve markdown with `Accept: text/markdown`.
