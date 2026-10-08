# AGENTS.md

A [Hono](https://hono.dev) app on Cloudflare Workers, built with Vite (`@cloudflare/vite-plugin` and `vite-ssr-components`). The Hono app is `src/index.tsx` (default export); `src/renderer.tsx` is the `jsxRenderer` layout with the Vite assets. UI is `hono/jsx`, not React: do not add `react`, and write `class`, not `className`.

## Run

The commands below are written for npm. If the project has a `pnpm-lock.yaml`, `yarn.lock`, or `bun.lock`, use that package manager instead.

- `npm install`
- `npm run dev` starts Vite. It is for humans; do not start it to check your work.
- `npm run build` builds to `dist/`; `npm run preview` serves the build; `npm run deploy` deploys with wrangler.

Cloudflare:

- Bindings (KV, D1, R2, vars) are declared in `wrangler.jsonc`. After changing it, run `npm run cf-typegen` and use the generated `CloudflareBindings` type: `new Hono<{ Bindings: CloudflareBindings }>()`. Never write the bindings type by hand.
- Hono CLI gives `c.env` the real local bindings through wrangler automatically. For the full Workers runtime, add `--runtime workerd`.

## Hono CLI

Run `npx hono --help` first, and use the CLI instead of a dev server.

## Docs

Fetch https://hono.dev/llms.txt to find the page, then fetch it with the `Accept: text/markdown` header, for example `curl -H "Accept: text/markdown" https://hono.dev/docs/guides/best-practices`.

For Cloudflare (bindings, wrangler, Workers APIs), start from https://developers.cloudflare.com/llms.txt; its pages also serve markdown with `Accept: text/markdown`.
