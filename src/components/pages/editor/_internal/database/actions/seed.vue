<script lang="ts" setup>
import CustomNaiveButton from '@/components/custom/naive/button.vue'
import type { Dexie } from 'dexie'
import { NPopconfirm } from 'naive-ui'

const props = defineProps<{
	readonly database: Dexie
}>()

const handle = async () => {
	await Promise.all(
		Object.values(
			import.meta.glob<{
				default: (database: Dexie) => Promise<void>
			}>('@/database/seeders/*')
		).map(async loadModule => {
			const module = await loadModule()
			await module.default(props.database)
		})
	)
}
</script>

<template>
	<n-popconfirm @positive-click="handle">
		<template #trigger>
			<custom-naive-button icon="i-ant-design:folder-add-outlined" secondary type="success">填充</custom-naive-button>
		</template>

		确认填充吗
	</n-popconfirm>
</template>