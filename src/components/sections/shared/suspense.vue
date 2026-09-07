<script lang="ts" setup>
	import { Suspense as VueSuspense } from 'vue'

	const loadingStore = useLoadingStore()

	const handlePending = () => {
		loadingStore.show()
	}

	const handleResolve = () => {
		loadingStore.hide()
	}
</script>

<template>
	<vue-suspense @pending="handlePending" @resolve="handleResolve">
		<slot />
	</vue-suspense>
</template>