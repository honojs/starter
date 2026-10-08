# AGENTS.md

A Next.js app with a [Hono](https://hono.dev) API. The Hono app is `lib/hono.ts` (default export, `basePath('/api')`); `app/api/[...route]/route.ts` mounts it with `@hono/vercel`. Everything under `/api` is handled by Hono; the rest is Next.js.

## Run

The commands below are written for npm. If the project has a `pnpm-lock.yaml`, `yarn.lock`, or `bun.lock`, use that package manager instead.

- `npm install`
- `npm run dev` starts Next.js. It is for humans; do not start it to check your work.
- `npm run build` builds; `npm run lint` lints.

## Verify

Verify with the Hono CLI, not with throwaway scripts or a dev server. It is a dev dependency (run it through the package manager: `npx hono`, `pnpm hono`, `yarn hono`, or `bunx hono`), loads the app in-process with `app.request()`, and prints JSON. The app is not at the default path, so pass `lib/hono.ts` to every command.

- `hono routes lib/hono.ts` lists the routes; `hono request /api/hello lib/hono.ts` sends one request.
- Before changing existing routes, capture the current behavior with `hono snapshot --status-only lib/hono.ts` (it prints batch JSONL lines).
- To check requests — spec lines from the request, or the snapshot — run `hono batch - lib/hono.ts --compact` (heredoc) until the summary shows "failed": 0.
- `hono --help` and `hono <command> --help` have the details and examples.

## Docs

Fetch https://hono.dev/llms.txt to find the page, then fetch it with the `Accept: text/markdown` header, for example `curl -H "Accept: text/markdown" https://hono.dev/docs/guides/best-practices`.
