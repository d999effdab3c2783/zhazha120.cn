<script lang="ts" setup>
	const router = useRouter()
	const loadingBar = useLoadingBar()

	router.beforeEach(() => {
		loadingBar.start()
	})

	router.afterEach(() => {
		loadingBar.finish()
	})

	router.onError(() => {
		loadingBar.error()
	})
</script>

<template />