import type { DialogApi, LoadingBarApi, MessageApi, ModalApi, NotificationApi } from 'naive-ui'

import { defineStore } from 'pinia'
import { shallowRef } from 'vue'

export const useApiStore = defineStore('api', () => {
	const dialog = shallowRef<DialogApi>()
	const loadingBar = shallowRef<LoadingBarApi>()
	const message = shallowRef<MessageApi>()
	const modal = shallowRef<ModalApi>()
	const notification = shallowRef<NotificationApi>()

	return {
		dialog,
		loadingBar,
		message,
		modal,
		notification
	}
})