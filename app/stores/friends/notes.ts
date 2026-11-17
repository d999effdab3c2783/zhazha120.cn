import type { RenderableText } from '~/types/render'

export const title = '回忆'

export const items = [
	{
		depth: 3,
		text: '这里存放着历史请求记录过的所有好友 或许是曾经的 或许是现在的'
	}
] as const satisfies RenderableText[]