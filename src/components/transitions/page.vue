<template>
	<Transition name="v-page">
		<slot />
	</Transition>
</template>

<style lang="scss">
	.v-page {
		&-enter-active,
		&-leave-active {
			@apply transition-(property-[opacity,filter] ease-in-out duration-500);
		}

		&-enter-from,
		&-leave-to {
			@apply opacity-0 blur;
		}
	}
</style>