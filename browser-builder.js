require('esbuild').buildSync({
	entryPoints: ['src/modules/app/app.tsx'],
	bundle: true,
	minify: true,
	sourcemap: true,
	outdir: './dist',
})
