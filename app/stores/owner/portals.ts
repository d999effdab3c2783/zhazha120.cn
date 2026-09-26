import type { OwnerPortal } from '~/types/owner'

// @unocss-include

export default [
	{
		type: 'primary',

		icon: 'i-tdesign:usergroup-add',
		name: '个人群',
		href: 'https://qm.qq.com/cgi-bin/qm/qr?k=EKq625P5qpas9-m5lVFTDnyCgR1I9yPw&authKey=zqbyY33MW7xTvSEBm+fqVv7lrq3EhV7UuVPrYnQZTal9dQpkD9XM3ViHSu2QnGb3',

		comment: [
			'一些群 个人相关',
			'答对问题自助入群 自由进出 没有黑名单',
			'无打扰 (没有莫名其妙的 @全体成员 也不会发布群待办)',
			'话题很杂 也许什么都聊 也什么都说了',
			'人多不一定热闹 看不懂也没关系',
			null,
			'带不来人 也留不住人 顺便干脆 懒得管群',
			'你们知道什么不该发',
			null,
			'目前唯一的福利大概是每月有免费网易云音乐黑胶拿（'
		].join('\n')
	},
	{
		icon: 'i-ant-design:cloud-download-outlined',
		name: '云盘',
		href: 'https://pan.zhazha120.cn'
	}
] as const satisfies OwnerPortal[]