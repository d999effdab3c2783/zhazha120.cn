import type { FooterVersion } from '~/types/footer'

import { abbreviatedSha, branch, sha } from '~build/git'

const versionRepository = 'https://github.com/d999effdab3c2783/zhazha120.cn'

const actualBranch = import.meta.env.VITE_FOOTER_VERSION_BRANCH_OVERRIDE ?? branch

export default {
	branch: actualBranch,
	branchHref: `${versionRepository}/commits/${actualBranch}`,
	hash: sha,
	hashHref: `${versionRepository}/commit/${sha}`,
	shortHash: abbreviatedSha
} as const satisfies FooterVersion