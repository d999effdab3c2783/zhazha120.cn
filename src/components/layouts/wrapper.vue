<script lang="ts" setup>
	import { darkTheme, dateZhCN, zhCN } from 'naive-ui';
</script>

<template>
	<n-config-provider :date-locale="dateZhCN" :locale="zhCN" :theme="darkTheme" abstract inline-theme-disabled>
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