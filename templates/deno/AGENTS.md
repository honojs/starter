# AGENTS.md

A [Hono](https://hono.dev) app running on Deno. The Hono app is in `main.ts`, which serves it with `Deno.serve()`. Dependencies come from JSR through the import map in `deno.json`.

## Run

- `deno task start` starts the server. It is for humans; do not start it to check your work.

## Verify

Check behavior with `app.request()` in a Deno test (`deno test --allow-net`), not with a running server. Hono CLI does not resolve JSR imports yet, so it is not used in this template.

## Docs

Fetch https://hono.dev/llms.txt to find the page, then fetch it with the `Accept: text/markdown` header, for example `curl -H "Accept: text/markdown" https://hono.dev/docs/guides/best-practices`.
