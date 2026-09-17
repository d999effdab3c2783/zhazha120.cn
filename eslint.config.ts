import tsEslintParser from '@typescript-eslint/parser'
import unocss from '@unocss/eslint-config/flat'
import oxlint from 'eslint-plugin-oxlint'
import vue from 'eslint-plugin-vue'
import vueEslintParser from 'vue-eslint-parser'

export default [
	unocss,

	...vue.configs['flat/base'],

	{
		files: ['**/*.vue'],
		languageOptions: {
			parser: vueEslintParser,
			parserOptions: {
				parser: tsEslintParser,
				sourceType: 'module'
			}
		}
	},

	...oxlint.configs['flat/all']
]