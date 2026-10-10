import { defineConfig } from 'cf/config'
import * as entrypoint from './src/index.ts' with { type: 'cf-worker' }

export default defineConfig({
  worker: {
    name: '%%PROJECT_NAME%%',
    compatibilityDate: '2026-10-06',
    entrypoint,
    env: {
      // Declare bindings here with `import { bindings, defineConfig } from 'cf/config'`.
      // No options are needed for local development:
      // MY_KV: bindings.kv(),
      // MY_DB: bindings.d1(),
      // MY_BUCKET: bindings.r2(),
      // MY_VAR: bindings.text('my-variable'),
    }
  }
})
