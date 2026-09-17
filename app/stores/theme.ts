import { darkTheme, lightTheme, useOsTheme } from 'naive-ui'
import { defineStore } from 'pinia'
import { computed, shallowRef } from 'vue'

import themeData from '~/data/theme'

const osTheme = useOsTheme()

export const useThemeStore = defineStore(
	'theme',
	() => {
		const mode = shallowRef<'light' | 'system' | 'dark'>('system')

		const actualMode = computed(() => {
			if (mode.value === 'system') {
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

			return null
		})

		const overrides = computed(() => {
			switch (actualMode.value) {
				case 'light':
					return {
						...themeData['naive-ui'].global.overrides,
						...themeData['naive-ui'].light.overrides
					}
				case 'dark':
					return {
						...themeData['naive-ui'].global.overrides,
						...themeData['naive-ui'].dark.overrides
					}
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