<script lang="ts" setup>
	definePage({
		meta: {
			title: '杂项',
			layout: 'subpage',
		},
	});
</script>

<template>
	<custom-naive-ui-vertical-stack>
		<n-card content-class="!pb-0" size="small" title="友情链接">
			<sections-misc-friend-links />
		</n-card>
	</custom-naive-ui-vertical-stack>
</template>