<script lang="ts" setup>
	import type { ImageSupportMethod } from '@/data/support';

	defineProps<ImageSupportMethod>();
</script>

<template>
	<n-card :title="name" size="small">
		<n-flex justify="center">
			<n-image :src="src" />
		</n-flex>
	</n-card>
</template>