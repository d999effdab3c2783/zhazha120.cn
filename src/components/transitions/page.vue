<template>
	<Transition :data-path="$route.fullPath" name="v-page">
		<slot />
	</Transition>
</template>

<style lang="scss">
	.v-page {
		&-enter-active[data-path='/'] {
			@apply transition-delay-300;
		}

		&-enter-active,
		&-leave-active {
			@apply transition-(property-[opacity_blur] ease-in-out duration-500);
		}

		&-enter-from,
		&-leave-to {
			@apply opacity-0 blur;
		}
	}
</style>