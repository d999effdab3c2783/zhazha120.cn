import type { DialogApi, LoadingBarApi, MessageApi, ModalApi, NotificationApi } from 'naive-ui'
import { defineStore } from 'pinia'

export const useGlobalApiStore = defineStore('global_api', () => {
	return {} as {
		dialog: DialogApi
		message: MessageApi
		modal: ModalApi
		notification: NotificationApi
		loadingBar: LoadingBarApi
	}
})