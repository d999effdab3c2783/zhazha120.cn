<template>
	<Transition name="v-fade">
		<slot />
	</Transition>
</template>

<style lang="scss">
	.v-fade {
		&-enter-active,
		&-leave-active {
			@apply transition-(property-[opacity] ease-in-out duration-500);
		}

		&-enter-from,
		&-leave-to {
			@apply opacity-0;
		}
	}
</style>