<script lang="ts" setup>
	import { useLenis } from 'lenis/vue'
	import { onMounted, shallowRef } from 'vue'

	import event from '~/shared/event'

	const show = shallowRef(false)

	const handleDown = () => {
		event.emit('index:scroll', 2)
	}

	onMounted(() => {
		useLenis(lenis => {
			show.value = 0 >= lenis.actualScroll
		})
	})
</script>

<template>
	<transition
		appear
		mode="out-in"
		name="v-fade"
	>
		<template v-if="show">
			<n-element class="animate-bounce hover:cursor-pointer">
				<n-icon
					class="i-tabler:chevron-down size-12"
					@click="handleDown"
				/>
			</n-element>
		</template>
	</transition>
</template>

<style lang="scss">
	@use '~/styles/transitions/fade';
</style>