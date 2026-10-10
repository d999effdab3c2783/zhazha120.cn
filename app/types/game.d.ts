export type DivingFishMaimaiBest50 = {
	readonly additional_rating: number

	readonly charts: Record<
		'dx' | 'sd',
		{
			readonly achievements: number
			readonly ds: number
			readonly dxScore: number
			readonly fc: string
			readonly fs: string
			readonly level: string
			readonly level_index: number
			readonly level_label: string
			readonly ra: number
			readonly rate: string
			readonly song_id: number
			readonly title: string
			readonly type: string
		}[]
	>

	readonly nickname: string
	readonly plate: string
	readonly rating: number
	readonly user_general_data: unknown
	readonly username: string
}

export type GameRecordPortal = {
	readonly icon: string
	readonly name: string
	readonly href: string
}

export type GameOsuManiaRecord = {
	readonly '4k': {
		readonly dan: {
			readonly jack: string
			readonly tech: string
			readonly speed: string
			readonly stamina: string
			readonly long_note: number
		}
	}
}

export type GameOsuRecordPortal = {
	readonly icon: string
	readonly name: string
	readonly href: string
}

export type GameMinecraftRecordPortal = {
	readonly icon: string
	readonly name: string
	readonly href: string
}

export type GameMalodyDan = {
	readonly base: string

	readonly jack: string
	readonly tech: string
	readonly speed: string
	readonly stream: string
}

export type GameMalodyDanTimeline = {
	readonly name: string
	readonly completed_at: Date
	readonly video_url: string
}

export type GameMalodyRecordPortal = {
	readonly icon: string
	readonly name: string
	readonly href: string
}

export type GameGeometryDashRecordPortal = {
	readonly icon: string
	readonly name: string
	readonly href: string
}

export type GameTetrioSprintTimeline = {
	readonly time: number
	readonly archived_at: Date
}

export type GameTetrioBlitzTimeline = {
	readonly score: number
	readonly archived_at: Date
}

export type GameTetrioRankColor = {
	readonly name: string
	readonly value: string
}

export type GameTetrioTetraLeagueTimeline = {
	readonly rank: string
	readonly archived_at: Date
}

export type GameTetrioRecordPortal = {
	readonly icon: string
	readonly name: string
	readonly href: string
}