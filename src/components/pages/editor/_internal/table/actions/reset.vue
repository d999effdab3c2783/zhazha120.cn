<script lang="ts" setup>
import CustomNaiveButton from '@/components/custom/naive/button.vue'
import type { Table } from 'dexie'
import { NPopconfirm } from 'naive-ui'

const props = defineProps<{
	readonly table: Table
}>()

const handle = async () => {
	await props.table.clear()
}
</script>

<template>
	<n-popconfirm @positive-click="handle">
		<template #trigger>
			<custom-naive-button icon="i-ant-design:delete-outlined" secondary size="small" type="error">重置</custom-naive-button>
		</template>

		确认重置吗
	</n-popconfirm>
</template>