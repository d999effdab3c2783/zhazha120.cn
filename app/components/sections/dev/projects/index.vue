<script setup lang="ts">
	import { isEqual } from 'es-toolkit'
	import { computed, shallowRef, toValue } from 'vue'

	import { useArrayFilter } from '~/composables/filter'
	import { useResponsive } from '~/composables/responsive'
	import { useDevStore } from '~/stores/dev'
	import type { ExternalDevProject, GithubDevProject } from '~/types/dev'

	const showFilter = shallowRef(false)

	const devStore = useDevStore()

	const { isMobile } = useResponsive()

	const filter = useArrayFilter(devStore.projects)

	const projects = computed(() => {
		if (!showFilter.value) {
			return toValue(filter.input)
		}

		return filter.output.value
	})
</script>

<template>
	<n-card
		size="small"
		title="做过的项目"
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
					:align="!isMobile ? 'center' : undefined"
					size="small"
					:vertical="isMobile"
				>
					<transition-group
						appear
						name="v-fade"
					>
						<template
							v-for="item in projects"
							:key="item.name"
						>
							<n-element :style="{ '--v-fade-leave-duration': 0 }">
								<template v-if="isEqual(item.type, 'github')">
									<sections-dev-projects-github :item="item as GithubDevProject" />
								</template>

								<template v-if="isEqual(item.type, 'external')">
									<sections-dev-projects-external :item="item as ExternalDevProject" />
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