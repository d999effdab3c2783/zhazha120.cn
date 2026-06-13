<script lang="ts" setup>
	const mitt = useMitt();
	const windowScroll = useWindowScroll();

	console.log(windowScroll);

	const handleDown = () => {
		mitt.instance.emit("pages.home.1.down-indicator.clicked");
	};
</script>

<template>
	<TransitionsFade>
		<template v-if="windowScroll.y.value <= 0">
			<n-icon :size="36" class="i-tabler:chevron-down animate-bounce hover:cursor-pointer" @click="handleDown" />
		</template>
	</TransitionsFade>
</template>