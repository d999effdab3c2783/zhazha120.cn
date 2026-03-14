<script lang="ts" setup>
import CreateRecordAction from '@/components/pages/editor/_internal/table/actions/create-record.vue'
import ResetAction from '@/components/pages/editor/_internal/table/actions/reset.vue'
import SeedAction from '@/components/pages/editor/_internal/table/actions/seed.vue'
import type { Table } from 'dexie'
import { NFlex } from 'naive-ui'
import { h } from 'vue'

const props = defineProps<{
	readonly table: Table
}>()

const seedAction = import.meta.env.DEV ? h(SeedAction, {
	table: props.table
}) : null
</script>

<template>
	<n-flex size="small">
		<component :is="seedAction"/>
		<reset-action :table="table"/>
		<create-record-action :table="table"/>
	</n-flex>
</template>