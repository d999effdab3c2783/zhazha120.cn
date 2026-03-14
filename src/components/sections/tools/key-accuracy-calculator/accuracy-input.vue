<script lang="ts" setup>
import CustomNaiveHorizontalStack from '@/components/custom/naive/horizontal-stack.vue'
import CustomNaivePosition from '@/components/custom/naive/position.vue'
import CustomNaiveVerticalStack from '@/components/custom/naive/vertical-stack.vue'
import { useToolsKeyAccuracyCalculatorStore } from '@/stores/tools'
import { NCard, NInputGroup, NInputGroupLabel, NInputNumber, NText } from 'naive-ui'

defineOptions({
	name: 'SectionsToolsKeyAccuracyCalculatorAccuracyInput'
})

const keyAccuracyCalculatorStore = useToolsKeyAccuracyCalculatorStore()
</script>

<template>
	<custom-naive-vertical-stack>
		<template v-for="(item, index) in keyAccuracyCalculatorStore.filteredMaps">
			<n-card size="small">
				<template #header>
					<custom-naive-position placement="center">
						<n-text>{{ keyAccuracyCalculatorStore.formatMapName(item) }}</n-text>
					</custom-naive-position>
				</template>

				<custom-naive-vertical-stack align="center">
					<custom-naive-vertical-stack>
						<n-input-group>
							<n-input-number v-model:value="keyAccuracyCalculatorStore.inputs[index]" :max="100" :min="0" :placeholder="(`#${index + 1}`)" :step="0.01" clearable/>
							<n-input-group-label>%</n-input-group-label>
						</n-input-group>

						<custom-naive-horizontal-stack align="center" justify="space-between">
							<n-text :depth="3">{{ item.notes }} 物件</n-text>
							<n-text :depth="3" class="text-sm">{{ (item.notes / (keyAccuracyCalculatorStore.totalNotes ?? 0) * 100).toFixed(2) }}%</n-text>
						</custom-naive-horizontal-stack>
					</custom-naive-vertical-stack>
				</custom-naive-vertical-stack>
			</n-card>
		</template>
	</custom-naive-vertical-stack>
</template>