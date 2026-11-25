import { cloudflare } from '@cloudflare/vite-plugin'
import { defineConfig } from 'vite-plus'

export default defineConfig({
  plugins: [cloudflare()],
  build: {
    minify: true,
  },
  fmt: { semi: false, singleQuote: true },
  lint: {
    options: { typeAware: true, typeCheck: true },
  },
})
