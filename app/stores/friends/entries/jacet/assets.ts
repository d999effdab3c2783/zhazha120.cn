import { qq } from '~/stores/friends/entries/jacet/meta'
import type { DownloadableAssets } from '~/types/assets'

export default {
	avatar: `https://thirdqq.qlogo.cn/g?b=qq&nk=${qq}&s=0`
} as const satisfies DownloadableAssets