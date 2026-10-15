export type FriendContact = {
	readonly icon: string
	readonly name: string
	readonly href: string
} & Partial<{
	readonly comment: string
}>

export type Friend = {
	readonly name: string
} & Partial<{
	readonly private: true

	readonly avatar: string
	readonly description: string

	readonly contacts: FriendContact[]

	readonly diving_fish_maimai_username: string
}>

export type FriendEntry = Friend &
	Partial<{
		readonly slug: string
	}>

export type FriendWebsiteTag = 'down' | 'missing'

export type FriendWebsite = {
	readonly logo: string
	readonly name: string
	readonly href: string
} & Partial<{
	readonly tags: FriendWebsiteTag[]
	readonly description: string
}>