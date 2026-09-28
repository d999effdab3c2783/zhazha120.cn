export type DevCodeTime = {
	readonly domain: string
	readonly href: string

	readonly userId: number

	readonly widgets: {
		readonly badge: {
			readonly codingTime: string
			readonly tokens: string
		}

		readonly top: {
			readonly languages: string
			readonly projects: string
		}

		readonly status: string
		readonly calendar: string
		readonly trend: string
		readonly usage: string
	}
}

export type DevStackItem = {
	readonly name: string
	readonly icon: string
	readonly href: string
}

export type DevStack = {
	readonly name: string
	readonly items: DevStackItem[]
} & Partial<{
	readonly sort: number
}>

export type BaseDevOrganization = {
	readonly name: string
}

export type GithubDevOrganization = BaseDevOrganization & {
	readonly type: 'github'
	readonly avatar: string
	readonly owner: string
}

export type ExternalDevOrganization = BaseDevOrganization & {
	readonly type: 'external'
	readonly href: string
}

export type DevOrganization = GithubDevOrganization | ExternalDevOrganization

export type GithubDevProject = BaseDevProject & {
	readonly type: 'github'
	readonly owner: string
	readonly repo: string
}

export type ExternalDevProject = BaseDevProject & {
	readonly type: 'external'
	readonly href: string
}

export type DevProject = GithubDevProject | ExternalDevProject

export type DevCompetition = {
	readonly name: string
	readonly award: string
} & Partial<{
	readonly group: string

	readonly date: Partial<{
		readonly year: number
		readonly month: number
		readonly day: number
	}>

	readonly href: string
}>

export type DevProjectTag = 'idle' | 'active' | 'maintained' | 'completed' | 'transferred' | 'deleted'

export type BaseDevProject = {
	readonly name: string
} & Partial<{
	readonly tags: DevProjectTag[]
}>