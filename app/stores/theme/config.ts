import { generate } from '@ant-design/colors'
import { isNotNil } from 'es-toolkit'
import type { GlobalThemeOverrides } from 'naive-ui'

import type { ActualThemeMode, ThemeMode } from '~/types/theme'

export const primaryColor = ['#FFC287', '#B4FFFF'][0]

export const defaultTheme: ThemeMode = 'system'

export const defaultActualTheme: ActualThemeMode = 'light'

export const sharedOverrides: GlobalThemeOverrides = {}

export const lightOverrides: GlobalThemeOverrides = {}

if (isNotNil(primaryColor)) {
	const lightPrimaryColorPalette = generate(primaryColor)

	lightOverrides.common ??= {}
	lightOverrides.common.primaryColor = lightPrimaryColorPalette[5]
	lightOverrides.common.primaryColorHover = lightPrimaryColorPalette[4]
	lightOverrides.common.primaryColorPressed = lightPrimaryColorPalette[6]
	lightOverrides.common.primaryColorSuppl = lightPrimaryColorPalette[7]
}

export const darkOverrides: GlobalThemeOverrides = {}

if (isNotNil(primaryColor)) {
	const darkPrimaryColorPalette = generate(primaryColor, {
		theme: 'dark'
	})

	darkOverrides.common ??= {}
	darkOverrides.common.primaryColor = darkPrimaryColorPalette[5]
	darkOverrides.common.primaryColorHover = darkPrimaryColorPalette[4]
	darkOverrides.common.primaryColorPressed = darkPrimaryColorPalette[6]
	darkOverrides.common.primaryColorSuppl = darkPrimaryColorPalette[7]
}