import { defineConfig } from 'oxfmt'

export default defineConfig({
	arrowParens: 'avoid',
	astro: {
		allowShorthand: true
	},
	insertFinalNewline: false,
	printWidth: 120,
	semi: false,
	singleAttributePerLine: true,
	singleQuote: true,
	sortImports: {
		groups: [
			'type-import',
			['value-builtin', 'value-external'],
			['value-internal', 'value-parent', 'value-sibling', 'value-index'],
			'unknown'
		]
	},
	sortTailwindcss: true,
	tabWidth: 4,
	trailingComma: 'none',
	useTabs: true,
	vueIndentScriptAndStyle: true
})