export type DownloadableAssets = Record<string, string>

export type AssetDownloadRequestItem = {
	readonly url: string
	readonly path: string
} & Partial<{
	readonly preview: string
}>