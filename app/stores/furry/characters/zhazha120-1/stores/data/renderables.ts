import type { FurryCharacterRenderable } from '~/types/furry'

export default [
	{
		items: [
			{
				buttons: [
					{
						href: 'https://steamcommunity.com/sharedfiles/filedetails?id=3424280763',
						name: '在 Steam 创意工坊中查看'
					}
				],
				comment: '[仅好友可见]',
				src: 'https://player.bilibili.com/player.html?aid=113977661064095&autoplay=0',
				type: 'embed_video'
			},
			{
				buttons: [
					{
						href: 'https://steamcommunity.com/sharedfiles/filedetails?id=3482779647',
						name: '在 Steam 创意工坊中查看'
					}
				],
				comment: '[仅好友可见]',
				src: 'https://player.bilibili.com/player.html?aid=114521108645387&autoplay=0',
				type: 'embed_video'
			}
		],
		title: '壁纸'
	}
] as const satisfies FurryCharacterRenderable[]