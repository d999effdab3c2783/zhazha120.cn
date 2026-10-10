<script lang="ts" setup>
	import { clsx } from 'clsx'
	import { computed } from 'vue'

	import { useResponsive } from '~/composables/responsive'
	import { useGameStore } from '~/stores/game'

	const gameStore = useGameStore()

	const { isMobile } = useResponsive()

	const classNames = computed(() => {
		return clsx('border-none', {
			'h-320': isMobile.value,
			'h-80': !isMobile.value
		})
	})
</script>

<template>
	<iframe
		:class="classNames"
		:src="gameStore.records.tetrio.overlay"
	/>
</template>