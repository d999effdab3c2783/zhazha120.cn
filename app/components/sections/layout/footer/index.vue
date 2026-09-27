<script setup lang="ts">
	import { clsx } from 'clsx'
	import { computed } from 'vue'

	import { useResponsive } from '~/composables/responsive'

	const { isMobile } = useResponsive()

	const containerClassNames = computed(() => {
		return clsx(
			'px-2 py-4 grid grid-(place-items-center)',
			{
				'gap-y-4 grid-cols-1': isMobile.value
			},
			{
				'grid-cols-5 min-w-max': !isMobile.value
			}
		)
	})
</script>

<template>
	<n-scrollbar
		data-lenis-prevent
		x-scrollable
	>
		<n-element :class="containerClassNames">
			<sections-layout-footer-theme-switcher />
			<sections-layout-footer-copyright />
			<sections-layout-footer-filing />
			<sections-layout-footer-version />
			<sections-layout-footer-utility />
		</n-element>
	</n-scrollbar>
</template>