import { isEmptyish } from 'remeda'
import { useRouter } from 'vue-router'

export const useRouterNavigation = () => {
	const router = useRouter()

	return {
		async back() {
			if ( isEmptyish(history) ) {
				await router.push({
					name: '首页'
				})

				return
			}

			router.back()
		}
	} as const
}