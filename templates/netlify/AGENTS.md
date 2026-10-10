# AGENTS.md

A [Hono](https://hono.dev) app running as a Netlify Edge Function (Deno). The Hono app is `netlify/edge-functions/index.ts`, exported through `handle()` from `@hono/netlify`. Dependencies come from JSR.

## Run

- `netlify dev` starts the local server (needs the Netlify CLI). It is for humans; do not start it to check your work.
- `netlify deploy` deploys.

## Verify

Check behavior with `app.request()` in a Deno test, not with a running server. Hono CLI does not resolve JSR imports yet, so it is not used in this template.

## Docs

Fetch https://hono.dev/llms.txt to find the page, then fetch it with the `Accept: text/markdown` header, for example `curl -H "Accept: text/markdown" https://hono.dev/docs/guides/best-practices`.
