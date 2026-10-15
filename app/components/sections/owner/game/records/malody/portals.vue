<script lang="ts" setup>
	import { useResponsive } from '~/composables/responsive'
	import { useGameStore } from '~/stores/game'
	import type { GameMalodyRecordPortal } from '~/types/game'

	const gameStore = useGameStore()

	const { isMobile } = useResponsive()
</script>

<template>
	<n-card
		size="small"
		title="探索"
	>
		<n-flex
			class="n-button__patch"
			size="small"
			:vertical="isMobile"
		>
			<template
				v-for="({ icon, name, href }, index) in gameStore.records.malody.portals as GameMalodyRecordPortal[]"
				:key="index"
			>
				<custom-redirect :href="href">
					<template #default="{ aProps, redirect }">
						<n-button
							:block="isMobile"
							tag="a"
							v-bind="aProps"
							@click.prevent="redirect"
						>
							<template #icon>
								<n-icon :class="icon" />
							</template>

							{{ name }}
						</n-button>
					</template>
				</custom-redirect>
			</template>
		</n-flex>
	</n-card>
</template>

<style lang="scss">
	@use '~/styles/patches';
</style>