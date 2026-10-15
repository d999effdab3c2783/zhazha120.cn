<script lang="ts">
	import type { DivingFishMaimaiBest50 } from '~/types/game'

	export type ChartType = keyof DivingFishMaimaiBest50['charts']
</script>

<script lang="ts" setup>
	import { isNotNil } from 'es-toolkit'
	import { get } from 'es-toolkit/compat'
	import { computed, shallowRef } from 'vue'

	import { difficultyColorMappings } from '~/stores/owner/game/records/maimai'

	const props = defineProps<{
		readonly index: number
		readonly item: DivingFishMaimaiBest50['charts'][ChartType][number]
	}>()

	const currentCoverIndex = shallowRef(0)
	const currentCover = computed(() => {
		switch (currentCoverIndex.value) {
			case 0:
				let divingFishCover = 0

				if (props.item.song_id > 10000 && props.item.song_id <= 11000) {
					divingFishCover = -10000
				}

				const divingFishCoverId = String(props.item.song_id + divingFishCover).padStart(5, '0')

				return `https://www.diving-fish.com/covers/${divingFishCoverId}.png`
			case 1:
				const lxnsCoverId = props.item.song_id % 1e4

				return `https://assets.lxns.net/maimai/jacket/${lxnsCoverId}.png`
		}

		return undefined
	})

	const difficultyColor = computed(() => {
		return get(difficultyColorMappings, [props.item.level_label])
	})

	const handleCoverError = () => {
		if (isNotNil(currentCover.value)) {
			currentCoverIndex.value += 1
		}
	}
</script>

<template>
	<n-card
		class="h-full"
		size="small"
	>
		<template #cover>
			<n-image
				class="w-full aspect-square"
				:src="currentCover"
				@error="handleCoverError"
			/>
		</template>

		<n-flex
			class="h-full"
			size="large"
			vertical
		>
			<n-flex
				class="leading-tight"
				:size="0"
				vertical
			>
				<n-text
					class="text-[.8em]"
					:depth="3"
				>
					[{{ item.type }}] {{ item.song_id }}
				</n-text>

				<n-text>{{ item.title }}</n-text>

				<n-flex
					class="!gap-1"
					:size="0"
				>
					<n-text
						:style="{
							color: difficultyColor
						}"
					>
						{{ item.level_label }}
					</n-text>

					<n-flex
						align="baseline"
						:size="0"
					>
						<n-text
							:style="{
								color: difficultyColor
							}"
						>
							{{ item.level.split('+')[0] }}
						</n-text>

						<n-text
							class="text-[.8em]"
							:style="{
								color: difficultyColor
							}"
						>
							.{{ String(item.ds).split('.')[1] ?? '0' }}
						</n-text>

						<n-text
							:style="{
								color: difficultyColor
							}"
						>
							{{ item.level.endsWith('+') ? '+' : '' }}
						</n-text>
					</n-flex>
				</n-flex>

				<n-text>
					{{ item.rate.replaceAll(/p$/g, '+').toUpperCase() }} {{ item.achievements }} -> {{ item.ra }}
				</n-text>
			</n-flex>

			<n-flex
				align="center"
				class="mt-auto"
				justify="end"
				size="small"
			>
				<template v-if="isNotNil(item.fc) && item.fc.length > 0">
					<n-tag
						size="small"
						type="success"
					>
						{{ item.fc.replaceAll(/p$/g, '+').toUpperCase() }}
					</n-tag>
				</template>

				<template v-if="isNotNil(item.fs) && item.fs.length > 0">
					<n-tag
						size="small"
						type="info"
					>
						{{ item.fs.replaceAll(/p$/g, '+').toUpperCase() }}
					</n-tag>
				</template>
			</n-flex>
		</n-flex>
	</n-card>
</template>