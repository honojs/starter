# AGENTS.md

A [Hono](https://hono.dev) app deployed to Vercel. The Hono app is `src/index.ts` (default export); Vercel runs it as the function.

## Run

The commands below are written for npm. If the project has a `pnpm-lock.yaml`, `yarn.lock`, or `bun.lock`, use that package manager instead.

- `npm install`
- `vc dev` starts the local server (needs the Vercel CLI). It is for humans; do not start it to check your work.
- `vc deploy` deploys.

## Hono CLI

Run `npx hono --help` first, and use the CLI instead of a dev server.

## Docs

Fetch https://hono.dev/llms.txt to find the page, then fetch it with the `Accept: text/markdown` header, for example `curl -H "Accept: text/markdown" https://hono.dev/docs/guides/best-practices`.
