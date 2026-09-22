<script lang="ts" setup>
	import { useLenis } from 'lenis/vue'
	import { shallowRef } from 'vue'

	import event from '~/shared/event'

	const show = shallowRef(false)

	useLenis(lenis => {
		show.value = 0 >= lenis.actualScroll
	})

	const handleDown = () => {
		event.emit('pages.home:scroll', 'overview')
	}
</script>

<template>
	<transition
		appear
		mode="out-in"
		name="v-fade"
	>
		<template v-if="show">
			<n-icon
				class="i-tabler:chevron-down size-12 animate-bounce hover:cursor-pointer"
				@click="handleDown"
			/>
		</template>
	</transition>
</template>

<style lang="scss">
	@use '~/styles/transitions/fade';
</style>