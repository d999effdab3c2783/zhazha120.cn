// @unocss-include

export type Contact = {
	readonly icon: string
	readonly name: string
	readonly href: string

	readonly comment?: string
}

export default [
	{
		icon: 'i-ant-design:qq-outlined',
		name: 'QQ',
		href: 'https://qm.qq.com/q/GkUxK7PmmW',

		comment: '2331281251'
	},
	{
		icon: 'i-ant-design:mail-outlined',
		name: '邮箱',
		href: 'mailto://contact@zhazha120.cn'
	},
	{
		icon: 'i-tabler:brand-netease-music',
		name: '网易云音乐',
		href: 'https://music.163.com/#/user/home?id=634000521'
	},
	{
		icon: 'i-simple-icons:steam',
		name: 'Steam',
		href: 'https://steamcommunity.com/id/WOSHIZHAZHA120',

		comment: '好友代码: 485570157'
	},
	{
		icon: 'i-simple-icons:bilibili',
		name: '哔哩哔哩',
		href: 'https://space.bilibili.com/24267334'
	},
	{
		icon: 'i-ant-design:github-outlined',
		name: 'Github',
		href: 'https://github.com/WOSHIZHAZHA120'
	}
] satisfies Contact[]