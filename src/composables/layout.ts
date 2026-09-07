import { isNonNullish } from 'remeda'

export type UseLayoutsReturn = {
	readonly [name: string]: Component
}

export type UseLayoutsOptions = {
	readonly preCallback?: () => void | Promise<void>
	readonly postCallback?: () => void | Promise<void>
}

export const useLayouts = (options?: UseLayoutsOptions): UseLayoutsReturn => {
	return Object.fromEntries(
		Object.entries(
			import.meta.glob<Component>(['!@/components/layouts/index.vue', '@/components/layouts/*.vue'], {
				import: 'default'
			})
		).map(([path, loader]) => {
			return [
				(path.split('/').at(-1) ?? path).split('.')[0],
				defineAsyncComponent({
					loader: async () => {
						try {
							if (isNonNullish(options) && isNonNullish(options.preCallback)) {
								await options.preCallback()
							}

							return await loader()
						} finally {
							if (isNonNullish(options) && isNonNullish(options.postCallback)) {
								await options.postCallback()
							}
						}
					},
					suspensible: true
				})
			]
		})
	)
}