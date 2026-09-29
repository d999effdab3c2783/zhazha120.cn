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

	readonly characters: Character[]

	readonly renderExtra: () => VNode
}>

export type FurryEventEntry = FurryEvent &
	Partial<{
		readonly year: number
		readonly slug: string
	}>