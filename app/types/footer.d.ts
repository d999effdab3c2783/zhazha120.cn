import type { MaybeRefOrGetter } from 'vue'

export type FooterCopyright = {
	readonly startYear: number
	readonly endYear: MaybeRefOrGetter<number>
}

export type FooterFiling = {
	readonly provinceAbbr: string

	readonly icp: {
		readonly code: number
		readonly text: string
		readonly href: string
	}

	readonly safety: {
		readonly icon: string
		readonly code: number
		readonly text: string
		readonly href: string
	}
}

export type FooterVersion = {
	readonly branch: string
	readonly branchHref: string
	readonly shortHash: string
	readonly hash: string
	readonly hashHref: string
}

export type FooterUtility = {
	readonly hotkey: string
}