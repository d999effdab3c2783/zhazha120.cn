import { defineNuxtModule, extendViteConfig } from '@nuxt/kit'
import { isNil, isNotNil } from 'es-toolkit'
import { posix } from 'node:path'

export default defineNuxtModule({
	meta: {
		name: 'build'
	},
	setup(_, nuxt) {
		const assetsDir =
			isNotNil(nuxt.options.vite.build) && isNotNil(nuxt.options.vite.build.assetsDir)
				? nuxt.options.vite.build.assetsDir
				: '.'

		extendViteConfig(config => {
			config.build = {
				assetsInlineLimit: 0,
				rolldownOptions: {
					output: {
						assetFileNames: () => posix.join(assetsDir, '[hash:21][extname]'),
						chunkFileNames: () => posix.join(assetsDir, '[hash:21].js'),
						codeSplitting: {
							groups: [
								{
									debugName: 'node_modules',
									name: id => {
										const subpath = id.split('node_modules')[1]

										if (isNil(subpath)) {
											return id
										}

										return subpath.split('/')[1]
									},
									test: /node_modules/
								}
							]
						},
						entryFileNames: () => posix.join(assetsDir, '[hash:21].js'),
						hashCharacters: 'base36'
					}
				}
			}
		})
	}
})