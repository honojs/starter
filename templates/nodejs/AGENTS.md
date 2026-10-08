# AGENTS.md

A [Hono](https://hono.dev) app running on Node.js. The Hono app is `src/app.ts` (default export); `src/index.ts` serves it with `@hono/node-server` on port 3000.

## Run

The commands below are written for npm. If the project has a `pnpm-lock.yaml`, `yarn.lock`, or `bun.lock`, use that package manager instead.

- `npm install`
- `npm run dev` starts the server with tsx in watch mode. It is for humans; do not start it to check your work.
- `npm run build` compiles with tsc to `dist/`; `npm start` runs it.

## Verify

Verify with the Hono CLI, not with throwaway scripts or a dev server. It is a dev dependency (run it through the package manager: `npx hono`, `pnpm hono`, `yarn hono`, or `bunx hono`), loads the app in-process with `app.request()`, and prints JSON. The app is not at the default path, so pass `src/app.ts` to every command.

- `hono routes src/app.ts` lists the routes; `hono request / src/app.ts` sends one request.
- Before changing existing routes, capture the current behavior with `hono snapshot --status-only src/app.ts` (it prints batch JSONL lines).
- To check requests — spec lines from the request, or the snapshot — run `hono batch - src/app.ts --compact` (heredoc) until the summary shows "failed": 0.
- `hono --help` and `hono <command> --help` have the details and examples.

## Docs

Fetch https://hono.dev/llms.txt to find the page, then fetch it with the `Accept: text/markdown` header, for example `curl -H "Accept: text/markdown" https://hono.dev/docs/guides/best-practices`.
