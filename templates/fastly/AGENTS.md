# AGENTS.md

A [Hono](https://hono.dev) app on Fastly Compute. The Hono app is `src/app.ts` (default export); `src/index.ts` registers it with `fire()` from `@fastly/hono-fastly-compute`.

## Run

The commands below are written for npm. If the project has a `pnpm-lock.yaml`, `yarn.lock`, or `bun.lock`, use that package manager instead.

- `npm install`
- `npm run start` builds and serves locally with the Fastly CLI on http://localhost:7676. It is for humans; do not start it to check your work.
- `npm run deploy` publishes with the Fastly CLI.

## Hono CLI

Run `npx hono --help` first, and use the CLI instead of a dev server.
The app is not at the default path, so pass `src/app.ts` to every command: `npx hono routes src/app.ts`.

## Docs

Fetch https://hono.dev/llms.txt to find the page, then fetch it with the `Accept: text/markdown` header, for example `curl -H "Accept: text/markdown" https://hono.dev/docs/guides/best-practices`.
