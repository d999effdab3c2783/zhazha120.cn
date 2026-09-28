import type { DevCompetition } from '~/types/dev'

export default [
	{
		name: '蓝桥杯 第十六届',
		award: '省赛 一等奖',

		group: '软件赛 | Web 应用开发 | 职业院校组',
		date: {
			year: 2025,
			month: 4,
			day: 12
		}
	},
	{
		name: '蓝桥杯 第十六届',
		award: '国赛 一等奖',

		group: '软件赛 | Web 应用开发 | 职业院校组',
		date: {
			year: 2025,
			month: 6,
			day: 15
		},
		href: 'https://lanqiao.cn/cup-sixteen'
	},
	{
		name: '江西省 职业院校技能大赛',
		award: '一等奖',

		group: 'Web 应用软件开发 | 高职组 | 个人赛',
		date: {
			year: 2025,
			month: 11,
			day: 22
		},
		href: 'https://zs.jxeduyun.com/certifiDetail?certificatesid=26010815212809383571'
	},
	{
		name: '蓝桥杯 第十七届',
		award: '省赛 一等奖',

		group: '软件赛 | Web 应用开发 | 职业院校组',
		date: {
			year: 2026,
			month: 4,
			day: 11
		}
	},
	{
		name: '江西应用工程职业学院 职业教育活动周',
		award: '一等奖',

		group: 'Web | 校内赛',
		date: {
			year: 2026,
			month: 5,
			day: 15
		}
	},
	{
		name: '计算机设计大赛',
		award: '省赛 二等奖',

		group: '软件应用与开发 | Web 应用与开发',
		date: {
			year: 2026,
			month: 5,
			day: 6
		}
	},
	{
		name: '蓝桥杯 第十七届',
		award: '国赛 一等奖 (第一名)',

		group: '软件赛 | Web 应用开发 | 职业院校组',
		date: {
			year: 2026,
			month: 6,
			day: 6
		}
	},
	{
		name: '计算机设计大赛',
		award: '国赛 二等奖',

		group: '软件应用与开发 | Web 应用与开发',
		date: {
			year: 2026,
			month: 8,
			day: 22
		}
	}
] as const satisfies DevCompetition[]