export const useLoadingStore = defineStore('loading', () => {
	const counter = shallowRef(0)

	const show = () => {
		counter.value++
	}

	const hide = () => {
		if (0 >= counter.value) {
			return
		}

		counter.value--
	}

	const status = computed(() => {
		return 0 < counter.value
	})

	return {
		show,
		hide,

		status
	}
})