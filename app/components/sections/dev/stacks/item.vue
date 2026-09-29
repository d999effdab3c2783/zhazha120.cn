<script setup lang="ts">
	import { computed, toValue } from 'vue'
	import { shallowRef } from 'vue'

	import { useArrayFilter } from '~/composables/filter'
	import type { DevStack } from '~/types/dev'

	const props = defineProps<{
		readonly item: DevStack
	}>()

	const showItemsFilter = shallowRef(false)

	const itemsFilter = useArrayFilter(props.item.items)

	const items = computed(() => {
		if (!showItemsFilter.value) {
			return toValue(itemsFilter.input)
		}

		return itemsFilter.output.value
	})
</script>

<template>
	<n-card
		size="small"
		:title="item.name"
	>
		<template #header-extra>
			<n-button
				text
				type="primary"
				@click="showItemsFilter = !showItemsFilter"
			>
				过滤
			</n-button>
		</template>

		<template #default>
			<n-flex size="small">
				<n-collapse-transition :show="showItemsFilter">
					<custom-shared-filter-input :filter="itemsFilter" />
				</n-collapse-transition>

				<transition-group
					appear
					name="v-fade"
				>
					<template
						v-for="{ icon, name, href } in items"
						:key="name"
					>
						<n-element :style="{ '--v-fade-leave-duration': 0 }">
							<custom-redirect
								#="{ aProps, redirect }"
								:href="href"
							>
								<n-button
									secondary
									tag="a"
									v-bind="aProps"
									@click.prevent="redirect"
								>
									<template #icon>
										<n-icon :class="icon" />
									</template>

									{{ name }}
								</n-button>
							</custom-redirect>
						</n-element>
					</template>
				</transition-group>
			</n-flex>
		</template>
	</n-card>
</template>

<style lang="scss">
	@use '~/styles/transitions/fade';
</style>