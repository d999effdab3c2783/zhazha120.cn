<script setup lang="ts">
	import { useDialog, useLoadingBar, useMessage, useModal, useNotification } from 'naive-ui'

	import { useApiStore } from '~/stores/api'

	const apiStore = useApiStore()

	apiStore.dialog = useDialog()
	apiStore.loadingBar = useLoadingBar()
	apiStore.modal = useModal()
	apiStore.message = useMessage()
	apiStore.notification = useNotification()
</script>

<template />