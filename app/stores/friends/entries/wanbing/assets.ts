import type { DownloadableAssets } from '~/types/assets'

import { qq } from '~/stores/friends/entries/wanbing/meta'

export default {
	avatar: `https://thirdqq.qlogo.cn/g?b=qq&nk=${qq}&s=0`
} as const satisfies DownloadableAssets