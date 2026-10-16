<script lang="ts" setup>
	import { isNotNil } from 'es-toolkit'
	import { computed } from 'vue'

	import { useKeyAccuracyCalculatorToolStore } from '~/stores/tools'

	const keyAccuracyCalculatorToolStore = useKeyAccuracyCalculatorToolStore()

	const options = computed(() => {
		return keyAccuracyCalculatorToolStore.presets.map((preset, index) => {
			return {
				label: preset.name,
				value: index
			}
		})
	})

	const handleUpdate = (value: number) => {
		if (isNotNil(keyAccuracyCalculatorToolStore.presets[value])) {
			keyAccuracyCalculatorToolStore.data = keyAccuracyCalculatorToolStore.presets[value]
		}
	}

	keyAccuracyCalculatorToolStore.loadPresets()
</script>

<template>
	<n-card
		size="small"
		title="预设"
	>
		<n-select
			:options="options"
			@update:value="handleUpdate"
		/>
	</n-card>
</template>