<script lang="ts" setup>
import Database from '@/database'
import { computedAsync, watchIgnorable } from '@vueuse/core'
import { Dexie } from 'dexie'
import { NElement, NSelect, type SelectOption } from 'naive-ui'
import { ref, watch } from 'vue'

const props = defineProps<{
	readonly database: Dexie
}>()

const emits = defineEmits<{
	(event: 'switch', database: Dexie): void
}>()

const current = ref<string>()

const watcher = watchIgnorable(current, newName => {
	const instance = new Database(newName)

	emits('switch', instance)
})

watch(() => props.database, newDatabase => {
	watcher.ignoreUpdates(() => {
		current.value = newDatabase.name
	})
}, {
	immediate: true
})

const options = computedAsync<SelectOption[]>(async () => {
	const names = await Dexie.getDatabaseNames()

	return names.map(name => {
		return {
			label: name,
			value: name
		} satisfies SelectOption
	})
}, [])
</script>

<template>
	<n-element class="p-2">
		<n-select v-model:value="current" :options="options"/>
	</n-element>
</template>