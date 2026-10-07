import logo from '~/stores/friends/websites/silverdragon.cn/assets/logo.bin?url'
import type { FriendWebsite } from '~/types/friend'

export default {
	logo,
	name: '应龙笔记',
	description: '应龙笔记是一个专注于知识分享的网站',
	href: 'https://www.silverdragon.cn?link={domain}'
} as const satisfies FriendWebsite