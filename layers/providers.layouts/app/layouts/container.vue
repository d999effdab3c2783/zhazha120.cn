<script setup lang="ts">
	const { isMobile } = useResponsive();
</script>

<template>
	<NuxtLayout name="default">
		<n-element :class="['container mx-auto', { 'p-2': isMobile, 'py-10': !isMobile }]">
			<slot />
		</n-element>
	</NuxtLayout>
</template>