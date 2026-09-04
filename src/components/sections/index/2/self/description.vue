<script lang="ts" setup>
	import { isNullish } from 'remeda'

	const container = useTemplateRef('container')

	const show = ref(false)

	const handleClick = () => {
		show.value = true
	}

	const handlePointerLeave = () => {
		show.value = false
	}

	useEventListener(document, 'click', (event: MouseEvent) => {
		if (isNullish(container.value)) {
			return
		}

		if (!container.value.$el.contains(event.target)) {
			show.value = false
		}
	})
</script>

<template>
	<n-element
		ref="container"
		:class="[
			'transition-(property-[filter] duration-500 ease-in-out)',
			{
				'blur-6 hover:cursor-pointer': !show
			}
		]"
		@click="handleClick"
		@pointerleave="handlePointerLeave"
	>
		<sections-self-description />
	</n-element>
</template>