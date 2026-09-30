<script setup lang="ts">
	import { isNil, isNotNil } from 'es-toolkit'
	import { computed } from 'vue'

	import { useArrayFilter } from '~/composables/filter'
	import { useFurryStore } from '~/stores/furry'

	const furryStore = useFurryStore()

	const filter = useArrayFilter(furryStore.characters)

	const characters = computed(() => {
		return filter.output.value.filter(item => {
			return isNil(item.private) || !item.private
		})
	})

	const generateDetailLink = (slug: string) => {
		return `/furry/characters/${slug}`
	}

	await furryStore.loadCharacters()
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
				v-for="item in characters"
				:key="[item.slug, item.name].join(' - ')"
			>
				<n-element :style="{ '--v-fade-leave-duration': 0 }">
					<sections-furry-characters-item :item="item">
						<template
							v-if="isNotNil(item.slug)"
							#extra
						>
							<n-element class="mt-auto self-end">
								<custom-redirect
									#="{ aProps, redirect }"
									:href="generateDetailLink(item.slug)"
								>
									<n-button
										v-bind="aProps"
										tag="a"
										type="primary"
										@click.prevent="redirect"
									>
										<template #icon>
											<n-icon class="i-ant-design:profile-outlined" />
										</template>

										了解更多
									</n-button>
								</custom-redirect>
							</n-element>
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