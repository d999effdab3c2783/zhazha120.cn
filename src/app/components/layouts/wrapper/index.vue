<script setup lang="ts">
	import type { ComponentPublicInstance } from 'vue'

	import { isNotNil } from 'es-toolkit'
	import {
		NConfigProvider,
		NDialogProvider,
		NElement,
		NLoadingBarProvider,
		NMessageProvider,
		NModalProvider,
		NNotificationProvider
	} from 'naive-ui'
	import { dateZhCN, zhCN } from 'naive-ui'
	import { computed, useId, useTemplateRef } from 'vue'

	import ApiInjector from '@/app/components/layouts/wrapper/_components/api-injector.vue'
	import pinia from '@/app/shared/pinia'
	import { useThemeStore } from '@/app/stores/theme'

	const id = useId()
	const themeStore = useThemeStore(pinia)
	const containerRef = useTemplateRef<ComponentPublicInstance>('containerRef')

	const containerQuerySelector = computed(() => {
		return `#${id}`
	})
</script>

<template>
	<n-config-provider
		:date-locale="dateZhCN"
		inline-theme-disabled
		:locale="zhCN"
		preflight-style-disabled
		:theme="themeStore.preset"
		:theme-overrides="themeStore.overrides"
	>
		<n-element
			:id="id"
			ref="containerRef"
			class="font-(family-name:--fonts--v-zhazha120)"
		>
			<n-dialog-provider :to="isNotNil(containerRef) ? containerRef.$el : containerQuerySelector">
				<n-loading-bar-provider :to="isNotNil(containerRef) ? containerRef.$el : false">
					<n-message-provider :to="isNotNil(containerRef) ? containerRef.$el : containerQuerySelector">
						<n-modal-provider :to="isNotNil(containerRef) ? containerRef.$el : containerQuerySelector">
							<n-notification-provider
								:to="isNotNil(containerRef) ? containerRef.$el : containerQuerySelector"
							>
								<api-injector>
									<slot />
								</api-injector>
							</n-notification-provider>
						</n-modal-provider>
					</n-message-provider>
				</n-loading-bar-provider>
			</n-dialog-provider>
		</n-element>
	</n-config-provider>
</template>