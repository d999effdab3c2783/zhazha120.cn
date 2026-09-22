<script setup lang="ts">
	import { isNotNil } from 'es-toolkit'
	import { dateZhCN, zhCN } from 'naive-ui'
	import { useTemplateRef } from 'vue'

	import { useThemeStore } from '~/stores/theme'

	const containerRef = useTemplateRef('containerRef')

	const themeStore = useThemeStore()
</script>

<template>
	<n-config-provider
		abstract
		:date-locale="dateZhCN"
		inline-theme-disabled
		:locale="zhCN"
		:theme="themeStore.preset"
		:theme-overrides="themeStore.overrides"
	>
		<n-element
			ref="containerRef"
			class="font-[v-zhazha120]"
		>
			<template v-if="isNotNil(containerRef)">
				<n-dialog-provider :to="containerRef.$el">
					<n-loading-bar-provider :to="containerRef.$el">
						<n-modal-provider :to="containerRef.$el">
							<n-message-provider :to="containerRef.$el">
								<n-notification-provider :to="containerRef.$el">
									<app-api-injector />

									<slot />
								</n-notification-provider>
							</n-message-provider>
						</n-modal-provider>
					</n-loading-bar-provider>
				</n-dialog-provider>
			</template>
		</n-element>
	</n-config-provider>
</template>