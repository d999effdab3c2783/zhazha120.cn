import { useZodRegistry } from '@/composables/database'
import type { Theme } from '@/types/stores/theme'
import { generate } from '@ant-design/colors'
import { darkTheme, type GlobalThemeOverrides, lightTheme, useOsTheme } from 'naive-ui'
import { defineStore } from 'pinia'
import { isNonNullish, isNullish } from 'remeda'
import { computed, ref } from 'vue'
import { z } from 'zod'

// @unocss-include

const themes: Theme[] = [
	{
		icon: 'i-tabler:sun',
		name: '浅色',
		value: 'light'
	},
	{
		icon: 'i-tabler:moon',
		name: '深色',
		value: 'dark'
	}
]

export const useThemeStore = defineStore('theme', () => {
	const osTheme = ref(useOsTheme().value)

	const nextTheme = computed(() => {
		const currentIndex = themes.findIndex(theme => {
			return theme.value === osTheme.value
		})

		return themes[currentIndex + 1] ?? themes[0]
	})

	const switchNextTheme = async () => {
		osTheme.value = nextTheme.value.value
	}

	const preset = computed(() => {
		switch (osTheme.value) {
			case 'light':
				return lightTheme
			case 'dark':
				return darkTheme
		}
	})

	const {
		0: theme_primary_color,
		1: theme_generator_light_surface_color_count,
		2: theme_generator_light_surface_color_start,
		3: theme_generator_light_surface_color_step,
		4: theme_generator_dark_surface_color_count,
		5: theme_generator_dark_surface_color_start,
		6: theme_generator_dark_surface_color_step
	} = useZodRegistry(
		z.object({
			'theme.primary_color:0': z.string(),
			'theme.generator.light_surface_color.count:1': z.number(),
			'theme.generator.light_surface_color.start:2': z.number(),
			'theme.generator.light_surface_color.step:3': z.number(),
			'theme.generator.dark_surface_color.count:4': z.number(),
			'theme.generator.dark_surface_color.start:5': z.number(),
			'theme.generator.dark_surface_color.step:6': z.number()
		})
	)

	const generateHexColor = (input: number) => {
		return '#' + input.toString(16)
			.padStart(2, '0')
			.repeat(3)
	}

	const generateSurfaceColors = (count: number, start: number, step: number) => {
		return Array.from({
			length: count
		}, (_, i) => {
			return generateHexColor(start + i * step)
		})
	}

	const lightSurfaceColors = computed(() => {
		if (
			isNullish(theme_generator_light_surface_color_count.value) ||
			isNullish(theme_generator_light_surface_color_start.value) ||
			isNullish(theme_generator_light_surface_color_step.value)
		) {
			return
		}

		return generateSurfaceColors(
			theme_generator_light_surface_color_count.value,
			theme_generator_light_surface_color_start.value,
			theme_generator_light_surface_color_step.value
		)
	})

	const darkSurfaceColors = computed(() => {
		if (
			isNullish(theme_generator_dark_surface_color_count.value) ||
			isNullish(theme_generator_dark_surface_color_start.value) ||
			isNullish(theme_generator_dark_surface_color_step.value)
		) {
			return
		}

		return generateSurfaceColors(
			theme_generator_dark_surface_color_count.value,
			theme_generator_dark_surface_color_start.value,
			theme_generator_dark_surface_color_step.value
		)
	})

	const surfaceColors = computed(() => {
		switch (osTheme.value) {
			case 'light':
				return lightSurfaceColors.value
			case 'dark':
				return darkSurfaceColors.value
		}
	})

	const primaryColors = computed(() => {
		if ( isNullish(theme_primary_color.value) ) {
			return
		}

		const _surfaceColors = isNonNullish(surfaceColors.value) ? surfaceColors.value : []

		return generate(theme_primary_color.value, {
			backgroundColor: _surfaceColors[0],
			theme: osTheme.value === 'dark' ? 'dark' : 'default'
		})
	})

	const themeOverrides = computed<GlobalThemeOverrides>(() => {
		const realPrimaryColors = isNonNullish(primaryColors.value) ? primaryColors.value : []
		const realSurfaceColors = isNonNullish(surfaceColors.value) ? surfaceColors.value : []

		return {
			common: {
				primaryColor: realPrimaryColors[5],
				primaryColorHover: realPrimaryColors[4],
				primaryColorSuppl: realPrimaryColors[4],
				primaryColorPressed: realPrimaryColors[6]
			},
			Layout: {
				color: realSurfaceColors[0],
				siderColor: realSurfaceColors[2],
				footerColor: realSurfaceColors[1]
			},
			Card: {
				color: realSurfaceColors[1],
				colorModal: realSurfaceColors[1],
				colorEmbedded: realSurfaceColors[2],
				colorEmbeddedModal: realSurfaceColors[2],
				actionColor: realSurfaceColors[3]
			},
			Table: {
				borderColor: realSurfaceColors[2],
				thColor: realSurfaceColors[4],
				tdColor: realSurfaceColors[3]
			},
			DataTable: {
				borderColor: realSurfaceColors[2],
				thColor: realSurfaceColors[4],
				tdColor: realSurfaceColors[3],
				tdColorHover: realSurfaceColors[4]
			},
			Popover: {
				color: realSurfaceColors[3]
			},
			Tabs: {
				tabColorSegment: realPrimaryColors[5]
			}
		}
	})

	return {
		themes,
		nextTheme,
		switchNextTheme,
		value: osTheme,
		preset,
		primaryColors,
		lightSurfaceColors,
		darkSurfaceColors,
		surfaceColors,
		overrides: themeOverrides
	}
}, {
	persist: {
		key: 'pinia.stores.theme',
		pick: ['value']
	}
})