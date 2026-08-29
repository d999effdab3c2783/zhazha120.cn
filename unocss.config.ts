import { FileSystemIconLoader } from '@iconify/utils/lib/loader/node-loaders';
import {
	defineConfig,
	presetIcons,
	presetWebFonts,
	presetWind4,
	transformerCompileClass,
	transformerDirectives,
	transformerVariantGroup,
} from 'unocss';

export default defineConfig({
	presets: [
		presetWind4(),
		presetIcons({
			collections: {
				custom: FileSystemIconLoader('src/assets/icons/custom'),
			},
		}),
		presetWebFonts({
			provider: 'none',
			fonts: {
				sans: ['v-zhazha120-sans'],
			},
		}),
	],
	transformers: [
		transformerCompileClass({
			alwaysHash: true,
		}),
		transformerDirectives(),
		transformerVariantGroup(),
	],
});