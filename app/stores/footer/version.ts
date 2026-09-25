import { useBuildInfo } from '#imports'
import type { FooterVersion } from '~/types/footer'

const buildInfo = useBuildInfo()
const versionRepository = 'https://github.com/d999effdab3c2783/zhazha120.cn'

export default {
	branch: buildInfo.branch,
	branchHref: `${versionRepository}/commits/${buildInfo.branch}`,
	shortHash: buildInfo.shortCommit,
	hash: buildInfo.commit,
	hashHref: `${versionRepository}/commit/${buildInfo.commit}`
} as const satisfies FooterVersion