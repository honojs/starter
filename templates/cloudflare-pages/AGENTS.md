# AGENTS.md

A [Hono](https://hono.dev) app on Cloudflare Pages, built with Vite (`@hono/vite-build/cloudflare-pages`). The Hono app is `src/index.tsx` (default export); `src/renderer.tsx` is the `jsxRenderer` layout. UI is `hono/jsx`, not React.

## Run

- `npm install`
- `npm run dev` starts Vite with `@hono/vite-dev-server`. It is for humans; do not start it to check your work.
- `npm run build` builds to `dist/`; `npm run preview` serves the build with wrangler; `npm run deploy` deploys.

- Bindings (KV, D1, R2, vars) are declared in `wrangler.jsonc`. After changing it, run `npm run cf-typegen` and use the generated `CloudflareBindings` type: `new Hono<{ Bindings: CloudflareBindings }>()`. Never write the bindings type by hand.
- Hono CLI gives `c.env` the real local bindings through wrangler automatically. For the full Workers runtime, add `--runtime workerd`.

## Verify

Verify with the Hono CLI, not with throwaway scripts or a dev server. It loads the app in-process with `app.request()` and prints JSON.

- `npx hono routes` lists the routes; `npx hono request /` sends one request.
- Before changing existing routes, capture the current behavior with `npx hono snapshot --status-only` (it prints batch JSONL lines).
- To check requests — spec lines from the request, or the snapshot — run `npx hono batch - --compact` (heredoc) until the summary shows "failed": 0.
- `npx hono --help` and `npx hono <command> --help` have the details and examples.

## Docs

Fetch https://hono.dev/llms.txt to find the page, then fetch it with the `Accept: text/markdown` header, for example `curl -H "Accept: text/markdown" https://hono.dev/docs/api/routing`.
