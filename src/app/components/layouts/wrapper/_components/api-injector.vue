<script setup lang="ts">
	import { attempt } from 'es-toolkit'
	import { useDialog, useLoadingBar, useMessage, useModal, useNotification } from 'naive-ui'

	import pinia from '@/app/shared/pinia'
	import { useApiStore } from '@/app/stores/api'

	attempt(() => {
		useApiStore(pinia).$patch({
			dialog: useDialog(),
			loadingBar: useLoadingBar(),
			message: useMessage(),
			modal: useModal(),
			notification: useNotification()
		})
	})
</script>

<template>
	<slot />
</template>