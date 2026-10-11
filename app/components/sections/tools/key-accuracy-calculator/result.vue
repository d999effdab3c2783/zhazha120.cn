<script lang="ts" setup>
	import { clsx } from 'clsx'
	import { computed } from 'vue'

	import { useKeyAccuracyCalculatorToolStore } from '~/stores/tools'

	const keyAccuracyCalculatorToolStore = useKeyAccuracyCalculatorToolStore()

	const alertType = computed(() => {
		if (keyAccuracyCalculatorToolStore.passed) {
			return 'success'
		}

		return 'error'
	})

	const resultTextClassNames = computed(() => {
		return clsx('text-24', {
			'animate-spin hover:(cursor-default animate-duration-1)': keyAccuracyCalculatorToolStore.passed
		})
	})
</script>

<template>
	<n-flex
		size="small"
		vertical
	>
		<template v-if="keyAccuracyCalculatorToolStore.result.length > 0">
			<n-card size="small">
				<n-flex
					align="center"
					justify="center"
					size="small"
				>
					<template
						v-for="(item, index) in keyAccuracyCalculatorToolStore.result"
						:key="index"
					>
						<n-tag size="small">{{ item.toFixed(2) }}%</n-tag>
					</template>
				</n-flex>
			</n-card>
		</template>

		<template v-if="keyAccuracyCalculatorToolStore.valid">
			<n-alert :type="alertType">
				<n-flex
					align="center"
					size="small"
					vertical
				>
					<n-element class="utils__center--grid py-12">
						<n-text :class="resultTextClassNames">
							{{ keyAccuracyCalculatorToolStore.passed ? '过了' : '没过' }}
						</n-text>
					</n-element>

					<template v-if="!keyAccuracyCalculatorToolStore.passed">
						<n-text :depth="3"
							>好可惜, 就差 {{ keyAccuracyCalculatorToolStore.passedDiff.toFixed(2) }}%</n-text
						>
					</template>
				</n-flex>
			</n-alert>
		</template>
	</n-flex>
</template>

<style lang="scss" scoped>
	@use '~/styles/utils';
</style>