import type { ActualThemeMode, ThemeMode } from '@/app/types/theme'
import type { GlobalTheme, GlobalThemeOverrides } from 'naive-ui'

import { isNotNil } from 'es-toolkit'
import { darkTheme, lightTheme, useOsTheme } from 'naive-ui'
import { defineStore } from 'pinia'
import { computed, nextTick, shallowRef } from 'vue'

import { darkOverrides, defaultActualTheme, defaultTheme, lightOverrides, sharedOverrides } from '@/app/config/theme'

const osTheme = useOsTheme()

export const useThemeStore = defineStore(
	'theme',
	() => {
		const initialized = shallowRef(false)
		const mode = shallowRef<ThemeMode>(defaultTheme)

		const actualMode = computed<ActualThemeMode>(() => {
			if (mode.value === 'system') {
				if (initialized.value && isNotNil(osTheme.value)) {
					return osTheme.value
				}

				void nextTick(() => {
					initialized.value = true
				})

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
			actualMode,
			mode,
			overrides,
			preset
		}
	},
	{
		persist: {
			pick: ['mode']
		}
	}
)