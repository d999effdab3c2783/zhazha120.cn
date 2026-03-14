<script lang="ts" setup>
import SectionsGlobalConfigurer from '@/components/sections/global/configurer.vue'
import Initializer from '@/components/sections/global/initializer.vue'
import SectionsLayoutFooter from '@/components/sections/layout/footer.vue'
import SharedPageView from '@/components/shared/page-view.vue'
import { container } from '@/shared/global'
import { useThemeStore } from '@/stores/theme'
import hljs from 'highlight.js'
import type { LenisOptions } from 'lenis'
import { VueLenis } from 'lenis/vue'
import { dateZhCN, NConfigProvider, NDialogProvider, NLayout, NLayoutContent, NLayoutFooter, NLoadingBarProvider, NMessageProvider, NModalProvider, NNotificationProvider, zhCN } from 'naive-ui'
import { ProConfigProvider as ProNConfigProvider, zhCN as proZhCN } from 'pro-naive-ui'

const themeStore = useThemeStore()

const options = {
	lenis: {
		autoRaf: true
	} satisfies LenisOptions
} as const
</script>

<template>
	<n-config-provider :date-locale="dateZhCN" :hljs="hljs" :locale="zhCN" :theme="themeStore.preset" :theme-overrides="themeStore.overrides" abstract inline-theme-disabled preflight-style-disabled>
		<pro-n-config-provider :locale="proZhCN">
			<n-dialog-provider :to="container">
				<n-loading-bar-provider :to="container">
					<n-message-provider :to="container">
						<n-modal-provider :to="container">
							<n-notification-provider :to="container">
								<sections-global-configurer/>
								<vue-lenis :options="options.lenis" root/>


								<n-layout content-class="min-h-screen">
									<n-layout-content>
										<initializer>
											<shared-page-view/>
										</initializer>
									</n-layout-content>

									<n-layout-footer>
										<sections-layout-footer/>
									</n-layout-footer>
								</n-layout>
							</n-notification-provider>
						</n-modal-provider>
					</n-message-provider>
				</n-loading-bar-provider>
			</n-dialog-provider>
		</pro-n-config-provider>
	</n-config-provider>
</template>

<style lang="scss">
@use '@/styles/transitions/page';
</style>