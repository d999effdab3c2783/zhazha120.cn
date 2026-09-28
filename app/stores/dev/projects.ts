import type { DevProject, DevProjectTag } from '~/types/dev'

export const tags = {
	idle: '闲置',
	active: '活跃',
	completed: '已完成',
	maintained: '维护保留',
	transferred: '已转移',
	deleted: '已删除'
} as const satisfies Record<DevProjectTag, string>

export default [
	{
		type: 'github',
		name: 'zhazha120.cn',

		owner: 'd999effdab3c2783',
		repo: 'zhazha120.cn',

		tags: ['active']
	},
	{
		type: 'github',
		name: 'BitterSweet',

		owner: 'c794b7b0331e4cf3',
		repo: 'BitterSweetNext',

		tags: ['completed']
	},
	{
		type: 'github',
		name: 'abnormalcat.cn (Abnormal Cat 的个人网站)',

		owner: 'Abnormal-Cat',
		repo: 'abnormalcat.cn',

		tags: ['maintained', 'idle']
	},
	{
		type: 'github',
		name: 'Paw Team 官网',

		owner: 'PawTeamClub',
		repo: 'website',

		tags: ['maintained', 'idle']
	},
	{
		type: 'github',
		name: '与互的个人网站',

		owner: 'WOSHIZHAZHA120',
		repo: 'pages.yuhu',

		tags: ['transferred', 'deleted']
	},
	{
		type: 'github',
		name: 'Techmino 在线词典',

		owner: '26F-Studio',
		repo: 'techmino-online-dict',

		tags: ['completed', 'idle']
	},
	{
		type: 'github',
		name: 'Teronya Bot 模板 老',

		owner: 'A-Minos',
		repo: 'tetris-stats-templates',

		tags: ['completed']
	},
	{
		type: 'github',
		name: 'Teronya Bot 模板 新',

		owner: 'A-Minos',
		repo: 'tetris-stats-templates-new',

		tags: ['maintained', 'idle']
	},
	{
		type: 'github',
		name: 'Endless Services 前端',

		owner: 'Endless-Spike-Studio',
		repo: 'Endless-Services-Frontend',

		tags: ['completed']
	},
	{
		type: 'github',
		name: 'Endless Services 运行时',

		owner: 'Endless-Spike-Studio',
		repo: 'Endless-Services-Runtime',

		tags: ['completed']
	},
	{
		type: 'github',
		name: 'Endless Services 后端',

		owner: 'Endless-Spike-Studio',
		repo: 'Endless-Services-Backend',

		tags: ['completed']
	},
	{
		type: 'github',
		name: 'Endless Services 连接器',

		owner: 'Endless-Spike-Studio',
		repo: 'Endless-Services-Connector',

		tags: ['completed']
	},
	{
		type: 'github',
		name: 'tetr.io plus (定制魔改)',

		owner: 'd999effdab3c2783',
		repo: 'tetrio-plus',

		tags: ['deleted']
	},
	{
		type: 'github',
		name: 'tetr.io plus plus (定制魔改)',

		owner: 'A-Minos',
		repo: 'tetrio-plus-plus',

		tags: ['idle']
	},
	{
		type: 'github',
		name: 'OpenList 前端 (定制魔改)',

		owner: 'd999effdab3c2783',
		repo: 'OpenList-Frontend',

		tags: ['deleted']
	},
	{
		type: 'github',
		name: '墨趣诗坊',

		owner: 'c794b7b0331e4cf3',
		repo: 'InkFunPoetryStudio',

		tags: ['completed']
	},
	{
		type: 'github',
		name: 'tetr.io 汉化',

		owner: 'A-Minos',
		repo: 'tetrio-chinese',

		tags: ['idle']
	},
	{
		type: 'github',
		name: 'GDTools 服务',

		owner: 'GMDtools',
		repo: 'Services',

		tags: ['maintained', 'idle']
	}
] as const satisfies DevProject[]