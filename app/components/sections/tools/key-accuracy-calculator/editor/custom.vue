<script lang="ts" setup>
	import { useResponsive } from '~/composables/responsive'
	import { useKeyAccuracyCalculatorToolStore } from '~/stores/tools'

	const keyAccuracyCalculatorToolStore = useKeyAccuracyCalculatorToolStore()

	const { isMobile } = useResponsive()

	const handleCreateMap = () => {
		return {
			title: '',
			notes: 0
		} as const satisfies (typeof keyAccuracyCalculatorToolStore.data.maps)[number]
	}
</script>

<template>
	<n-card
		size="small"
		title="自定义"
	>
		<n-divider class="!mt-0" />

		<n-flex
			size="small"
			vertical
		>
			<n-form-item label="名称">
				<n-input v-model:value="keyAccuracyCalculatorToolStore.data.name" />
			</n-form-item>

			<n-form-item
				:class="{
					'n-dynamic-input__patch': isMobile
				}"
				label="谱面列表"
			>
				<n-dynamic-input
					v-model:value="keyAccuracyCalculatorToolStore.data.maps"
					@create="handleCreateMap"
				>
					<template #default="{ value }">
						<n-card size="small">
							<n-flex
								justify="space-evenly"
								size="large"
								:vertical="isMobile"
							>
								<n-form-item
									class="flex-1"
									label="标题"
								>
									<n-input v-model:value="value.title" />
								</n-form-item>

								<n-form-item
									class="flex-1"
									label="物件"
								>
									<n-input-number
										v-model:value="value.notes"
										:min="0"
									/>
								</n-form-item>
							</n-flex>
						</n-card>
					</template>

					<template #action="{ create, remove, move, index }">
						<n-button-group class="ml-2">
							<n-button
								size="tiny"
								@click="remove(index)"
							>
								<template #icon>
									<n-icon class="i-ant-design:minus-outlined" />
								</template>
							</n-button>

							<n-button
								size="tiny"
								@click="create(index)"
							>
								<template #icon>
									<n-icon class="i-ant-design:plus-outlined" />
								</template>
							</n-button>

							<n-button
								size="tiny"
								@click="move('up', index)"
							>
								<template #icon>
									<n-icon class="i-ant-design:arrow-up-outlined" />
								</template>
							</n-button>

							<n-button
								size="tiny"
								@click="move('down', index)"
							>
								<template #icon>
									<n-icon class="i-ant-design:arrow-down-outlined" />
								</template>
							</n-button>
						</n-button-group>
					</template>
				</n-dynamic-input>
			</n-form-item>

			<n-form-item label="过段要求">
				<n-flex
					class="w-full"
					size="small"
					vertical
				>
					<n-slider
						v-model:value="keyAccuracyCalculatorToolStore.data.require_accuracy"
						:max="100"
						:min="0"
						:step="0.01"
					/>

					<n-input-group>
						<n-input-number
							v-model:value="keyAccuracyCalculatorToolStore.data.require_accuracy"
							:max="100"
							:min="0"
							:step="0.01"
						/>

						<n-input-group-label>%</n-input-group-label>
					</n-input-group>
				</n-flex>
			</n-form-item>
		</n-flex>
	</n-card>
</template>

<style lang="scss">
	@use '~/styles/patches';
</style>