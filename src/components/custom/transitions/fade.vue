<script lang="ts" setup>
defineOptions({
	name: 'CustomTransitionsFade'
})
</script>

<template>
	<transition name="v-fade">
		<slot/>
	</transition>
</template>

<style lang="scss">
@use '@/styles/transitions/fade';
</style>