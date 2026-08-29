<script lang="ts" setup>
	import { useOsTheme } from 'naive-ui';

	import CustomRedirectWrapper from '@/components/custom/redirect-wrapper.vue';
	import codetimeData from '@/data/dev/codetime' with { type: 'macro' };

	const osTheme = useOsTheme();
	const { isMobile } = useResponsive();

	const processWidget = (url: string) => url.replaceAll('{theme}', osTheme.value ?? 'light');
</script>

<template>
	<n-flex align="center" size="small" vertical>
		<n-image :src="processWidget(codetimeData.widgets.calendar)" />

		<n-flex :vertical="isMobile" size="small">
			<n-image :src="processWidget(codetimeData.widgets.trend)" />

			<n-element class="flex-1">
				<n-tabs :justify-content="isMobile ? 'center' : undefined" animated>
					<n-tab-pane name="按语言">
						<n-flex :justify="isMobile ? 'center' : undefined">
							<n-image :src="processWidget(codetimeData.widgets.top.languages)" />
						</n-flex>
					</n-tab-pane>

					<n-tab-pane name="按项目">
						<n-flex :justify="isMobile ? 'center' : undefined">
							<n-image :src="processWidget(codetimeData.widgets.top.projects)" />
						</n-flex>
					</n-tab-pane>
				</n-tabs>
			</n-element>
		</n-flex>

		<n-flex :vertical="isMobile" align="center" justify="space-evenly" size="small">
			<n-image :src="processWidget(codetimeData.widgets.status)" />
			<n-image :src="processWidget(codetimeData.widgets.usage)" />
		</n-flex>

		<n-flex :vertical="isMobile" align="center" justify="space-evenly" size="small">
			<n-image :src="processWidget(codetimeData.widgets.badge.coding_time)" />
			<n-image :src="processWidget(codetimeData.widgets.badge.tokens)" />
		</n-flex>

		<n-element class="mt-4">
			<n-flex :size="0" align="center" vertical>
				<n-text :depth="3">仅供参考</n-text>

				<custom-redirect-wrapper :href="`https://${codetimeData.domain}`">
					<template #default="{ redirect, aProps }">
						<n-button tag="a" text v-bind="aProps" @click.prevent="redirect">
							{{ codetimeData.domain }}
						</n-button>
					</template>
				</custom-redirect-wrapper>
			</n-flex>
		</n-element>
	</n-flex>
</template>