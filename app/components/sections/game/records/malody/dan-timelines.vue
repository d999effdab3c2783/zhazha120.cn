<script lang="ts" setup>
	import { useResponsive } from '~/composables/responsive'
	import { useGameStore } from '~/stores/game'

	const gameStore = useGameStore()

	const { isMobile } = useResponsive()

	const guessType = (name: string) => {
		if (name.includes('后光')) {
			return 'error'
		}

		if (name.includes('Extra')) {
			return 'warning'
		}

		return 'success'
	}
</script>

<template>
	<n-card
		size="small"
		title="段位时间线"
	>
		<n-scrollbar
			class="overscroll-contain"
			data-lenis-prevent-horizontal
			x-scrollable
		>
			<n-timeline :horizontal="!isMobile">
				<template
					v-for="({ name, completed_at, video_url }, index) in gameStore.records.malody.danTimelines"
					:key="index"
				>
					<n-timeline-item
						:time="completed_at.toLocaleDateString()"
						:type="guessType(name)"
					>
						<custom-redirect
							#="{ aProps, redirect }"
							:href="video_url"
						>
							<n-button
								tag="a"
								text
								type="primary"
								v-bind="aProps"
								@click.prevent="redirect"
							>
								{{ name }}
							</n-button>
						</custom-redirect>
					</n-timeline-item>
				</template>
			</n-timeline>
		</n-scrollbar>
	</n-card>
</template>