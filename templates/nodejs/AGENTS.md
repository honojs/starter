# AGENTS.md

A [Hono](https://hono.dev) app running on Node.js. The Hono app is `src/app.ts` (default export); `src/index.ts` serves it with `@hono/node-server` on port 3000.

## Run

The commands below are written for npm. If the project has a `pnpm-lock.yaml`, `yarn.lock`, or `bun.lock`, use that package manager instead.

- `npm install`
- `npm run dev` starts the server with tsx in watch mode. It is for humans; do not start it to check your work.
- `npm run build` compiles with tsc to `dist/`; `npm start` runs it.

## Hono CLI

Run `npx hono --help` first, and use the CLI instead of a dev server.
The app is not at the default path, so pass `src/app.ts` to every command: `npx hono routes src/app.ts`.

## Docs

Fetch https://hono.dev/llms.txt to find the page, then fetch it with the `Accept: text/markdown` header, for example `curl -H "Accept: text/markdown" https://hono.dev/docs/guides/best-practices`.
