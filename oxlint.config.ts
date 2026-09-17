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
	plugins: ['eslint', 'import', 'jsdoc', 'node', 'oxc', 'promise', 'typescript', 'unicorn', 'vue']
})