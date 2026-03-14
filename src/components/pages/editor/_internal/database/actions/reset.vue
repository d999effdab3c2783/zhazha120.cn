<script lang="ts" setup>
import CustomNaiveButton from '@/components/custom/naive/button.vue'
import type { Dexie } from 'dexie'
import { NPopconfirm } from 'naive-ui'

const props = defineProps<{
	readonly database: Dexie
}>()

const handle = async () => {
	props.database.close({
		disableAutoOpen: true
	})

	await props.database.delete()
	await props.database.open()
}
</script>

<template>
	<n-popconfirm @positive-click="handle">
		<template #trigger>
			<custom-naive-button icon="i-ant-design:delete-outlined" secondary type="error">重置</custom-naive-button>
		</template>

		确认重置吗
	</n-popconfirm>
</template>