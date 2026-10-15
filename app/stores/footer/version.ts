import { sha, abbreviatedSha, branch } from '~build/git'

import type { FooterVersion } from '~/types/footer'

const versionRepository = 'https://github.com/d999effdab3c2783/zhazha120.cn'

const actualBranch = import.meta.env.FOOTER_VERSION_BRANCH ?? branch

export default {
	branch: actualBranch,
	branchHref: `${versionRepository}/commits/${actualBranch}`,
	shortHash: abbreviatedSha,
	hash: sha,
	hashHref: `${versionRepository}/commit/${sha}`
} as const satisfies FooterVersion