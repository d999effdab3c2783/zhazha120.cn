<script lang="ts" setup>
	import type { GlobalTheme, GlobalThemeOverrides } from 'naive-ui'

	import { darkTheme, dateZhCN, lightTheme, useOsTheme, zhCN } from 'naive-ui'

	import themeData from '@/data/theme' with { type: 'macro' }

	const osTheme = useOsTheme()

	const theme = computed<{
		readonly preset?: GlobalTheme
		readonly overrides: GlobalThemeOverrides
	}>(() => {
		switch (osTheme.value) {
			case 'light':
				return {
					preset: lightTheme,

					overrides: {
						...themeData['naive-ui'].global.overrides,
						...themeData['naive-ui'].light.overrides
					} satisfies GlobalThemeOverrides
				}
			case 'dark':
				return {
					preset: darkTheme,

					overrides: {
						...themeData['naive-ui'].global.overrides,
						...themeData['naive-ui'].dark.overrides
					} satisfies GlobalThemeOverrides
				}
			default:
				return {
					overrides: {
						...themeData['naive-ui'].global.overrides
					} satisfies GlobalThemeOverrides
				}
		}
	})
</script>

<template>
	<n-config-provider
		:date-locale="dateZhCN"
		:locale="zhCN"
		:theme="theme.preset"
		:theme-overrides="theme.overrides"
		inline-theme-disabled
	>
		<n-dialog-provider>
			<n-loading-bar-provider>
				<n-modal-provider>
					<n-message-provider>
						<n-notification-provider>
							<slot />
						</n-notification-provider>
					</n-message-provider>
				</n-modal-provider>
			</n-loading-bar-provider>
		</n-dialog-provider>
	</n-config-provider>
</template>