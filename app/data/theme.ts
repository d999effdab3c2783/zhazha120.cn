import { generate } from '@ant-design/colors'
import { isNotNil } from 'es-toolkit'
import type { GlobalThemeOverrides } from 'naive-ui'

const primaryColor = '#FFC287'
const accentColor = '#B4FFFF'

const generateTheme = (
	mode: 'light' | 'dark',

	colors: Partial<{
		readonly primary: string
	}> = {}
): GlobalThemeOverrides => {
	const palettes: Record<string, string[]> = {}
	const overrides: GlobalThemeOverrides = {}

	const theme = mode === 'light' ? 'default' : 'dark'

	if (isNotNil(colors.primary)) {
		palettes.primary = generate(colors.primary, { theme })

		overrides.common ??= {}
		overrides.common.primaryColor = palettes.primary[5]
		overrides.common.primaryColorHover = palettes.primary[4]
		overrides.common.primaryColorPressed = palettes.primary[6]
		overrides.common.primaryColorSuppl = palettes.primary[7]
	}

	return overrides
}

export default {
	colors: {
		primary: primaryColor,
		accent: accentColor
	},

	'naive-ui': {
		global: {
			overrides: {}
		},
		light: {
			surfaceColor: null,

			overrides: generateTheme('light', {
				primary: primaryColor
			})
		},
		dark: {
			surfaceColor: null,

			overrides: generateTheme('dark', {
				primary: primaryColor
			})
		}
	}
} as const satisfies {
	readonly colors: {
		readonly primary: string
		readonly accent: string
	}

	readonly 'naive-ui': {
		readonly global: {
			readonly overrides: GlobalThemeOverrides
		}

		readonly light: {
			readonly surfaceColor: string | null
			readonly overrides: GlobalThemeOverrides
		}

		readonly dark: {
			readonly surfaceColor: string | null
			readonly overrides: GlobalThemeOverrides
		}
	}
}