<script lang="ts" setup>
	import { useOsTheme } from 'naive-ui';

	import codetimeData from '@/data/dev/codetime' with { type: 'macro' };

	const { isMobile } = useResponsive();
	const osTheme = useOsTheme();

	const processWidget = (url: string) => url.replaceAll('{theme}', osTheme.value ?? 'light');
	const providerWebsite = `https://${codetimeData.domain}`;
</script>

<template>
	<custom-naive-ui-vertical-stack align="center">
		<n-image :src="processWidget(codetimeData.widgets.calendar)" />

		<custom-naive-ui-horizontal-stack>
			<n-image :src="processWidget(codetimeData.widgets.trend)" />

			<n-element class="flex-1">
				<n-tabs
					:class="{
						'min-w-120': !isMobile,
					}"
					animated
					justify-content="center"
					type="line"
				>
					<n-tab-pane name="按语言">
						<custom-naive-ui-position placement="center">
							<n-image :src="processWidget(codetimeData.widgets.top.languages)" />
						</custom-naive-ui-position>
					</n-tab-pane>

					<n-tab-pane name="按项目">
						<custom-naive-ui-position placement="center">
							<n-image :src="processWidget(codetimeData.widgets.top.projects)" />
						</custom-naive-ui-position>
					</n-tab-pane>
				</n-tabs>
			</n-element>
		</custom-naive-ui-horizontal-stack>

		<custom-naive-ui-horizontal-stack align="center" justify="center">
			<n-image :src="processWidget(codetimeData.widgets.status)" />
			<n-image :src="processWidget(codetimeData.widgets.usage)" />
		</custom-naive-ui-horizontal-stack>

		<custom-naive-ui-horizontal-stack align="center" justify="center">
			<n-image :src="processWidget(codetimeData.widgets.badge.coding_time)" />
			<n-image :src="processWidget(codetimeData.widgets.badge.tokens)" />
		</custom-naive-ui-horizontal-stack>

		<n-element class="mt-4">
			<custom-naive-ui-vertical-stack align="center">
				<n-text :depth="3">仅供参考</n-text>

				<custom-naive-ui-redirect-button :href="providerWebsite" class="size-fit" tag="a" text type="primary">
					<n-text class="text-current fw-bold">{{ codetimeData.domain }}</n-text>
				</custom-naive-ui-redirect-button>
			</custom-naive-ui-vertical-stack>
		</n-element>
	</custom-naive-ui-vertical-stack>
</template>