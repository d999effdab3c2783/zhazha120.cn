import { isNotNil } from 'es-toolkit'
import { darkTheme, lightTheme, useOsTheme, type GlobalTheme, type GlobalThemeOverrides } from 'naive-ui'
import { defineStore } from 'pinia'
import { computed, shallowRef } from 'vue'

import { darkOverrides, defaultActualTheme, defaultTheme, lightOverrides, sharedOverrides } from '~/stores/theme/config'
import type { ActualThemeMode, ThemeMode } from '~/types/theme'

const osTheme = useOsTheme()

export const useThemeStore = defineStore('theme', () => {
	const mode = shallowRef<ThemeMode>(defaultTheme)

	const actualMode = computed<ActualThemeMode>(() => {
		if (mode.value === 'system') {
			if (isNotNil(osTheme.value)) {
				return osTheme.value
			}

			return defaultActualTheme
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
		switch (actualMode.value) {
			case 'light':
				return {
					...sharedOverrides,
					...lightOverrides
				}
			case 'dark':
				return {
					...sharedOverrides,
					...darkOverrides
				}
		}

		return sharedOverrides
	})

	return {
		mode,
		actualMode,

		preset,
		overrides
	}
})