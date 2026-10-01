import { flattenObject } from 'es-toolkit'
import { defineStore } from 'pinia'
import { shallowRef } from 'vue'

import type { AssetDownloadRequestItem, DownloadableAssets } from '~/types/assets'

export const useAssetsStore = defineStore('assets', () => {
	const registry = shallowRef<AssetDownloadRequestItem[]>([])

	const load = async () => {
		registry.value = (
			await Promise.all(
				Object.entries(
					import.meta.glob<DownloadableAssets>(
						[
							'~/stores/footer/assets.*',
							'~/stores/dev/organizations/*/assets.*',
							'~/stores/furry/events/*/*/assets.*'
						],
						{
							import: 'default'
						}
					)
				).flatMap(async ([path, importer]) => {
					const assets = await importer()
					const flattenAssets = flattenObject(assets, {
						delimiter: '/'
					})

					return await Promise.all(
						Object.entries(flattenAssets).map(async ([flattenPath, flattenAsset]) => {
							const fullPath = path.split('.')[0] + '/' + flattenPath + '.bin'

							return {
								url: flattenAsset,
								path: 'app' + fullPath,

								preview: new URL('..' + fullPath, import.meta.url).href
							} satisfies AssetDownloadRequestItem
						})
					)
				})
			)
		).flat()
	}

	return {
		registry,

		load
	}
})