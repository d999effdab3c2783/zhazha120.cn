<script lang="ts" setup>
	import { isNotNil } from 'es-toolkit'

	import { useKeyAccuracyCalculatorToolStore } from '~/stores/tools'

	const keyAccuracyCalculatorToolStore = useKeyAccuracyCalculatorToolStore()
</script>

<template>
	<n-flex
		size="small"
		vertical
	>
		<sections-tools-key-accuracy-calculator-editor-preset />
		<sections-tools-key-accuracy-calculator-editor-custom />

		<template
			v-if="
				isNotNil(keyAccuracyCalculatorToolStore.data.maps) &&
				keyAccuracyCalculatorToolStore.data.maps.length > 0
			"
		>
			<n-divider />

			<sections-tools-key-accuracy-calculator-inputs />
			<sections-tools-key-accuracy-calculator-result />
		</template>
	</n-flex>
</template>