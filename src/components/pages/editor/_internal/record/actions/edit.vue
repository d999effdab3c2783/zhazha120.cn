<script lang="ts" setup>
import CustomNaiveButton from '@/components/custom/naive/button.vue'
import RecordForm from '@/components/pages/editor/_internal/record/form/index.vue'
import type { RecordObject } from '@/types/shared'
import type { Table } from 'dexie'
import { useModal } from 'naive-ui'
import { omit } from 'remeda'
import { h, toRaw } from 'vue'

const props = defineProps<{
	readonly table: Table
	readonly record: RecordObject
}>()

const modal = useModal()

const handle = async () => {
	const { destroy } = modal.create({
		preset: 'card',
		size: 'small',
		title: '编辑记录',
		class: 'zhazha120__modal',
		content: () => h(RecordForm, {
			table: props.table,
			record: props.record,
			onSubmit: async (record: Record<string, unknown>) => {
				await props.table.update(
					props.record[props.table.schema.primKey.name],
					omit(toRaw(record), [props.table.schema.primKey.name])
				)

				destroy()
			}
		})
	})
}
</script>

<template>
	<custom-naive-button icon="i-ant-design:edit-outlined" size="small" @click="handle">编辑</custom-naive-button>
</template>

<style lang="scss">
@use '@/styles/zhazha120';
</style>