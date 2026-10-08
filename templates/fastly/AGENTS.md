# AGENTS.md

A [Hono](https://hono.dev) app on Fastly Compute. The Hono app is `src/app.ts` (default export); `src/index.ts` registers it with `fire()` from `@fastly/hono-fastly-compute`.

## Run

The commands below are written for npm. If the project has a `pnpm-lock.yaml`, `yarn.lock`, or `bun.lock`, use that package manager instead.

- `npm install`
- `npm run start` builds and serves locally with the Fastly CLI on http://localhost:7676. It is for humans; do not start it to check your work.
- `npm run deploy` publishes with the Fastly CLI.

## Verify

Verify with the Hono CLI, not with throwaway scripts or a dev server. It is a dev dependency (run it through the package manager: `npx hono`, `pnpm hono`, `yarn hono`, or `bunx hono`), loads the app in-process with `app.request()`, and prints JSON. The app is not at the default path, so pass `src/app.ts` to every command.

- `hono routes src/app.ts` lists the routes; `hono request / src/app.ts` sends one request.
- Before changing existing routes, capture the current behavior with `hono snapshot --status-only src/app.ts` (it prints batch JSONL lines).
- To check requests — spec lines from the request, or the snapshot — run `hono batch - src/app.ts --compact` (heredoc) until the summary shows "failed": 0.
- `hono --help` and `hono <command> --help` have the details and examples.

## Docs

Fetch https://hono.dev/llms.txt to find the page, then fetch it with the `Accept: text/markdown` header, for example `curl -H "Accept: text/markdown" https://hono.dev/docs/guides/best-practices`.
