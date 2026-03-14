import { isNonNullish } from 'remeda'
import { type Ref, ref } from 'vue'

export const usePublicAssets = () => {
	const public_assets = import.meta.glob<{
		readonly default: string
	}>(`@/assets/public/**/*.*`, {
		query: 'url'
	})

	return new Proxy({} as Record<
		string,
		Ref<string | undefined>
	>, {
		get(target, prop: string) {
			if ( prop in target ) {
				return target[prop]
			}

			const url = ref<string>()

			const prefix = '@/assets/public/'
			const matched = Object.keys(public_assets)
				.find(path => {
					const asset_path = prop.split(prefix, 2)[1]
					return path.endsWith(asset_path)
				})

			if ( isNonNullish(matched) ) {
				public_assets[matched]()
					.then(module => {
						url.value = module.default
					})
			}

			target[prop] = url

			return url
		}
	})
}