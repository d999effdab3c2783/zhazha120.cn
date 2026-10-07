import _1 from '~/stores/owner/birthday/records/20/stores/images/1.bin?url'
import type { OwnerBirthdayRecordRenderable } from '~/types/owner'

export default [
	{
		title: '收到的赠图',
		items: [
			{
				type: 'image',
				src: _1,

				comments: [
					{
						type: 'primary',
						text: '好萌 超级喜欢 !'
					},
					{
						text: '@ wonold',
						class: 'text-[1.2em]'
					}
				]
			},
			{
				type: 'embed_video',
				src: 'https://player.bilibili.com/player.html?aid=116528619984999&autoplay=0'
			}
		]
	}
] as const satisfies OwnerBirthdayRecordRenderable[]