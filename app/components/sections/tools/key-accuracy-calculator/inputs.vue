<script lang="ts" setup>
	import { useResponsive } from '~/composables/responsive'
	import { useKeyAccuracyCalculatorToolStore } from '~/stores/tools'

	const keyAccuracyCalculatorToolStore = useKeyAccuracyCalculatorToolStore()

	const { isMobile } = useResponsive()
</script>

<template>
	<n-card size="small">
		<n-flex
			size="large"
			vertical
		>
			<n-scrollbar
				class="overscroll-contain"
				data-lenis-prevent-horizontal
				x-scrollable
			>
				<n-flex
					:align="!isMobile ? 'center' : undefined"
					:class="{
						'w-max': !isMobile
					}"
					justify="space-evenly"
					size="large"
					:vertical="isMobile"
					:wrap="false"
				>
					<template
						v-for="(item, index) in keyAccuracyCalculatorToolStore.data.maps"
						:key="index"
					>
						<n-flex
							:size="0"
							vertical
						>
							<n-form-item
								:label="item.title"
								:show-feedback="false"
							>
								<n-input-number
									v-model:value="item.accuracy"
									clearable
									:max="100"
									:min="0"
									:step="0.01"
								/>
							</n-form-item>

							<n-flex
								align="center"
								justify="space-between"
								:size="0"
							>
								<n-text
									class="text-[.8em]"
									:depth="3"
								>
									{{ item.notes }} 物量
								</n-text>

								<n-text
									class="text-[.8em]"
									:depth="3"
								>
									({{ ((item.notes / keyAccuracyCalculatorToolStore.totalNotes) * 100).toFixed(2) }}%)
								</n-text>
							</n-flex>
						</n-flex>

						<template v-if="!isMobile && index !== keyAccuracyCalculatorToolStore.data.maps.length - 1">
							<n-divider vertical />
						</template>
					</template>
				</n-flex>
			</n-scrollbar>

			<template v-if="!isMobile">
				<n-element class="utils__center--flex">
					<n-text :depth="3">tips: 你可以按 tab 快速切换到下一个输入框</n-text>
				</n-element>
			</template>
		</n-flex>
	</n-card>
</template>

<style lang="scss">
	@use '~/styles/patches';
</style>

<style lang="scss" scoped>
	@use '~/styles/utils';
</style>