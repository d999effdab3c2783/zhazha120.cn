<template>
	<Transition name="v-page">
		<slot />
	</Transition>
</template>

<style lang="scss">
	.v-page {
		&-enter-active {
			@apply transition-(duration-300);
		}

		&-leave-active {
			@apply transition-(duration-500);
		}

		&-enter-active,
		&-leave-active {
			@apply transition-(property-[opacity,filter] ease-in-out);
		}

		&-enter-from,
		&-leave-to {
			@apply opacity-0 blur;
		}
	}
</style>