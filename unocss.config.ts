import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { defineConfig, presetIcons, presetWebFonts, presetWind4, transformerCompileClass, transformerDirectives, transformerVariantGroup } from 'unocss'

export default defineConfig({
	content: {
		filesystem: [
			'src/assets/contents/**/*.*',
			'src/database/seeders/**/*.*'
		]
	},
	presets: [
		presetWind4(),
		presetIcons({
			collections: {
				custom: {
					openlist: readFileSync(resolve(__dirname, 'src/assets/icons/openlist.svg'), {
						encoding: 'utf-8'
					}).toString(),
					maimai: readFileSync(resolve(__dirname, 'src/assets/icons/maimai.svg'), {
						encoding: 'utf-8'
					}).toString(),
					tetrio: readFileSync(resolve(__dirname, 'src/assets/icons/tetrio-color.svg'), {
						encoding: 'utf-8'
					}).toString()
				}
			}
		}),
		presetWebFonts({
			provider: 'none',
			fonts: {
				sans: ['DingTalk Sans', 'HarmonyOS Sans SC', 'Yozai']
			}
		})
	],
	transformers: [
		transformerCompileClass(),
		transformerDirectives(),
		transformerVariantGroup()
	]
})