# AGENTS.md

A [Hono](https://hono.dev) app running on Bun. The Hono app is `src/index.ts` (default export); Bun serves it directly.

## Run

- `bun install`
- `bun run dev` starts the server on http://localhost:3000 with hot reload. It is for humans; do not start it to check your work.

## Hono CLI

Run `bunx hono --help` first, and use the CLI instead of a dev server.

## Docs

Fetch https://hono.dev/llms.txt to find the page, then fetch it with the `Accept: text/markdown` header, for example `curl -H "Accept: text/markdown" https://hono.dev/docs/guides/best-practices`.
