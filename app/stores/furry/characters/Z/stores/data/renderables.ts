import type { FurryCharacterRenderable } from '~/types/furry'

export default [
	{
		items: [
			{
				src: 'https://player.bilibili.com/player.html?aid=115178574184785&autoplay=0',
				type: 'embed_video'
			}
		],
		title: '毛'
	}
] as const satisfies FurryCharacterRenderable[]