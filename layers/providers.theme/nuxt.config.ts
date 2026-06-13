export default defineNuxtConfig({
	css: [
		"@unocss/reset/sanitize/sanitize.css",
		"@unocss/reset/sanitize/assets.css",
		"#layers/providers.theme/styles/global.scss",
	],
	imports: {
		dirs: ["#layers/providers.theme/stores"],
	},
});