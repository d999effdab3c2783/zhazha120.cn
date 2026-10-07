import type { FurryCharacterRenderable } from '~/types/furry'

export default [
	{
		title: '毛',
		items: [
			{
				type: 'embed_video',
				src: 'https://player.bilibili.com/player.html?aid=115178574184785&autoplay=0'
			}
		]
	}
] as const satisfies FurryCharacterRenderable[]