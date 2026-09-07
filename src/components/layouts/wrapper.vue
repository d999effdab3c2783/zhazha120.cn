<script lang="ts" setup>
	import { dateZhCN, zhCN } from 'naive-ui'

	const themeStore = useThemeStore()
</script>

<template>
	<n-config-provider
		:date-locale="dateZhCN"
		:locale="zhCN"
		:theme="themeStore.preset"
		:theme-overrides="themeStore.overrides"
		abstract
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