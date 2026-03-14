<script lang="ts" setup>
import { useDatabase } from '@/composables/database'
import type ToolsKeyAccuracyCalculatorPreset from '@/database/tables/tools_key_accuracy_calculator_preset'
import { useToolsKeyAccuracyCalculatorStore } from '@/stores/tools'
import { XNSelect, XNSelectOption } from '@skit/x.naive-ui'
import type { SelectOption } from 'naive-ui'
import { isNonNullish, isNullish, isString } from 'remeda'
import { ref, toRaw } from 'vue'

defineOptions({
	name: 'SectionsToolsKeyAccuracyCalculatorPresetSelector'
})

const selected = ref<number | null>()

const keyAccuracyCalculatorStore = useToolsKeyAccuracyCalculatorStore()

const items = useDatabase<ToolsKeyAccuracyCalculatorPreset[]>(async database => {
	return database.tools_key_accuracy_calculator_presets.toArray()
})

const filter = (pattern: string, option: SelectOption) => {
	if ( !isString(option.label) ) {
		return false
	}

	let i = 0
	let j = 0

	while (i < pattern.length && j < option.label.length) {
		if ( pattern[i].toLowerCase() === option.label[j].toLowerCase() ) {
			i++
		}

		j++
	}

	return i === pattern.length
}

const handleUpdateValue = async (id: number) => {
	selected.value = id

	const item = items.value.find(item => {
		return item.id === id
	})

	if ( isNullish(item) ) {
		return
	}

	keyAccuracyCalculatorStore.preset = toRaw(item)
}
</script>

<template>
	<x-n-select :filter="filter" :value="isNonNullish(keyAccuracyCalculatorStore.preset) ? keyAccuracyCalculatorStore.preset.id : null" clearable filterable @update:value="handleUpdateValue">
		<template v-for="item in items">
			<x-n-select-option :value="item.id">{{ item.name }}</x-n-select-option>
		</template>
	</x-n-select>
</template>