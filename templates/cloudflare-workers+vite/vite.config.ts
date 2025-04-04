import { cloudflare } from '@cloudflare/vite-plugin'
import build from '@hono/vite-build/cloudflare-workers'
import { defineConfig } from 'vite'
import ssrHotReload from 'vite-plugin-ssr-hot-reload'

export default defineConfig(({ command, isSsrBuild }) => {
  if (command === 'serve') {
    return { plugins: [ssrHotReload(), cloudflare()] }
  }
  if (!isSsrBuild) {
    return {
      build: {
        rollupOptions: {
          input: ['./src/style.css'],
          output: {
            assetFileNames: 'assets/[name].[ext]'
          }
        }
      }
    }
  }
  return {
    plugins: [build({ outputDir: 'dist-server' })]
  }
})
