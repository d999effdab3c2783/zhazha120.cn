import { useRouter } from 'vue-router'

export const useRouterNavigation = () => {
	const router = useRouter()

	return {
		async back() {
			if ( history.length <= 1 ) {
				await router.push({
					path: '/'
				})

				return
			}

			router.back()
		}
	} as const
}