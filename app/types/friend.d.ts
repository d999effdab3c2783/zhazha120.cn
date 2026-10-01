export type FriendWebsiteTag = 'down' | 'missing'

export type FriendWebsite = {
	readonly logo: string
	readonly name: string
	readonly href: string
} & Partial<{
	readonly tags: FriendWebsiteTag[]
	readonly description: string
}>