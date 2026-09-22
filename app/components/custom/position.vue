<script lang="ts" setup>
	import { clsx } from 'clsx'
	import { computed } from 'vue'

	const props = defineProps<
		{
			readonly placement:
				| 'top-left'
				| 'top-center'
				| 'top-right'
				| 'center-left'
				| 'center'
				| 'center-right'
				| 'bottom-left'
				| 'bottom-center'
				| 'bottom-right'
		} & Partial<{
			readonly class: string
			readonly cover: true
		}>
	>()

	defineOptions({
		inheritAttrs: false
	})

	const classNames = computed(() => {
		return clsx(
			{
				'size-full': props.cover
			},
			props.class
		)
	})

	const justify = computed(() => {
		switch (props.placement) {
			case 'top-left':
			case 'center-left':
			case 'bottom-left':
				return 'start'
			case 'top-center':
			case 'center':
			case 'bottom-center':
				return 'center'
			case 'top-right':
			case 'center-right':
			case 'bottom-right':
				return 'end'
		}

		return 'scratch'
	})

	const align = computed(() => {
		switch (props.placement) {
			case 'top-left':
			case 'top-center':
			case 'top-right':
				return 'start'
			case 'center-left':
			case 'center':
			case 'center-right':
				return 'center'
			case 'bottom-left':
			case 'bottom-center':
			case 'bottom-right':
				return 'end'
		}

		return 'scratch'
	})
</script>

<template>
	<n-flex
		:align="align"
		:class="classNames"
		:justify="justify"
		:size="0"
	>
		<slot />
	</n-flex>
</template>