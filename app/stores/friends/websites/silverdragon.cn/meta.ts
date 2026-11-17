import type { FriendWebsite } from '~/types/friend'

import logo from '~/stores/friends/websites/silverdragon.cn/assets/logo.bin?url'

export default {
	description: '应龙笔记是一个专注于知识分享的网站',
	href: 'https://www.silverdragon.cn?link={domain}',
	logo,
	name: '应龙笔记'
} as const satisfies FriendWebsite