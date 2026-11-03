import type { ViteUserConfig } from 'astro'

import vue from '@astrojs/vue'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'

const assetsDir = '_astro'

const sharedVite: ViteUserConfig = {
	build: {
		rolldownOptions: {
			output: {
				assetFileNames: `${assetsDir}/[hash:21][extname]`,
				chunkFileNames: `${assetsDir}/[hash:21].js`,
				entryFileNames: `${assetsDir}/[hash:21].js`,
				hashCharacters: 'base36'
			}
		}
	}
}

export default defineConfig({
	build: {
		assets: assetsDir
	},
	integrations: [
		vue({
			appEntrypoint: '@/app/bootstrap.ts',
			devtools: true,
			jsx: true
		})
	],
	vite: {
		...sharedVite,

		environments: {
			client: sharedVite
		},
		plugins: [
			tailwindcss() //
		]
	}
})