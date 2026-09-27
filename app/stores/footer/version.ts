import { sha, abbreviatedSha, branch } from '~build/git'

import type { FooterVersion } from '~/types/footer'

const versionRepository = 'https://github.com/d999effdab3c2783/zhazha120.cn'

export default {
	branch: branch,
	branchHref: `${versionRepository}/commits/${branch}`,
	shortHash: abbreviatedSha,
	hash: sha,
	hashHref: `${versionRepository}/commit/${sha}`
} as const satisfies FooterVersion