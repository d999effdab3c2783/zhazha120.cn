export default defineNuxtConfig({
	compatibilityDate: 'latest',
	css: ['lenis/dist/lenis.css'],
	imports: {
		autoImport: false
	},
	modules: [
		'@bubblesortt/nuxt-es-toolkit',
		'@pinia/nuxt',
		'@unocss/nuxt',
		'@vueuse/nuxt',
		'lenis/nuxt',
		'pinia-plugin-persistedstate/nuxt'
	],
	ssr: false
})