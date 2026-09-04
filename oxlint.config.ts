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
	ignorePatterns: [
		'src/types/auto-imports.d.ts',
		'src/types/components.d.ts',
		'src/types/router.d.ts',

		'src/components/vue-bits'
	],
	options: {
		typeAware: true
	},
	plugins: ['eslint', 'typescript', 'unicorn', 'oxc', 'import', 'jsdoc', 'node', 'promise', 'vue'],
	rules: {
		'arrow-body-style': ['warn', 'always'],
		curly: ['warn', 'all'],
		eqeqeq: ['error', 'always'],
		'import/consistent-type-specifier-style': ['warn', 'prefer-top-level'],
		'no-array-constructor': ['warn'],
		'no-await-in-loop': ['error'],
		'no-console': ['warn'],
		'no-duplicate-imports': [
			'error',
			{
				allowSeparateTypeImports: true
			}
		],
		'no-unsafe-finally': ['error'],
		'no-var': ['error'],
		'object-shorthand': ['warn', 'always'],
		'oxc/no-accumulating-spread': ['warn'],
		'prefer-const': ['error'],
		'prefer-destructuring': ['warn'],
		'prefer-template': ['warn'],
		'promise/prefer-await-to-then': [
			'warn',
			{
				strict: true
			}
		],
		'require-await': ['error'],
		'typescript/consistent-indexed-object-style': ['warn', 'index-signature'],
		'typescript/consistent-type-imports': ['error'],
		'typescript/explicit-module-boundary-types': ['warn'],
		'typescript/no-array-delete': ['warn'],
		'typescript/no-for-in-array': ['warn'],
		'typescript/no-unnecessary-condition': ['error'],
		'typescript/no-unsafe-return': ['warn'],
		'typescript/no-unsafe-type-assertion': ['warn'],
		'typescript/no-wrapper-object-types': ['warn'],
		'typescript/return-await': ['error', 'always'],
		'unicorn/catch-error-name': ['warn'],
		'unicorn/no-array-for-each': ['warn'],
		'unicorn/no-array-reduce': ['warn'],
		'unicorn/no-array-reverse': ['warn'],
		'unicorn/no-array-sort': ['warn'],
		'unicorn/no-new-array': ['warn'],
		'unicorn/no-null': ['error'],
		'unicorn/prefer-module': ['warn'],
		yoda: ['error', 'always']
	}
})