<script lang="ts" setup>
	import WrapperLayout from '@/components/layouts/wrapper.vue';
</script>

<template>
	<WrapperLayout>
		<n-layout position="absolute">
			<n-layout-content position="absolute">
				<slot />
			</n-layout-content>
		</n-layout>
	</WrapperLayout>
</template>