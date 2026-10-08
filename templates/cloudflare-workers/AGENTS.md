# AGENTS.md

A [Hono](https://hono.dev) app on Cloudflare Workers. The Hono app is `src/index.ts` (default export); wrangler deploys it as the Worker.

## Run

The commands below are written for npm. If the project has a `pnpm-lock.yaml`, `yarn.lock`, or `bun.lock`, use that package manager instead.

- `npm install`
- `npm run dev` starts `wrangler dev`. It is for humans; do not start it to check your work.
- `npm run deploy` deploys with wrangler.

Cloudflare:

- Bindings (KV, D1, R2, vars) are declared in `wrangler.jsonc`. After changing it, run `npm run cf-typegen` and use the generated `CloudflareBindings` type: `new Hono<{ Bindings: CloudflareBindings }>()`. Never write the bindings type by hand.
- Hono CLI gives `c.env` the real local bindings through wrangler automatically. For the full Workers runtime, add `--runtime workerd`.

## Verify

Verify with the Hono CLI, not with throwaway scripts or a dev server. It is a dev dependency (run it through the package manager: `npx hono`, `pnpm hono`, `yarn hono`, or `bunx hono`), loads the app in-process with `app.request()`, and prints JSON.

- `hono routes` lists the routes; `hono request /` sends one request.
- Before changing existing routes, capture the current behavior with `hono snapshot --status-only` (it prints batch JSONL lines).
- To check requests — spec lines from the request, or the snapshot — run `hono batch - --compact` (heredoc) until the summary shows "failed": 0.
- `hono --help` and `hono <command> --help` have the details and examples.

## Docs

Fetch https://hono.dev/llms.txt to find the page, then fetch it with the `Accept: text/markdown` header, for example `curl -H "Accept: text/markdown" https://hono.dev/docs/guides/best-practices`.
