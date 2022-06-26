require('esbuild').buildSync({
	entryPoints: ['src/modules/renderer.tsx'],
	bundle: true,
	minify: true,
	sourcemap: true,
	outdir: './dist',
})
