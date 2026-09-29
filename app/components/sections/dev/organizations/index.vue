<script setup lang="ts">
	import { isEqual } from 'es-toolkit'
	import { computed, shallowRef, toValue } from 'vue'

	import { useArrayFilter } from '~/composables/filter'
	import { useDevStore } from '~/stores/dev'
	import type { ExternalDevOrganization, GithubDevOrganization } from '~/types/dev'

	const showFilter = shallowRef(false)

	const devStore = useDevStore()

	const filter = useArrayFilter(devStore.organizations)

	const organizations = computed(() => {
		if (!showFilter.value) {
			return toValue(filter.input)
		}

		return filter.output.value
	})

	await devStore.loadOrganizations()
</script>

<template>
	<n-card
		size="small"
		title="加入的组织"
	>
		<template #header-extra>
			<n-button
				text
				type="primary"
				@click="showFilter = !showFilter"
			>
				过滤
			</n-button>
		</template>

		<template #default>
			<n-flex
				size="small"
				vertical
			>
				<n-collapse-transition :show="showFilter">
					<custom-shared-filter-input :filter="filter" />
				</n-collapse-transition>

				<n-flex
					align="center"
					size="small"
				>
					<transition-group
						appear
						name="v-fade"
					>
						<template
							v-for="item in organizations"
							:key="item.name"
						>
							<n-element :style="{ '--v-fade-leave-duration': 0 }">
								<template v-if="isEqual(item.type, 'github')">
									<sections-dev-organizations-github :item="item as GithubDevOrganization" />
								</template>

								<template v-if="isEqual(item.type, 'external')">
									<sections-dev-organizations-external :item="item as ExternalDevOrganization" />
								</template>
							</n-element>
						</template>
					</transition-group>
				</n-flex>
			</n-flex>
		</template>
	</n-card>
</template>

<style lang="scss">
	@use '~/styles/transitions/fade';
</style>