<script setup lang="ts">
	import { isNotNil } from 'es-toolkit'

	import { useResponsive } from '~/composables/responsive'
	import type { FurryCharacterButton } from '~/types/furry'

	defineProps<{
		readonly items: FurryCharacterButton[]
	}>()

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
				v-for="({ icon, name, href }, index) in items"
				:key="index"
			>
				<custom-redirect
					#="{ aProps, redirect }"
					:href="href"
				>
					<n-button
						:block="isMobile"
						tag="a"
						v-bind="aProps"
						@click.prevent="redirect"
					>
						<template
							v-if="isNotNil(icon)"
							#icon
						>
							<n-icon :class="icon" />
						</template>

						{{ name }}
					</n-button>
				</custom-redirect>
			</template>
		</n-flex>
	</n-card>
</template>

<style lang="scss">
	@use '~/styles/patches';
</style>