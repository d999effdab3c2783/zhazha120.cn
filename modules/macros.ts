import { defineNuxtModule, extendViteConfig } from '@nuxt/kit'
import { createJiti } from 'jiti'
import { dirname } from 'node:path'
import Macros from 'unplugin-macros/vite'

export default defineNuxtModule({
	meta: {
		name: 'macros'
	},
	setup(_, nuxt) {
		const jiti = createJiti(import.meta.url, {
			alias: nuxt.options.alias
		})

		const plugin = Macros({
			runner: {
				import: async resolved => {
					return await jiti.import(resolved)
				},
				resolve: (source, importer) => {
					return jiti.esmResolve(source, {
						parentURL: dirname(importer)
					})
				}
			},
			virtualModules: true
		})

		extendViteConfig(config => {
			config.plugins ??= []
			config.plugins.push(plugin)
		})
	}
})