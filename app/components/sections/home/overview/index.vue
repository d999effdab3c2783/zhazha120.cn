<script lang="ts" setup>
	import { clsx } from 'clsx'
	import { computed } from 'vue'

	import { useResponsive } from '~/composables/responsive'

	const { isMobile } = useResponsive()

	const containerClassNames = computed(() => {
		return clsx({
			'text-center w-full': isMobile.value,
			'min-w-1/2': !isMobile.value
		})
	})
</script>

<template>
	<n-element class="utils__center--grid p-2 min-h-screen">
		<n-flex
			:class="containerClassNames"
			justify="center"
			size="small"
			:vertical="isMobile"
		>
			<n-flex
				class="flex-1"
				size="small"
				vertical
			>
				<lazy-sections-home-overview-owner />
				<lazy-sections-home-overview-furry />
				<lazy-sections-home-overview-game />
			</n-flex>

			<n-flex
				class="flex-1"
				size="small"
				vertical
			>
				<lazy-sections-home-overview-dev />
				<lazy-sections-home-overview-friends />
				<lazy-sections-home-overview-tools />
			</n-flex>
		</n-flex>
	</n-element>
</template>

<style lang="scss" scoped>
	@use '~/styles/utils';
</style>