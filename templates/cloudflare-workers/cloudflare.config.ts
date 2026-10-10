import { defineConfig } from 'cf/config'
import * as entrypoint from './src/index.ts' with { type: 'cf-worker' }

export default defineConfig({
  worker: {
    name: '%%PROJECT_NAME%%',
    compatibilityDate: '2026-10-06',
    entrypoint,
    env: {
      // Declare bindings here, for example:
      // MY_KV: bindings.kv({ id: '...' }),
      // MY_VAR: bindings.text('my-variable'),
    }
  }
})
