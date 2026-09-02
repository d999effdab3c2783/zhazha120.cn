<script lang="ts" setup>
	definePage({
		meta: {
			title: '开发',
			layout: 'subpage',
		},
	});
</script>

<template>
	<custom-naive-ui-vertical-stack>
		<sections-dev-description />

		<n-divider />

		<n-card size="small" title="态势">
			<sections-dev-codetime />
		</n-card>

		<n-divider>技术栈</n-divider>

		<sections-dev-stacks />

		<n-divider>技术履历</n-divider>

		<n-card size="small" title="加入的组织">
			<sections-dev-organizations />
		</n-card>

		<n-card size="small" title="做过的项目">
			<sections-dev-projects />
		</n-card>

		<n-divider>技术挑战</n-divider>

		<n-card size="small" title="打过的比赛">
			<sections-dev-competitions />
		</n-card>
	</custom-naive-ui-vertical-stack>
</template>