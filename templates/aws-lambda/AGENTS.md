# AGENTS.md

A [Hono](https://hono.dev) app deployed to AWS Lambda. The Hono app is `src/app.ts` (default export); `src/index.ts` wraps it with `@hono/aws-lambda` into the Lambda handler.

## Run

The commands below are written for npm. If the project has a `pnpm-lock.yaml`, `yarn.lock`, or `bun.lock`, use that package manager instead.

- `npm install`
- `npm run deploy` builds with esbuild, zips, and updates the Lambda function (needs the AWS CLI and an existing function). There is no local dev server.

## Hono CLI

Run `npx hono --help` first, and use the CLI instead of a dev server.
The app is not at the default path, so pass `src/app.ts` to every command: `npx hono routes src/app.ts`.

## Docs

Fetch https://hono.dev/llms.txt to find the page, then fetch it with the `Accept: text/markdown` header, for example `curl -H "Accept: text/markdown" https://hono.dev/docs/guides/best-practices`.
