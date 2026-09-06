<script lang="ts" setup>
	import { useRouteQuery } from '@vueuse/router'

	import supportChannelsData from '@/data/support/channels'

	definePage({
		meta: {
			title: '赞助 & 支持',
			layout: 'subpage'
		}
	})

	const value = useRouteQuery('tab', '3', {
		mode: 'replace',
		transform: Number
	})
</script>

<template>
	<n-tabs v-model:value="value" animated type="segment">
		<template v-for="(channel, index) in supportChannelsData">
			<n-tab-pane :name="index" :tab="channel.name">
				<sections-support-channel v-bind="channel" />
			</n-tab-pane>
		</template>
	</n-tabs>
</template>