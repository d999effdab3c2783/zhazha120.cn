import type { UseTimeoutFnReturn } from '@vueuse/core'

import { isNonNullish } from 'remeda'

export const useLoadingStore = defineStore('loading', () => {
	const counter = shallowRef(0)
	const status = shallowRef(false)

	let first = true
	let showTimeoutFn: UseTimeoutFnReturn<() => void> | undefined
	let hideTimeoutFn: UseTimeoutFnReturn<() => void> | undefined

	const resetTimeout = () => {
		if (isNonNullish(showTimeoutFn) && showTimeoutFn.isPending.value) {
			showTimeoutFn.stop()
		}

		if (isNonNullish(hideTimeoutFn) && hideTimeoutFn.isPending.value) {
			hideTimeoutFn.stop()
		}
	}

	const show = () => {
		counter.value++

		resetTimeout()

		if (0 < counter.value && !status.value) {
			showTimeoutFn = useTimeoutFn(
				() => {
					status.value = true
				},
				first ? 0 : 200
			)
		}
	}

	const hide = () => {
		if (0 >= counter.value) {
			return
		}

		counter.value--

		if (0 >= counter.value) {
			resetTimeout()

			hideTimeoutFn = useTimeoutFn(() => {
				status.value = false

				if (first) {
					first = false
				}
			}, 100)
		}
	}

	return {
		show,
		hide,

		status: readonly(status)
	}
})