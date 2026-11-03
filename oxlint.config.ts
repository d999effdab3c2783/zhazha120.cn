import { defineConfig } from 'oxlint'

export default defineConfig({
	categories: {
		correctness: 'error',
		nursery: 'allow',
		pedantic: 'allow',
		perf: 'warn',
		restriction: 'allow',
		style: 'allow',
		suspicious: 'error'
	},
	options: {
		typeAware: true,
		typeCheck: true
	},
	plugins: [
		'eslint',
		'typescript',
		'unicorn',
		'oxc',
		'import',
		'jsdoc',
		'node',
		'promise',
		'vue' //
	],
	rules: {
		'import/consistent-type-specifier-style': ['error', 'prefer-top-level'],
		'sort-imports': [
			'warn',
			{
				allowSeparatedGroups: true,
				ignoreDeclarationSort: true
			}
		]
	}
})