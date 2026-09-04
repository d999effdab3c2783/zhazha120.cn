<script lang="ts" setup>
	definePage({
		meta: {
			title: '福瑞 (Furry)',
			layout: 'subpage',
		},
	});
</script>

<template>
	<custom-naive-ui-vertical-stack>
		<sections-furry-portals />

		<sections-furry-description />

		<n-divider>活动</n-divider>

		<sections-furry-events />

		<n-divider />

		<sections-furry-event-calendar />

		<n-divider>设定</n-divider>

		<sections-furry-characters />
	</custom-naive-ui-vertical-stack>
</template>