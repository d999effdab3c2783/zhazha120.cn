import { isNonNullish } from 'remeda'

export const useLayoutStore = defineStore('layout', () => {
	const route = useRoute()
	const loadingStore = useLoadingStore()

	const layouts = useLayouts({
		preCallback: () => {
			loadingStore.show()
		},
		postCallback: () => {
			loadingStore.hide()
		}
	})

	const currentName = computed(() => {
		if (isNonNullish(route.meta.layout) && isNonNullish(layouts[route.meta.layout])) {
			return route.meta.layout
		}

		return 'default'
	})

	const current = computed(() => {
		return layouts[currentName.value]
	})

	return {
		currentName,
		current
	}
})