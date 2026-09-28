<script setup lang="ts">
	import { isNotNil } from 'es-toolkit'

	import { useDevStore } from '~/stores/dev'
	import type { DevCompetition } from '~/types/dev'

	const devStore = useDevStore()
</script>

<template>
	<n-card
		size="small"
		title="打过的比赛"
	>
		<n-scrollbar
			data-lenis-prevent
			x-scrollable
		>
			<n-timeline horizontal>
				<template
					v-for="({ name, group, award, href, date }, index) in devStore.competitions as DevCompetition[]"
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
							<n-text>{{ date.year ?? '?' }}/{{ date.month ?? '?' }}/{{ date.day ?? '?' }}</n-text>
						</template>
					</n-timeline-item>
				</template>
			</n-timeline>
		</n-scrollbar>
	</n-card>
</template>