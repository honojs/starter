import { build } from 'esbuild'

await build({
  entryPoints: ['src/index.ts'],
  bundle: true,
  minify: true,
  outfile: './dist/index.js',
  platform: 'neutral',
  external: ['fastly:*']
})
