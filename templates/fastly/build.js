const { build } = require('esbuild')

build({
  entryPoints: ['src/index.ts'],
  bundle: true,
  minify: true,
  outfile: 'bin/index.js',
  platform: 'node',
}).catch((error) => {
  console.error(error)
  process.exit(1)
})
