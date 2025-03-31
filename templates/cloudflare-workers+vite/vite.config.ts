import { cloudflare } from '@cloudflare/vite-plugin'
import build from '@hono/vite-build/cloudflare-workers'
import { defineConfig } from 'vite'
import ssrHotReload from 'vite-plugin-ssr-hot-reload'

export default defineConfig({
  plugins: [ssrHotReload(), cloudflare(), build()],
})
