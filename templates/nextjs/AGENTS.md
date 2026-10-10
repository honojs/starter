# AGENTS.md

A Next.js app with a [Hono](https://hono.dev) API. The Hono app is `lib/hono.ts` (default export, `basePath('/api')`); `app/api/[...route]/route.ts` mounts it with `@hono/vercel`. Everything under `/api` is handled by Hono; the rest is Next.js.

## Run

The commands below are written for npm. If the project has a `pnpm-lock.yaml`, `yarn.lock`, or `bun.lock`, use that package manager instead.

- `npm install`
- `npm run dev` starts Next.js. It is for humans; do not start it to check your work.
- `npm run build` builds; `npm run lint` lints.

## Hono CLI

Run `npx hono --help` first, and use the CLI instead of a dev server.
The app is not at the default path, so pass `lib/hono.ts` to every command, and its routes live under `/api`: `npx hono request /api/hello lib/hono.ts`.

## Docs

Fetch https://hono.dev/llms.txt to find the page, then fetch it with the `Accept: text/markdown` header, for example `curl -H "Accept: text/markdown" https://hono.dev/docs/guides/best-practices`.
