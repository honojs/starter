```txt
npm install
npm run dev
```

```txt
npm run deploy
```

Bindings are declared in `cloudflare.config.ts`. To generate the `Env` type from it, run:

```txt
npm run typecheck
```

Then pass `Env` as the generic when instantiating `Hono`:

```ts
// src/index.ts
const app = new Hono<{ Bindings: Env }>()
```
