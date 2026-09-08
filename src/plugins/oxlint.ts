import { eslintCompatPlugin } from '@oxlint/plugins'

export default eslintCompatPlugin({
	meta: {
		name: 'customize'
	},
	rules: {
		'no-unnecessary-template-literal': {
			createOnce(context) {
				return {
					TemplateLiteral(node) {
						if (0 === node.expressions.length) {
							context.report({
								message: 'Unnecessary template literal.',
								node
							})
						}
					}
				}
			}
		},
		'no-method-shorthand': {
			createOnce(context) {
				return {
					Property(node) {
						if (node.method) {
							context.report({
								node,
								message: 'Method shorthand is not allowed.'
							})
						}
					}
				}
			}
		}
	}
})