<script lang="ts" setup>
	definePage({
		meta: {
			title: '本体',
			layout: 'subpage',
		},
	});
</script>

<template>
	<custom-naive-ui-vertical-stack>
		<sections-self-description />

		<n-divider />

		<n-card size="small" title="找到我">
			<sections-self-contacts />
		</n-card>

		<n-card size="small" title="探索我">
			<sections-self-portals />
		</n-card>
	</custom-naive-ui-vertical-stack>
</template>