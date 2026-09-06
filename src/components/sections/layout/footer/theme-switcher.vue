<script lang="ts">
	export type ThemeOption = {
		readonly icon: string
		readonly name: string
		readonly value: string
	}
</script>

<script lang="ts" setup>
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

	const handleThemeClick = (value: string) => {
		themeStore.$patch({
			// @ts-ignore
			mode: value
		})
	}
</script>

<template>
	<n-button-group size="small">
		<template v-for="{ icon, name, value } in themes">
			<custom-naive-ui-button
				:icon-class="icon"
				:type="themeStore.mode === value ? 'primary' : undefined"
				secondary
				@click="handleThemeClick(value)"
			>
				<custom-naive-ui-text-stack>
					<n-text class="text-current fw-bold">
						{{ name }}
					</n-text>
				</custom-naive-ui-text-stack>
			</custom-naive-ui-button>
		</template>
	</n-button-group>
</template>