import * as astroParser from 'astro-eslint-parser'
import * as astro from 'eslint-plugin-astro'
import oxlint from 'eslint-plugin-oxlint'
import vue from 'eslint-plugin-vue'
import { defineConfig } from 'eslint/config'
import tslint from 'typescript-eslint'
import vueParser from 'vue-eslint-parser'

import oxlintConfig from './oxlint.config'

export default defineConfig([
	{
		files: ['**/*.ts', '**/*.tsx'],
		extends: [
			tslint.configs['base'] //
		]
	},

	...astro.configs['flat/base'],

	{
		files: ['**/*.astro'],
		languageOptions: {
			parser: astroParser,
			parserOptions: {
				parser: tslint.parser,
				extraFileExtensions: ['.astro']
			}
		}
	},

	...vue.configs['flat/base'],

	{
		files: ['**/*.vue'],
		languageOptions: {
			parser: vueParser,
			parserOptions: {
				parser: tslint.parser,
				extraFileExtensions: ['.vue']
			}
		}
	},

	...oxlint.buildFromOxlintConfig(oxlintConfig),

	{
		rules: {
			'vue/attributes-order': [
				'warn',
				{
					alphabetical: true
				}
			]
		}
	}
])