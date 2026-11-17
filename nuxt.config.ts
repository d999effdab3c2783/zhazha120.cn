export default defineNuxtConfig({
	$production: {
		scripts: {
			registry: {
				clarity: {
					id: 'oegssgxsei',
					trigger: 'onNuxtReady'
				}
			}
		}
	},
	app: {
		pageTransition: {
			appear: true,
			mode: 'out-in',
			name: 'v-page'
		}
	},
	compatibilityDate: 'latest',
	css: [
		'@chinese-fonts/yozai/dist/Yozai-Medium/result.css',
		'@chinese-fonts/xiaolai/dist/Xiaolai/result.css',
		'~/styles/global.scss',
		'~/styles/transitions/page.scss'
	],
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
	ssr: false
})