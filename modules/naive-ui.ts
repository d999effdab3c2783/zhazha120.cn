import { addComponent, addImports, defineNuxtModule } from '@nuxt/kit'
import NaiveUI from 'naive-ui'

export default defineNuxtModule({
	meta: {
		name: 'naive-ui'
	},
	setup() {
		Object.keys(NaiveUI)
			.filter(name => {
				return /^N[A-Z]|n-[a-z]/.test(name)
			})
			.forEach(name => {
				addComponent({
					export: name,
					filePath: 'naive-ui',

					name
				})
			})

		Object.keys(NaiveUI)
			.filter(name => {
				return /^use[A-Z]/.test(name)
			})
			.forEach(name => {
				addImports({
					as: name,
					from: 'naive-ui',

					name
				})
			})
	}
})