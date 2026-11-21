<script lang="ts" setup>
	import { useClipboard } from '@vueuse/core'
	import { clsx } from 'clsx'
	import { isNil, isNotNil } from 'es-toolkit'
	import { computed } from 'vue'

	import { useApiStore } from '~/stores/api'
	import { useKeyAccuracyCalculatorToolStore } from '~/stores/tools'

	const keyAccuracyCalculatorToolStore = useKeyAccuracyCalculatorToolStore()
	const clipboard = useClipboard()
	const apiStore = useApiStore()

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

	const shareLines = computed(() => {
		if (isNil(keyAccuracyCalculatorToolStore.result)) {
			return []
		}

		return [
			[
				`${keyAccuracyCalculatorToolStore.data.name}`,
				keyAccuracyCalculatorToolStore.result
					.map(value => {
						return `${value.toFixed(2)}%`
					})
					.join(' - ')
			].join('\n'),
			[
				`${keyAccuracyCalculatorToolStore.data.name}`,
				'',
				keyAccuracyCalculatorToolStore.result
					.map((value, index) => {
						const fixedValue = value.toFixed(2)

						if (isNotNil(keyAccuracyCalculatorToolStore.data.maps[index])) {
							return `${keyAccuracyCalculatorToolStore.data.maps[index].title}: ${fixedValue}%`
						}

						return `${fixedValue}%`
					})
					.join('\n')
			].join('\n'),
			[
				`${keyAccuracyCalculatorToolStore.data.name}`,
				'',
				keyAccuracyCalculatorToolStore.result
					.map((value, index) => {
						const fixedValue = value.toFixed(2)

						return `第 ${index + 1} 首的准度是: ${fixedValue}%`
					})
					.join('\n')
			].join('\n')
		]
	})

	const copy = async (text: string) => {
		if (!clipboard.isSupported.value) {
			if (isNotNil(apiStore.message)) {
				apiStore.message.error('复制失败, 不支持当前环境')
			}

			return
		}

		await clipboard.copy(text)

		if (clipboard.copied.value) {
			if (isNotNil(apiStore.message)) {
				apiStore.message.success('复制成功')
			}
		}
	}

	const trimShareLine = (line: string) => {
		const lines = line.split('\n')

		if (lines.length > 1) {
			return lines.slice(isNotNil(lines[1]) && lines[1].length <= 0 ? 2 : 1).join('\n')
		}

		return line
	}
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

					<template v-if="keyAccuracyCalculatorToolStore.passed">
						<custom-modal
							preset="card"
							size="small"
							title="分享"
						>
							<template #trigger="{ toggle }">
								<n-button @click="toggle">
									<template #icon>
										<n-icon class="i-ant-design:share-alt-outlined" />
									</template>

									告诉别人
								</n-button>
							</template>

							<n-flex
								size="small"
								vertical
							>
								<template
									v-for="(item, index) in shareLines"
									:key="index"
								>
									<n-card
										embedded
										size="small"
									>
										<n-text class="whitespace-pre-line">{{ item }}</n-text>

										<template #action>
											<n-flex size="small">
												<n-button
													size="small"
													@click="copy(item)"
												>
													<template #icon>
														<n-icon class="i-ant-design:copy-outlined" />
													</template>

													复制
												</n-button>

												<n-button
													size="small"
													@click="copy(trimShareLine(item))"
												>
													<template #icon>
														<n-icon class="i-ant-design:copy-outlined" />
													</template>

													复制 (无标题)
												</n-button>
											</n-flex>
										</template>
									</n-card>
								</template>
							</n-flex>
						</custom-modal>
					</template>

					<template v-else>
						<n-text :depth="3">
							好可惜, 就差 {{ keyAccuracyCalculatorToolStore.passedDiff.toFixed(2) }}%
						</n-text>
					</template>
				</n-flex>
			</n-alert>
		</template>
	</n-flex>
</template>

<style lang="scss" scoped>
	@use '~/styles/utils';
</style>