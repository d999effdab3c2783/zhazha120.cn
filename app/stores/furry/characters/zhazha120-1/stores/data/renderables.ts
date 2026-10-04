import type { FurryRenderable } from '~/types/furry'

export default [
	{
		title: '壁纸',
		items: [
			{
				type: 'embed_video',
				src: 'https://player.bilibili.com/player.html?aid=113977661064095&autoplay=0',

				buttons: [
					{
						name: '在 Steam 创意工坊中查看',
						href: 'https://steamcommunity.com/sharedfiles/filedetails?id=3424280763'
					}
				],

				comment: '[仅好友可见]'
			},
			{
				type: 'embed_video',
				src: 'https://player.bilibili.com/player.html?aid=114521108645387&autoplay=0',

				buttons: [
					{
						name: '在 Steam 创意工坊中查看',
						href: 'https://steamcommunity.com/sharedfiles/filedetails?id=3482779647'
					}
				],

				comment: '[仅好友可见]'
			}
		]
	}
] as const satisfies FurryRenderable[]