export type Competition = {
	readonly name: string;
	readonly year?: number;
	readonly href?: string;
};

export default [
	{
		name: ['蓝桥杯 第十六届', '软件赛 | 职业院校组 | 省赛', 'Web 应用开发', '一等奖'].join(' '),
		year: 2025,
	},
	{
		name: ['蓝桥杯 第十六届', '软件赛 | 职业院校组 | 国赛', 'Web 应用开发', '一等奖'].join(' '),
		year: 2025,
		href: 'https://lanqiao.cn/cup-sixteen',
	},
	{
		name: ['江西省 职业院校技能大赛', '高职组 个人赛', 'Web 应用软件开发', '一等奖'].join(' '),
		year: 2025,
		href: 'https://zs.jxeduyun.com/certifiDetail?certificatesid=26010815212809383571',
	},
	{
		name: ['蓝桥杯 第十七届', '软件赛 | 职业院校组 | 省赛', 'Web 应用开发', '一等奖'].join(' '),
		year: 2026,
	},
	{
		name: ['江西应用工程职业学院 职业教育活动周', '校内赛', 'Web', '一等奖'].join(' '),
		year: 2026,
	},
	{
		name: ['计算机设计大赛', '省赛', '软件应用与开发 | Web 应用与开发', '二等奖'].join(' '),
		year: 2026,
	},
	{
		name: ['蓝桥杯 第十七届', '软件赛 | 职业院校组 | 国赛', 'Web 应用开发', '一等奖 (第一名)'].join(' '),
		year: 2026,
	},
	{
		name: ['计算机设计大赛', '国赛', '软件应用与开发 | Web 应用与开发', '二等奖'].join(' '),
		year: 2026,
	},
] satisfies Competition[];