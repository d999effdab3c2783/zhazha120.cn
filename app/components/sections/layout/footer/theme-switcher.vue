<script lang="ts">
	import type { ThemeMode } from '~/types/theme'

	export type ThemeOption = {
		readonly icon: string
		readonly name: string
		readonly value: ThemeMode
	}
</script>

<script setup lang="ts">
	import { useThemeStore } from '~/stores/theme'

	const themeStore = useThemeStore()

	const themes = [
		{
			icon: 'i-tabler:sun',
			name: '浅色',
			value: 'light'
		},
		{
			icon: 'i-tabler:sun-moon',
			name: '系统',
			value: 'system'
		},
		{
			icon: 'i-tabler:moon',
			name: '深色',
			value: 'dark'
		}
	] satisfies ThemeOption[]

	const handleThemeClick = (value: ThemeMode) => {
		themeStore.$patch({
			mode: value
		})
	}
</script>

<template>
	<n-button-group size="small">
		<template
			v-for="({ icon, name, value }, index) in themes"
			:key="index"
		>
			<n-button
				secondary
				:type="themeStore.mode === value ? 'primary' : undefined"
				@click="handleThemeClick(value)"
			>
				<template #icon>
					<n-icon :class="icon" />
				</template>

				{{ name }}
			</n-button>
		</template>
	</n-button-group>
</template>