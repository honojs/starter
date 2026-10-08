# AGENTS.md

A [HonoX](https://github.com/honojs/honox) app (file-based routing on [Hono](https://hono.dev)) on Cloudflare Workers with Tailwind CSS. Routes are files under `app/routes/`, the layout is `app/routes/_renderer.tsx`, and `app/server.ts` creates the app. UI is `hono/jsx`, not React; islands under `app/islands/` run on the client.

## Run

The commands below are written for npm. If the project has a `pnpm-lock.yaml`, `yarn.lock`, or `bun.lock`, use that package manager instead.

- `npm install`
- `npm run dev` starts Vite. It is for humans; do not start it to check your work.
- `npm run build` builds the client and the server to `dist/`; `npm run preview` serves the build with wrangler; `npm run deploy` deploys.

## Verify

The app is assembled by Vite (`import.meta.glob`), so Hono CLI cannot load `app/server.ts` directly. Run `npm run build`, then check the built Worker with Hono CLI on the Workers runtime: `hono request / --runtime workerd` (the entry is `main` in `wrangler.jsonc`; run `hono` through the package manager: `npx hono`, `pnpm hono`, `yarn hono`, or `bunx hono`). Several requests go in one `hono batch - --runtime workerd` call. Use `npm run build` to catch type and build errors.

## Docs

Fetch https://hono.dev/llms.txt to find the page, then fetch it with the `Accept: text/markdown` header, for example `curl -H "Accept: text/markdown" https://hono.dev/docs/guides/best-practices`.

For Cloudflare (bindings, wrangler, Workers APIs), start from https://developers.cloudflare.com/llms.txt; its pages also serve markdown with `Accept: text/markdown`.
