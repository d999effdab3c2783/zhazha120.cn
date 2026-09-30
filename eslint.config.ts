import { createConfigForNuxt as defineConfig } from '@nuxt/eslint-config'
import unocss from '@unocss/eslint-config/flat'
import oxlint from 'eslint-plugin-oxlint'

export default defineConfig({
	features: {
		typescript: true
	}
})
	.append({
		rules: {
			'vue/attributes-order': [
				'warn',
				{
					alphabetical: true
				}
			],
			'vue/block-order': 'error',
			'vue/multi-word-component-names': 'off',
			'vue/no-multiple-template-root': 'off',
			'vue/valid-template-root': 'off'
		}
	})
	.append([...oxlint.configs['flat/all'], unocss])