require('esbuild')
	.serve({
		port: 3000,
		servedir: 'public',
	},
		{
		entryPoints: ['src/modules/renderer.tsx'],
		bundle: true,
		sourcemap: true,
		outdir: './public/dist',
	})
