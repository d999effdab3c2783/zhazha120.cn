import { generate } from '@ant-design/colors'
import { isNotNil } from 'es-toolkit'
import { darkTheme, lightTheme, useOsTheme, type GlobalTheme, type GlobalThemeOverrides } from 'naive-ui'
import { defineStore } from 'pinia'
import { computed, shallowRef } from 'vue'

import type { ActualThemeMode, ThemeMode } from '~/types/theme'

const primaryColor = ['#FFC287', '#B4FFFF'][0]

const osTheme = useOsTheme()

export const useThemeStore = defineStore('theme', () => {
	const mode = shallowRef<ThemeMode>('system')

	const actualMode = computed<ActualThemeMode>(() => {
		if (mode.value === 'system') {
			if (isNotNil(osTheme.value)) {
				return osTheme.value
			}

			return 'dark'
		}

		return mode.value
	})

	const preset = computed<GlobalTheme | null>(() => {
		switch (actualMode.value) {
			case 'light':
				return lightTheme
			case 'dark':
				return darkTheme
		}

		return null
	})

	const overrides = computed<GlobalThemeOverrides>(() => {
		const shared: GlobalThemeOverrides = {} as const

		if (isNotNil(primaryColor)) {
			const primaryColorPalette = generate(primaryColor, {
				theme: actualMode.value === 'light' ? 'default' : 'dark'
			})

			shared.common ??= {}
			shared.common.primaryColor = primaryColorPalette[5]
			shared.common.primaryColorHover = primaryColorPalette[4]
			shared.common.primaryColorPressed = primaryColorPalette[6]
			shared.common.primaryColorSuppl = primaryColorPalette[7]
		}

		switch (actualMode.value) {
			case 'light':
				return {
					...shared
				}
			case 'dark':
				return {
					...shared
				}
		}

		return shared
	})

	return {
		mode,
		actualMode,

		preset,
		overrides
	}
})