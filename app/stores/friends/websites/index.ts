import type { FriendWebsiteTag } from '~/types/friend'

export const tags = {
	down: '无法访问',
	missing: '站长失联'
} as const satisfies Record<FriendWebsiteTag, string>