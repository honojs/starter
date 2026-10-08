# AGENTS.md

A [Hono](https://hono.dev) app running on Bun. The Hono app is `src/index.ts` (default export); Bun serves it directly.

## Run

- `bun install`
- `bun run dev` starts the server on http://localhost:3000 with hot reload. It is for humans; do not start it to check your work.

## Verify

Verify with the Hono CLI, not with throwaway scripts or a dev server. It is a dev dependency (run it as `bunx hono`), loads the app in-process with `app.request()`, and prints JSON.

- `bunx hono routes` lists the routes; `bunx hono request /` sends one request.
- Before changing existing routes, capture the current behavior with `bunx hono snapshot --status-only` (it prints batch JSONL lines).
- To check requests — spec lines from the request, or the snapshot — run `bunx hono batch - --compact` (heredoc) until the summary shows "failed": 0.
- `bunx hono --help` and `bunx hono <command> --help` have the details and examples.

## Docs

Fetch https://hono.dev/llms.txt to find the page, then fetch it with the `Accept: text/markdown` header, for example `curl -H "Accept: text/markdown" https://hono.dev/docs/guides/best-practices`.
