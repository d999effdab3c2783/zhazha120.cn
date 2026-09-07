import type { DialogApi, LoadingBarApi, MessageApi, ModalApi, NotificationApi } from 'naive-ui'

export const useApiStore = defineStore('api', () => {
	const dialog = shallowRef<DialogApi>()
	const loadingBar = shallowRef<LoadingBarApi>()
	const modal = shallowRef<ModalApi>()
	const message = shallowRef<MessageApi>()
	const notification = shallowRef<NotificationApi>()

	return {
		dialog,
		loadingBar,
		modal,
		message,
		notification
	}
})