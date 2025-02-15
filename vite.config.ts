import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		react(),
		tailwindcss(),
		dts({ insertTypesEntry: true }),
	],
	build: {
		lib: {
			entry: 'src/entrypoint.ts',
			name: 'PieKit',
			formats: ['es', 'cjs', 'umd'],
			fileName: (format) => `piekit.${ format }.js`,
		},
		rollupOptions: {
			external: ['react', 'react-dom'],
			output: {
				globals: {
					react: 'React',
					'react-dom': 'ReactDOM',
				},
			},
		},
	},
	resolve: {
		alias: {
			'@': '/src',
		},
	},
})
