<script setup lang="ts">
	import { isNotNil } from 'es-toolkit'

	import { useResponsive } from '~/composables/responsive'
	import type { OwnerBirthdayRecordButton } from '~/types/owner'

	defineProps<{
		readonly items: OwnerBirthdayRecordButton[]
	}>()

	const { isMobile } = useResponsive()
</script>

<template>
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
</template>

<style lang="scss">
	@use '~/styles/patches';
</style>