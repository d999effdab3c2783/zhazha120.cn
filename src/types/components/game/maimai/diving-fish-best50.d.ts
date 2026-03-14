export interface Chart {
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
}

export interface Data {
	readonly additional_rating: number

	readonly charts: {
		readonly dx: Chart[]
		readonly sd: Chart[]
	}

	readonly nickname: string
	readonly plate: string
	readonly rating: number
	readonly user_general_data: unknown
	readonly username: string
}