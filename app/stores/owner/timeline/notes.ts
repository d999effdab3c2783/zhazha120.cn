import type { RenderableText } from '~/types/render'

export const title = '感叹'

export const items = [
	{
		text: '总是感觉时间过得好快 幻想死亡',
		depth: 3
	},
	{
		text: '最终无人维护的高塔 最后会消失吗',
		depth: 3
	}
] as const satisfies RenderableText[]