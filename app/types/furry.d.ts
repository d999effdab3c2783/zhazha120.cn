export type FurryPortal = {
	readonly icon: string
	readonly name: string
	readonly href: string
}

export type FurryCharacter = {
	readonly illustration: string
	readonly name: string

	readonly species: Array<{
		readonly name: string
		readonly percent: number
	}>
} & Partial<{
	readonly private: true
	readonly aliases: string[]

	readonly species_alias: string
	readonly description: string

	readonly owner: {
		readonly name: string
	} & Partial<{
		readonly href: string
	}>

	readonly renderExtra: () => VNode
}>

export type FurryCharacterEntry = FurryCharacter &
	Partial<{
		readonly slug: string
	}>

export type FurryEvent = {
	readonly banner: string

	readonly name: string

	readonly startDate: string
	readonly endDate: string
} & Partial<{
	readonly theme: string
	readonly href: string

	readonly charactersQuery: string

	readonly renderExtra: () => VNode
}>

export type FurryEventEntry = FurryEvent &
	Partial<{
		readonly year: number
		readonly slug: string
	}>

export type FurryInformation = {
	readonly name: string
	readonly value: string
}

export type FurryAssign = {
	readonly name: string
	readonly role: string
} & Partial<{
	readonly links: ({
		readonly name: string
		readonly href: string
	} & Partial<{
		readonly icon: string
	}>)[]
}>

export type FurryCharacterButton = {
	readonly name: string
	readonly href: string
} & Partial<{
	readonly icon: string
}>

export type FurryCharacterRenderableImage = {
	readonly type: 'image'
	readonly src: string
}

export type FurryCharacterRenderableEmbedVideo = {
	readonly type: 'embed_video'
	readonly src: string
}

export type FurryCharacterRenderableItem = (FurryCharacterRenderableImage | FurryCharacterRenderableEmbedVideo) &
	Partial<{
		readonly buttons: FurryCharacterButton[]
		readonly comment: string
	}>

export type FurryCharacterRenderable = {
	readonly title: string
	readonly items: FurryCharacterRenderableItem[]
}

export type FurryEventPhoto = {
	readonly src: string
}