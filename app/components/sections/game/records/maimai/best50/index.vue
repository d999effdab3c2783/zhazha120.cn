<script lang="ts" setup>
	import { isNotNil } from 'es-toolkit'
	import { get } from 'es-toolkit/compat'
	import { computed } from 'vue'

	import { $fetch } from '#build/fetch'
	import { useResponsive } from '~/composables/responsive'
	import { useGameStore } from '~/stores/game'
	import { additionalRatingMappings } from '~/stores/game/records/maimai'
	import type { DivingFishMaimaiBest50 } from '~/types/game'

	const gameStore = useGameStore()

	const { isMobile } = useResponsive()

	const response = await $fetch<DivingFishMaimaiBest50>(
		'https://www.diving-fish.com/api/maimaidxprober/query/player',
		{
			method: 'POST',
			body: {
				b50: true,
				username: gameStore.records.maimai.divinigFish.username
			}
		}
	)

	const additionalRatingString = computed(() => {
		return get(additionalRatingMappings, [response.additional_rating])
	})
</script>

<template>
	<n-flex
		size="small"
		vertical
	>
		<n-card size="small">
			<template #header>
				<n-flex
					:align="!isMobile ? 'center' : undefined"
					:vertical="isMobile"
					size="small"
				>
					<n-text>{{ response.nickname }}</n-text>

					<n-flex
						align="center"
						size="small"
					>
						<template v-if="isNotNil(additionalRatingString)">
							<n-tag type="info">
								{{ additionalRatingString }}
							</n-tag>
						</template>

						<template v-if="isNotNil(response.plate) && response.plate.length > 0">
							<n-tag type="success">
								{{ response.plate }}
							</n-tag>
						</template>
					</n-flex>
				</n-flex>
			</template>

			<template #header-extra>
				<n-text class="text-[1.2em]"> {{ response.rating }} rating </n-text>
			</template>
		</n-card>

		<n-divider>Best 35 (以往版本)</n-divider>

		<n-grid
			:cols="isMobile ? 1 : 5"
			class="!gap-2"
		>
			<template
				v-for="(chart, index) in response.charts.sd"
				:key="index"
			>
				<n-grid-item>
					<sections-game-records-maimai-best50-chart
						:index="index"
						:item="chart"
					/>
				</n-grid-item>
			</template>
		</n-grid>

		<n-divider>Best 15 (当前版本)</n-divider>

		<n-grid
			:cols="isMobile ? 1 : 5"
			class="!gap-2"
		>
			<template
				v-for="(chart, index) in response.charts.dx"
				:key="index"
			>
				<n-grid-item>
					<sections-game-records-maimai-best50-chart
						:index="index"
						:item="chart"
					/>
				</n-grid-item>
			</template>
		</n-grid>

		<n-card size="small">
			<n-flex
				:size="0"
				align="center"
				vertical
			>
				<n-text>数据来源</n-text>

				<custom-redirect
					#="{ aProps, redirect }"
					href="https://maimai.diving-fish.com"
				>
					<n-button
						tag="a"
						text
						type="primary"
						v-bind="aProps"
						@click.prevent="redirect"
					>
						水鱼查分器 (Diving Fish)
					</n-button>
				</custom-redirect>
			</n-flex>
		</n-card>
	</n-flex>
</template>

<style lang="scss" scoped>
	@use '~/styles/utils';
</style>