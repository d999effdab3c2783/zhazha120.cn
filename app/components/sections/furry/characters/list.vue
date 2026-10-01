<script setup lang="ts">
	import { isNil } from 'es-toolkit'
	import { computed } from 'vue'

	import { useArrayFilter } from '~/composables/filter'
	import type { FurryCharacterEntry } from '~/types/furry'

	const props = defineProps<{
		readonly items: FurryCharacterEntry[]
	}>()

	const filter = useArrayFilter(props.items)

	const filteredItems = computed(() => {
		return filter.output.value.filter(item => {
			return isNil(item.private) || !item.private
		})
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

		<transition-group
			appear
			name="v-fade"
		>
			<template
				v-for="item in filteredItems"
				:key="[item.slug, item.name].join(' - ')"
			>
				<n-element :style="{ '--v-fade-leave-duration': 0 }">
					<sections-furry-characters-item :item="item">
						<template #extra>
							<sections-furry-characters-buttons :item="item" />
						</template>
					</sections-furry-characters-item>
				</n-element>
			</template>
		</transition-group>
	</n-flex>
</template>

<style lang="scss">
	@use '~/styles/transitions/fade';
</style>