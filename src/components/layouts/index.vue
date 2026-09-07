<script lang="ts" setup>
	const layoutStore = useLayoutStore()
</script>

<template>
	<Component :is="layoutStore.current" :key="layoutStore.currentName">
		<slot />
	</Component>
</template>