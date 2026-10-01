<script setup lang="ts">
	import { clsx } from 'clsx'
	import { isNotNil } from 'es-toolkit'
	import { computed, shallowRef } from 'vue'

	import { useArrayFilter } from '~/composables/filter'
	import { useResponsive } from '~/composables/responsive'
	import { useDevStore } from '~/stores/dev'
	import type { DevCompetition } from '~/types/dev'

	const showFilter = shallowRef(false)

	const devStore = useDevStore()

	const { isMobile } = useResponsive()

	const filter = useArrayFilter(devStore.competitions)

	const timelineClassNames = computed(() => {
		return clsx({
			'w-max': !isMobile
		})
	})

	const competitions = computed(() => {
		if (!showFilter.value) {
			return devStore.competitions
		}

		return filter.output.value
	})
</script>

<template>
	<n-card
		size="small"
		title="打过的比赛"
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

		<n-flex
			size="small"
			vertical
		>
			<n-divider class="!mt-0" />

			<n-collapse-transition :show="showFilter">
				<custom-shared-filter-input :filter="filter" />
			</n-collapse-transition>

			<n-scrollbar
				class="overscroll-contain"
				data-lenis-prevent-horizontal
				x-scrollable
			>
				<n-timeline
					:class="timelineClassNames"
					:horizontal="!isMobile"
				>
					<template
						v-for="({ name, group, award, href, date }, index) in competitions as DevCompetition[]"
						:key="index"
					>
						<n-timeline-item type="success">
							<template #header>
								<n-flex
									:size="0"
									vertical
								>
									<n-text>{{ name }}</n-text>

									<n-text
										class="text-[.8em]"
										:depth="3"
									>
										{{ group }}
									</n-text>
								</n-flex>
							</template>

							<template #default>
								<template v-if="isNotNil(href)">
									<custom-redirect
										#="{ aProps, redirect }"
										:href="href"
									>
										<n-button
											class="text-wrap"
											:style="{
												'--n-icon-margin': '0 .1em 0 0'
											}"
											tag="a"
											text
											type="primary"
											v-bind="aProps"
											@click.prevent="redirect"
										>
											<template #icon>
												<n-icon class="i-ant-design:link-outlined" />
											</template>

											{{ award }}
										</n-button>
									</custom-redirect>
								</template>

								<template v-else>
									<n-text type="info">{{ award }}</n-text>
								</template>
							</template>

							<template
								v-if="isNotNil(date)"
								#footer
							>
								<n-text> {{ date.year ?? '?' }}/{{ date.month ?? '?' }}/{{ date.day ?? '?' }} </n-text>
							</template>
						</n-timeline-item>
					</template>
				</n-timeline>
			</n-scrollbar>
		</n-flex>
	</n-card>
</template>