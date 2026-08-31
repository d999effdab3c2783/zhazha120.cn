<script lang="ts" setup>
	import type { ImageSupportMethod } from '@/data/support';

	defineProps<ImageSupportMethod>();
</script>

<template>
	<n-card :title="name" size="small">
		<custom-naive-ui-position cover placement="center">
			<n-image :src="src" />
		</custom-naive-ui-position>
	</n-card>
</template>