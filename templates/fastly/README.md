```
npm install
npm run start
```

```
open http://localhost:7676
```

```
npm run deploy
```

For [typed bindings based on your Fastly resources](https://github.com/fastly/hono-fastly-compute?tab=readme-ov-file#basic-example):

Import `buildFire` instead of `fire` from `@fastly/hono-fastly-compute`, and define your resources. Then pass `fire.Bindings` as the generic parameter when instantiating `Hono`:

```ts
// src/index.ts
import { buildFire } from '@fastly/hono-fastly-compute'
const fire = buildFire({
  assets: 'KVStore', // A KV Store named 'assets'
  mySettings: 'ConfigStore:my-settings' // A Config Store named 'my-settings'
})
const app = new Hono<{ Bindings: fire.Bindings }>()
```
