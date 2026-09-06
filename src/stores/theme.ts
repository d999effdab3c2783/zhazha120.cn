import type { GlobalThemeOverrides } from 'naive-ui'

import { darkTheme, lightTheme, useOsTheme } from 'naive-ui'
import { mergeDeep } from 'remeda'

import themeData from '@/data/theme' with { type: 'macro' }

export const useThemeStore = defineStore(
	'theme',
	() => {
		const mode = shallowRef<'system' | 'light' | 'dark'>('system')
		const osTheme = useOsTheme()

		const actualMode = computed(() => {
			if ('system' === mode.value) {
				return osTheme.value
			}

			return mode.value
		})

		const preset = computed(() => {
			switch (actualMode.value) {
				case 'light':
					return lightTheme
				case 'dark':
					return darkTheme
			}

			return undefined
		})

		const overrides = computed<GlobalThemeOverrides>(() => {
			switch (actualMode.value) {
				case 'light':
					return mergeDeep(themeData['naive-ui'].global.overrides, themeData['naive-ui'].light.overrides)
				case 'dark':
					return mergeDeep(themeData['naive-ui'].global.overrides, themeData['naive-ui'].dark.overrides)
			}

			return themeData['naive-ui'].global.overrides
		})

		return {
			mode,
			actualMode,
			preset,
			overrides
		}
	},
	{
		persist: {
			pick: ['mode']
		}
	}
)