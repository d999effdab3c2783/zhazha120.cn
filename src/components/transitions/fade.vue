<template>
	<Transition name="v-fade">
		<slot />
	</Transition>
</template>

<style lang="scss">
	.v-fade {
		&-enter-active {
			@apply transition-(duration-300);
		}

		&-leave-active {
			@apply transition-(duration-500);
		}

		&-enter-active,
		&-leave-active {
			@apply transition-(property-[opacity] ease-in-out);
		}

		&-enter-from,
		&-leave-to {
			@apply opacity-0;
		}
	}
</style>