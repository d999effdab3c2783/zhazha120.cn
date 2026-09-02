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
		<sections-furry-description />

		<n-divider>设定集</n-divider>

		<sections-furry-characters />
	</custom-naive-ui-vertical-stack>
</template>