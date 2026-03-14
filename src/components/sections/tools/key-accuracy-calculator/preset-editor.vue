<script lang="ts" setup>
import CustomNaiveAutoStack from '@/components/custom/naive/auto-stack.vue'
import CustomNaiveButton from '@/components/custom/naive/button.vue'
import CustomNaivePosition from '@/components/custom/naive/position.vue'
import CustomNaiveVerticalStack from '@/components/custom/naive/vertical-stack.vue'
import { useToolsKeyAccuracyCalculatorStore } from '@/stores/tools'
import { NButtonGroup, NCard, NDynamicInput, NFormItem, NInput, NInputGroup, NInputGroupLabel, NInputNumber, NSlider, NSwitch } from 'naive-ui'

defineOptions({
	name: 'SectionsToolsKeyAccuracyCalculatorPresetEditor'
})

const keyAccuracyCalculatorStore = useToolsKeyAccuracyCalculatorStore()
</script>

<template>
	<custom-naive-vertical-stack>
		<n-form-item label="名称">
			<n-input v-model:value="keyAccuracyCalculatorStore.editPreset.name"/>
		</n-form-item>

		<n-form-item label="谱面列表">
			<n-dynamic-input v-model:value="keyAccuracyCalculatorStore.editPreset.maps" @create="keyAccuracyCalculatorStore.createMap()">
				<template #default="{ value }">
					<n-card size="small">
						<custom-naive-auto-stack justify="space-evenly">
							<n-form-item label="参与计算">
								<custom-naive-position class="w-full" placement="center">
									<n-switch v-model:value="value.use"/>
								</custom-naive-position>
							</n-form-item>

							<n-form-item label="曲名">
								<n-input v-model:value="value.name"/>
							</n-form-item>

							<n-form-item label="艺术家">
								<n-input v-model:value="value.artist"/>
							</n-form-item>

							<n-form-item label="谱师">
								<n-input v-model:value="value.mapper"/>
							</n-form-item>

							<n-form-item label="物件">
								<n-input-number v-model:value="value.notes" :min="0"/>
							</n-form-item>
						</custom-naive-auto-stack>
					</n-card>
				</template>

				<template #action="{ create, remove, move, index }">
					<n-button-group class="ml-2">
						<custom-naive-button icon="i-ant-design:minus-outlined" size="tiny" @click="remove(index)"/>
						<custom-naive-button icon="i-ant-design:plus-outlined" size="tiny" @click="create(index)"/>
						<custom-naive-button icon="i-ant-design:arrow-up-outlined" size="tiny" @click="move('up', index)"/>
						<custom-naive-button icon="i-ant-design:arrow-down-outlined" size="tiny" @click="move('down', index)"/>
					</n-button-group>
				</template>
			</n-dynamic-input>
		</n-form-item>

		<custom-naive-position placement="center">
			<n-form-item label="过段要求">
				<custom-naive-vertical-stack :size="12">
					<n-slider v-model:value="keyAccuracyCalculatorStore.editPreset.require_accuracy" :max="100" :min="0" :step="0.01"/>

					<n-input-group>
						<n-input-number v-model:value="keyAccuracyCalculatorStore.editPreset.require_accuracy" :max="100" :min="0" :step="0.01"/>
						<n-input-group-label>%</n-input-group-label>
					</n-input-group>
				</custom-naive-vertical-stack>
			</n-form-item>
		</custom-naive-position>
	</custom-naive-vertical-stack>
</template>