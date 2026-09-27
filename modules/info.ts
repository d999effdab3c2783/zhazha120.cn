import { extendViteConfig, defineNuxtModule, addTypeTemplate } from '@nuxt/kit'
import Info from 'unplugin-info/vite'

export default defineNuxtModule({
	meta: {
		name: 'info'
	},
	setup() {
		const plugin = Info()

		extendViteConfig(config => {
			config.plugins ??= []
			config.plugins.push(plugin)
		})

		addTypeTemplate({
			filename: 'types/info.d.ts',
			getContents: () => '/// <reference types="unplugin-info/client" />'
		})
	}
})