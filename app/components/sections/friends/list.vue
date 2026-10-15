<script setup lang="ts">
	import { computed } from 'vue'

	import { useArrayFilter } from '~/composables/filter'
	import { useResponsive } from '~/composables/responsive'
	import type { FriendEntry } from '~/types/friend'
	import { filterArray } from '~/utils/filter'

	const props = defineProps<{
		readonly items: FriendEntry[]
	}>()

	const { isMobile } = useResponsive()

	const filter = useArrayFilter(props.items)

	const filteredItems = computed(() => {
		return filterArray(filter.output.value, 'NOT private')
	})
</script>

<template>
	<n-flex
		size="small"
		vertical
	>
		<n-card
			size="small"
			title="过滤"
		>
			<custom-shared-filter-input :filter="filter" />
		</n-card>

		<n-divider />

		<n-grid
			class="!gap-2"
			:cols="isMobile ? 1 : 2"
		>
			<template
				v-for="item in filteredItems"
				:key="[item.slug, item.name].join(' - ')"
			>
				<n-grid-item :style="{ '--v-fade-leave-duration': 0 }">
					<sections-friends-item :item="item">
						<template #extra>
							<sections-friends-buttons :item="item" />
						</template>
					</sections-friends-item>
				</n-grid-item>
			</template>
		</n-grid>
	</n-flex>
</template>

<style lang="scss">
	@use '~/styles/transitions/fade';
</style>