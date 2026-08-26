<script lang="ts" setup>
	const { isMobile } = useResponsive();
</script>

<template>
	<n-element class="min-h-screen relative">
		<n-element :class="['pt-10 container mx-auto', { 'px-2': isMobile }]">
			<sections-self-contacts />
		</n-element>
	</n-element>
</template>