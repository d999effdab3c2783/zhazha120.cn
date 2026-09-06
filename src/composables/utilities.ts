import type { Utility } from '@/data/utilities'

export type UseUtilitiesReturn = Promise<Utility[]>

export const useUtilities = async (): UseUtilitiesReturn => {
	return await Promise.all(
		Object.values(
			import.meta.glob<Utility>(['@/data/utilities/*', '!@/data/utilities/*.d.*'], {
				import: 'default'
			})
		).map(async (loader) => {
			return await loader()
		})
	)
}