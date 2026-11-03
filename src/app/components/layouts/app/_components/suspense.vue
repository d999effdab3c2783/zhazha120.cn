<script setup lang="ts">
	import Loading from '@/app/components/layouts/app/_components/loading.vue'
</script>

<template>
	<suspense suspensible>
		<slot />

		<template #fallback>
			<loading />
		</template>
	</suspense>
</template>