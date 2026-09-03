<script lang="ts" setup>
	definePage({
		meta: {
			title: '活动',
			layout: 'subpage',
		},
	});
</script>

<template>
	<custom-naive-ui-vertical-stack>
		<sections-furry-events />

		<n-divider />

		<sections-furry-event-calendar />
	</custom-naive-ui-vertical-stack>
</template>