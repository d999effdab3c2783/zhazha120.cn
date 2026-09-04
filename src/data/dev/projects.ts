export type BaseProject = {
	readonly status?: 'dead'

	readonly name: string
}

export type GithubProject = BaseProject & {
	readonly type: 'github'
	readonly owner: string
	readonly repo: string
}

export type CustomProject = BaseProject & {
	readonly type: 'custom'
	readonly href: string
}

export type Project = GithubProject | CustomProject

export default [
	{
		type: 'github',
		name: 'zhazha120.cn',

		owner: 'd999effdab3c2783',
		repo: 'zhazha120.cn'
	},
	{
		type: 'github',
		name: 'BitterSweet',

		owner: 'c794b7b0331e4cf3',
		repo: 'BitterSweetNext'
	},
	{
		type: 'github',
		name: 'abnormalcat.cn (Abnormal Cat 的个人网站)',

		owner: 'Abnormal-Cat',
		repo: 'abnormalcat.cn'
	},
	{
		type: 'github',
		name: 'Paw Team 官网',

		owner: 'PawTeamClub',
		repo: 'website'
	},
	{
		status: 'dead',

		type: 'github',
		name: '与互的个人网站',

		owner: 'WOSHIZHAZHA120',
		repo: 'pages.yuhu'
	},
	{
		type: 'github',
		name: 'Techmino 在线词典',

		owner: '26F-Studio',
		repo: 'techmino-online-dict'
	},
	{
		type: 'github',
		name: 'Teronya Bot 模板 老',

		owner: 'A-Minos',
		repo: 'tetris-stats-templates'
	},
	{
		type: 'github',
		name: 'Teronya Bot 模板 新',

		owner: 'A-Minos',
		repo: 'tetris-stats-templates-new'
	},
	{
		type: 'github',
		name: 'Endless Services 前端',

		owner: 'Endless-Spike-Studio',
		repo: 'Endless-Services-Frontend'
	},
	{
		type: 'github',
		name: 'Endless Services 运行时',

		owner: 'Endless-Spike-Studio',
		repo: 'Endless-Services-Runtime'
	},
	{
		type: 'github',
		name: 'Endless Services 后端',

		owner: 'Endless-Spike-Studio',
		repo: 'Endless-Services-Backend'
	},
	{
		type: 'github',
		name: 'Endless Services 连接器',

		owner: 'Endless-Spike-Studio',
		repo: 'Endless-Services-Connector'
	},
	{
		status: 'dead',

		type: 'github',
		name: 'tetr.io plus (定制魔改)',

		owner: 'd999effdab3c2783',
		repo: 'tetrio-plus'
	},
	{
		type: 'github',
		name: 'tetr.io plus plus (定制魔改)',

		owner: 'A-Minos',
		repo: 'tetrio-plus-plus'
	},
	{
		status: 'dead',

		type: 'github',
		name: 'OpenList 前端 (定制魔改)',

		owner: 'd999effdab3c2783',
		repo: 'OpenList-Frontend'
	},
	{
		type: 'github',
		name: '墨趣诗坊',

		owner: 'c794b7b0331e4cf3',
		repo: 'InkFunPoetryStudio'
	},
	{
		type: 'github',
		name: 'tetr.io 汉化',

		owner: 'A-Minos',
		repo: 'tetrio-chinese'
	},
	{
		type: 'github',
		name: 'GDTools 服务',

		owner: 'GMDtools',
		repo: 'Services'
	}
] satisfies Project[]