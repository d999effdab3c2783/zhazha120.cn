import type { Dexie } from 'dexie'

export default async (database: Dexie) => {
	database.table('dev_projects')
		.bulkAdd([
			{
				name: 'zhazha120.cn',
				href: 'https://github.com/d999effdab3c2783/zhazha120.cn'
			},
			{
				name: 'BitterSweet',
				href: 'https://github.com/c794b7b0331e4cf3/BitterSweetNext'
			},
			{
				name: 'Abnormal Cat 的个人网站',
				href: 'https://github.com/Abnormal-Cat/abnormalcat.cn'
			},
			{
				name: 'Paw Team 官网',
				href: 'https://github.com/PawTeamClub/website'
			},
			{
				name: '与互的个人网站',
				href: 'https://github.com/WOSHIZHAZHA120/pages.yuhu'
			},
			{
				name: 'Techmino 在线词典',
				href: 'https://github.com/26F-Studio/techmino-online-dict'
			},
			{
				name: '俄罗斯方块查询 Bot 模板 老',
				href: 'https://github.com/A-Minos/tetris-stats-templates'
			},
			{
				name: '俄罗斯方块查询 Bot 模板 新',
				href: 'https://github.com/A-Minos/tetris-stats-templates-new'
			},
			{
				name: 'Endless Services 前端',
				href: 'https://github.com/Endless-Spike-Studio/Endless-Services-Frontend'
			},
			{
				name: 'Endless Services 运行时',
				href: 'https://github.com/Endless-Spike-Studio/Endless-Services-Runtime'
			},
			{
				name: 'Endless Services 后端',
				href: 'https://github.com/Endless-Spike-Studio/Endless-Services-Backend'
			},
			{
				name: 'Endless Services 连接器',
				href: 'https://github.com/Endless-Spike-Studio/Endless-Services-Connector'
			},
			{
				name: 'tetr.io plus (定制魔改)',
				href: 'https://github.com/d999effdab3c2783/tetrio-plus'
			},
			{
				name: 'OpenList 前端 (定制魔改)',
				href: 'https://github.com/d999effdab3c2783/OpenList-Frontend'
			}
		])
}