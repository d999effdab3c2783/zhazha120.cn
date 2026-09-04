import type { GlobalThemeOverrides } from 'naive-ui'

import { generate } from '@ant-design/colors'

const primaryColor = '#f79a00'
const colors = generate(primaryColor)

export default {
	primaryColor,

	'naive-ui': {
		global: {
			overrides: {
				common: {
					primaryColor: colors[5],
					primaryColorHover: colors[4],
					primaryColorSuppl: colors[7],
					primaryColorPressed: colors[6]
				}
			} satisfies GlobalThemeOverrides
		},
		light: {
			overrides: {} satisfies GlobalThemeOverrides
		},
		dark: {
			overrides: {} satisfies GlobalThemeOverrides
		}
	}
} as const