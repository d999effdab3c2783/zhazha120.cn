import { name as ownerName } from '~/stores/owner/information'

export const divingFishUsername = ownerName

export const difficultyColorMappings = {
	Basic: '#22bb5b',
	Advanced: '#fb9c2d',
	Expert: '#f64861',
	Master: '#9e45e2',
	'Re:MASTER': '#e4a6ff'
} as const satisfies Record<string, string>

export const additionalRatingMappings = {
	0: '初学者',
	1: '一段',
	2: '二段',
	3: '三段',
	4: '四段',
	5: '五段',
	6: '六段',
	7: '七段',
	8: '八段',
	9: '九段',
	10: '十段',
	11: '真初段',
	12: '真二段',
	13: '真三段',
	14: '真四段',
	15: '真五段',
	16: '真六段',
	17: '真七段',
	18: '真八段',
	19: '真九段',
	20: '真十段',
	21: '真皆传',
	22: '里皆传'
} as const satisfies Record<number, string>