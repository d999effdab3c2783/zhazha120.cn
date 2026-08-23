<script lang="ts" setup>
	import BaseLayout from '@/components/layouts/base.vue';
	import VueBitsClickSpark from '@/components/vue-bits/click-spark.vue';
</script>

<template>
	<BaseLayout>
		<VueBitsClickSpark>
			<slot />
		</VueBitsClickSpark>
	</BaseLayout>
</template>