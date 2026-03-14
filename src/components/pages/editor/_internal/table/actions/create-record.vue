<script lang="ts" setup>
import CustomNaiveButton from '@/components/custom/naive/button.vue'
import RecordForm from '@/components/pages/editor/_internal/record/form/index.vue'
import type { RecordObject } from '@/types/shared'
import type { Table } from 'dexie'
import { useModal } from 'naive-ui'
import { h, toRaw } from 'vue'

const props = defineProps<{
	readonly table: Table
}>()

const modal = useModal()

const handle = async () => {
	const { destroy } = modal.create({
		preset: 'card',
		size: 'small',
		title: '创建记录',
		class: 'zhazha120__modal',
		content: () => h(RecordForm, {
			table: props.table,
			record: {},
			onSubmit: async (record: RecordObject) => {
				await props.table.add(
					toRaw(record)
				)

				destroy()
			}
		})
	})
}
</script>

<template>
	<custom-naive-button icon="i-ant-design:plus-outlined" size="small" type="primary" @click="handle">创建</custom-naive-button>
</template>

<style lang="scss">
@use '@/styles/zhazha120';
</style>