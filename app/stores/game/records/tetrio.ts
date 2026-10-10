import type {
	GameTetrioBlitzTimeline,
	GameTetrioRankColor,
	GameTetrioRecordPortal,
	GameTetrioSprintTimeline,
	GameTetrioTetraLeagueTimeline
} from '~/types/game'
import { createDate } from '~/utils/date'

export const userId = '5eb3a6530b29196c155074e8'
export const overlay = `https://tetr.fires.bz/overlay/user?username=${userId}&display-name=true&display-level=true&display-role=true&display-badge=true&display-rank=true&display-league=true&display-sprint=true&display-blitz=true&display-standingsets=true&display-standingsets-sprint=true&display-standingsets-blitz=true&alignment=top&layout=horizontal&league=apm+pps+vs+x_winrate+percentile&sprint=pieces+pps+ff+kpp+kps+quads&blitz=pps+ff+spp+pieces+pieces+quads+tspins+allclears`

export const splintTimelines = [
	{
		time: 58.62,
		archived_at: createDate(2022, 4, 30)
	},
	{
		time: 48.877,
		archived_at: createDate(2022, 7, 18)
	},
	{
		time: 42.653,
		archived_at: createDate(2022, 9, 21)
	},
	{
		time: 39.685,
		archived_at: createDate(2022, 11, 9)
	},
	{
		time: 34.503,
		archived_at: createDate(2022, 11, 28)
	},
	{
		time: 28.225,
		archived_at: createDate(2023, 2, 9)
	},
	{
		time: 24.593,
		archived_at: createDate(2023, 8, 23)
	},
	{
		time: 23.26,
		archived_at: createDate(2023, 9, 21)
	},
	{
		time: 22.857,
		archived_at: createDate(2024, 3, 6)
	},
	{
		time: 21.633,
		archived_at: createDate(2024, 6, 5)
	},
	{
		time: 21.483,
		archived_at: createDate(2024, 8, 5)
	},
	{
		time: 21.458,
		archived_at: createDate(2024, 11, 9)
	},
	{
		time: 21.067,
		archived_at: createDate(2025, 2, 8)
	},
	{
		time: 20.103,
		archived_at: createDate(2025, 2, 24)
	},
	{
		time: 19.793,
		archived_at: createDate(2025, 3, 12)
	},
	{
		time: 19.783,
		archived_at: createDate(2025, 4, 13)
	}
] as const satisfies GameTetrioSprintTimeline[]

export const blitzTimelines = [
	{
		score: 389548,
		archived_at: createDate(2024, 1, 7)
	},
	{
		score: 397487,
		archived_at: createDate(2026, 1, 21)
	},
	{
		score: 452633,
		archived_at: createDate(2026, 1, 26)
	},
	{
		score: 458187,
		archived_at: createDate(2026, 1, 26)
	}
] as const satisfies GameTetrioBlitzTimeline[]

export const rankColors = [
	{
		name: 'a',
		value: '#46ad51'
	},
	{
		name: 'a+',
		value: '#1fa834'
	},
	{
		name: 'a-',
		value: '#3bb687'
	},
	{
		name: 'b',
		value: '#4f64c9'
	},
	{
		name: 'b+',
		value: '#4f99c0'
	},
	{
		name: 'b-',
		value: '#5650c7'
	},
	{
		name: 'c',
		value: '#733e8f'
	},
	{
		name: 'c+',
		value: '#552883'
	},
	{
		name: 'c-',
		value: '#79558c'
	},
	{
		name: 'd',
		value: '#907591'
	},
	{
		name: 'd+',
		value: '#8e6091'
	},
	{
		name: 's',
		value: '#e0a71b'
	},
	{
		name: 's+',
		value: '#d8af0e'
	},
	{
		name: 's-',
		value: '#b2972b'
	},
	{
		name: 'ss',
		value: '#db8b1f'
	},
	{
		name: 'u',
		value: '#ff3813'
	},
	{
		name: 'x',
		value: '#ff45ff'
	},
	{
		name: 'x+',
		value: '#a763ea'
	},
	{
		name: 'z',
		value: '#375433'
	}
] as const satisfies GameTetrioRankColor[]

export const tetraLeagueSeason1Timelines = [
	{
		rank: 'a+',
		archived_at: createDate(2022, 4, 30)
	},
	{
		rank: 's',
		archived_at: createDate(2022, 5, 22)
	},
	{
		rank: 's+',
		archived_at: createDate(2022, 7, 18)
	},
	{
		rank: 'ss',
		archived_at: createDate(2022, 8, 17)
	},
	{
		rank: 'u',
		archived_at: createDate(2022, 12, 11)
	},
	{
		rank: 'x',
		archived_at: createDate(2023, 11, 2)
	}
] as const satisfies GameTetrioTetraLeagueTimeline[]

export const tetraLeagueSeason2Timelines = [
	{
		rank: 'a+',
		archived_at: createDate(2024, 8, 17)
	},
	{
		rank: 's-',
		archived_at: createDate(2024, 8, 17)
	},
	{
		rank: 's',
		archived_at: createDate(2024, 8, 17)
	},
	{
		rank: 's+',
		archived_at: createDate(2024, 8, 17)
	},
	{
		rank: 'ss',
		archived_at: createDate(2024, 8, 17)
	},
	{
		rank: 'u',
		archived_at: createDate(2024, 8, 18)
	},
	{
		rank: 'x',
		archived_at: createDate(2024, 9, 9)
	}
] as const satisfies GameTetrioTetraLeagueTimeline[]

export const portals = [
	{
		icon: 'i-ant-design:profile-outlined',
		name: '资料',
		href: `https://ch.tetr.io/u/${userId}`
	}
] as const satisfies GameTetrioRecordPortal[]