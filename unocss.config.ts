import { FileSystemIconLoader } from '@iconify/utils/lib/loader/node-loaders'
import {
	defineConfig,
	presetIcons,
	presetWebFonts,
	presetWind4,
	transformerCompileClass,
	transformerDirectives,
	transformerVariantGroup
} from 'unocss'

export default defineConfig({
	presets: [
		presetWind4({
			preflights: {
				reset: false
			}
		}),
		presetIcons({
			collections: {
				custom: FileSystemIconLoader('app/stores/icons/custom')
			}
		}),
		presetWebFonts({
			fonts: {
				sans: ['Xiaolai SC', 'v-zhazha120'],
				script: ['Yozai Medium', 'v-zhazha120-script']
			},
			provider: 'none'
		})
	],
	transformers: [
		transformerCompileClass({
			alwaysHash: true
		}),
		transformerDirectives(),
		transformerVariantGroup()
	]
})