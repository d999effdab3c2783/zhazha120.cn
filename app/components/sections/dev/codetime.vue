<script setup lang="ts">
	import { clsx } from 'clsx'
	import { computed } from 'vue'

	import { useResponsive } from '~/composables/responsive'
	import { useDevStore } from '~/stores/dev'

	const { isMobile } = useResponsive()
	const devStore = useDevStore()

	const topTabsClassNames = computed(() => {
		return clsx('flex-1', {
			'min-w-120': !isMobile.value
		})
	})
</script>

<template>
	<n-card
		size="small"
		title="态势"
	>
		<n-flex
			align="center"
			size="small"
			vertical
		>
			<n-image
				class="[&>img]:w-full"
				:src="devStore.codetime.widgets.calendar"
			/>

			<n-flex
				align="center"
				size="small"
			>
				<n-image
					class="[&>img]:w-full"
					:src="devStore.codetime.widgets.trend"
				/>

				<n-tabs
					animated
					:class="topTabsClassNames"
					type="segment"
				>
					<n-tab-pane name="按语言">
						<n-image
							class="[&>img]:w-full"
							:src="devStore.codetime.widgets.top.languages"
						/>
					</n-tab-pane>

					<n-tab-pane name="按项目">
						<n-image
							class="[&>img]:w-full"
							:src="devStore.codetime.widgets.top.projects"
						/>
					</n-tab-pane>
				</n-tabs>
			</n-flex>

			<n-flex
				align="center"
				justify="center"
				size="small"
			>
				<n-image
					class="[&>img]:w-full"
					:src="devStore.codetime.widgets.status"
				/>
				<n-image
					class="[&>img]:w-full"
					:src="devStore.codetime.widgets.usage"
				/>
			</n-flex>

			<n-flex
				align="center"
				justify="center"
				size="small"
			>
				<n-image
					class="[&>img]:w-full"
					:src="devStore.codetime.widgets.badge.codingTime"
				/>
				<n-image
					class="[&>img]:w-full"
					:src="devStore.codetime.widgets.badge.tokens"
				/>
			</n-flex>

			<n-flex
				align="center"
				class="mt-4"
				:size="0"
				vertical
			>
				<n-text
					class="text-[.8em]"
					:depth="3"
				>
					仅供参考
				</n-text>

				<custom-redirect
					#="{ aProps, redirect }"
					:href="devStore.codetime.href"
				>
					<n-button
						tag="a"
						text
						type="primary"
						v-bind="aProps"
						@click.prevent="redirect"
					>
						{{ devStore.codetime.domain }}
					</n-button>
				</custom-redirect>
			</n-flex>
		</n-flex>
	</n-card>
</template>