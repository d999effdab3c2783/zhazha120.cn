import { defineConfig } from 'oxfmt'

export default defineConfig({
	endOfLine: 'lf',
	insertFinalNewline: false,
	semi: false,
	singleQuote: true,
	sortImports: {
		groups: [
			'type-import',
			['value-builtin', 'value-external'],
			'type-internal',
			'value-internal',
			['type-parent', 'type-sibling', 'type-index'],
			['value-parent', 'value-sibling', 'value-index'],
			'unknown'
		]
	},
	tabWidth: 4,
	useTabs: true,
	vueIndentScriptAndStyle: true,
	trailingComma: 'none'
})