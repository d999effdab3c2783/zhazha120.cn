export default defineNuxtConfig({
	app: {
		pageTransition: {
			appear: true,
			mode: 'out-in',
			name: 'v-page'
		}
	},
	compatibilityDate: 'latest',
	css: ['~/styles/global.scss', '~/styles/transitions/page.scss'],
	imports: {
		autoImport: false
	},
	modules: [
		'@nuxt/scripts',
		'@unocss/nuxt',
		'@pinia/nuxt',
		'pinia-plugin-persistedstate/nuxt',
		'@vueuse/nuxt',
		'@vueuse/motion/nuxt',
		'lenis/nuxt'
	],
	scripts: {
		registry: {
			clarity: {
				id: 'oegssgxsei'
			}
		}
	},
	ssr: false,
	vite: {
		build: {
			assetsInlineLimit: 0
		}
	}
})