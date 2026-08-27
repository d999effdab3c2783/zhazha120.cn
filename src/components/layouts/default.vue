<script lang="ts" setup>
	import AppLayout from '@/components/layouts/app.vue';
	import VueBitsClickSpark from '@/components/vue-bits/click-spark.vue';
</script>

<template>
	<AppLayout>
		<VueBitsClickSpark>
			<slot />
		</VueBitsClickSpark>
	</AppLayout>
</template>