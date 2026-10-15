<script lang="ts" setup>
	import { useResponsive } from '~/composables/responsive'
	import { useGameStore } from '~/stores/game'

	const gameStore = useGameStore()

	const { isMobile } = useResponsive()
</script>

<template>
	<n-card
		size="small"
		title="游戏"
	>
		<n-flex
			size="small"
			vertical
		>
			<n-divider class="!mt-0" />

			<n-flex
				align="center"
				size="large"
				:vertical="isMobile"
			>
				<n-statistic label="记录了">
					{{
						Object.keys(gameStore.records).filter(item => {
							return !['portals'].includes(item)
						}).length
					}}
					个
				</n-statistic>
			</n-flex>

			<n-flex
				align="center"
				class="mt-4"
				:justify="isMobile ? 'center' : undefined"
				size="small"
			>
				<template
					v-for="({ icon }, index) in gameStore.records.portals"
					:key="index"
				>
					<n-icon :class="['size-6', icon]" />
				</template>
			</n-flex>
		</n-flex>

		<template #footer>
			<n-flex
				class="n-button__patch"
				size="small"
				:vertical="isMobile"
			>
				<custom-redirect
					#="{ aProps, redirect }"
					href="/owner/game"
				>
					<n-button
						block
						tag="a"
						type="primary"
						v-bind="aProps"
						@click.prevent="redirect"
					>
						<template #icon>
							<n-icon class="i-tabler:device-gamepad" />
						</template>

						了解更多
					</n-button>
				</custom-redirect>
			</n-flex>
		</template>
	</n-card>
</template>