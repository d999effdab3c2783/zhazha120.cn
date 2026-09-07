<script lang="ts" setup>
	const router = useRouter()
	const loadingBar = useLoadingBar()
	const loadingStore = useLoadingStore()

	router.beforeEach(() => {
		loadingBar.start()
		loadingStore.show()
	})

	router.afterEach(() => {
		loadingBar.finish()
		loadingStore.hide()
	})

	router.onError(() => {
		loadingBar.error()
		loadingStore.hide()
	})
</script>

<template />