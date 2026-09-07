<script lang="ts" setup>
	const apiStore = useApiStore()

	apiStore.dialog = useDialog()
	apiStore.loadingBar = useLoadingBar()
	apiStore.modal = useModal()
	apiStore.message = useMessage()
	apiStore.notification = useNotification()
</script>

<template />