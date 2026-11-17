import type { OwnerBirthdayRecordRenderable } from '~/types/owner'

import _1 from '~/stores/owner/birthday/records/20/stores/images/1.bin?url'

export default [
	{
		items: [
			{
				comments: [
					{
						text: '好萌 超级喜欢 !',
						type: 'primary'
					},
					{
						class: 'text-[1.2em]',
						text: '@ wonold'
					}
				],
				src: _1,
				type: 'image'
			},
			{
				src: 'https://player.bilibili.com/player.html?aid=116528619984999&autoplay=0',
				type: 'embed_video'
			}
		],
		title: '收到的赠图'
	}
] as const satisfies OwnerBirthdayRecordRenderable[]