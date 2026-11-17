import type { DevCompetition } from '~/types/dev'

export default [
	{
		award: '省赛 一等奖',
		date: {
			day: 12,
			month: 4,
			year: 2025
		},
		group: '软件赛 | Web 应用开发 | 职业院校组',
		name: '蓝桥杯 第十六届'
	},
	{
		award: '国赛 一等奖',
		date: {
			day: 15,
			month: 6,
			year: 2025
		},
		group: '软件赛 | Web 应用开发 | 职业院校组',
		href: 'https://lanqiao.cn/cup-sixteen',
		name: '蓝桥杯 第十六届'
	},
	{
		award: '一等奖',
		date: {
			day: 22,
			month: 11,
			year: 2025
		},
		group: 'Web 应用软件开发 | 高职组 | 个人赛',
		href: 'https://zs.jxeduyun.com/certifiDetail?certificatesid=26010815212809383571',
		name: '江西省 职业院校技能大赛'
	},
	{
		award: '省赛 一等奖',
		date: {
			day: 11,
			month: 4,
			year: 2026
		},
		group: '软件赛 | Web 应用开发 | 职业院校组',
		name: '蓝桥杯 第十七届'
	},
	{
		award: '一等奖',
		date: {
			day: 15,
			month: 5,
			year: 2026
		},
		group: 'Web | 校内赛',
		name: '江西应用工程职业学院 职业教育活动周'
	},
	{
		award: '省赛 二等奖',
		date: {
			day: 6,
			month: 5,
			year: 2026
		},
		group: '软件应用与开发 | Web 应用与开发',
		name: '计算机设计大赛'
	},
	{
		award: '国赛 一等奖 (第一名)',
		date: {
			day: 6,
			month: 6,
			year: 2026
		},
		group: '软件赛 | Web 应用开发 | 职业院校组',
		name: '蓝桥杯 第十七届'
	},
	{
		award: '国赛 二等奖',
		date: {
			day: 22,
			month: 8,
			year: 2026
		},
		group: '软件应用与开发 | Web 应用与开发',
		name: '计算机设计大赛'
	}
] as const satisfies DevCompetition[]