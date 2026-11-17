import type { OwnerBirthdayRecordRenderable } from '~/types/owner'

import _1 from '~/stores/owner/birthday/records/19/stores/images/1.bin?url'
import _2 from '~/stores/owner/birthday/records/19/stores/images/2.bin?url'
import _3 from '~/stores/owner/birthday/records/19/stores/images/3.bin?url'
import _4 from '~/stores/owner/birthday/records/19/stores/images/4.bin?url'
import _5 from '~/stores/owner/birthday/records/19/stores/images/5.bin?url'

export default [
	{
		items: [
			{
				comments: [
					{
						class: 'text-[1.2em]',
						text: '@ 苍陨'
					}
				],
				src: _1,
				type: 'image'
			}
		],
		title: '礼物'
	},
	{
		items: [
			{
				comments: [
					{
						depth: 3,
						text: '并非最终版本, 只是为了和本体卡在同一天生日 🤔 还在构思其它的花纹'
					},
					{
						class: 'text-[1.2em]',
						text: '@ 乱步'
					}
				],
				src: _2,
				type: 'image'
			}
		],
		title: '未完善的设定'
	},
	{
		items: [
			{
				comments: [
					{
						depth: 3,
						text: ['左: 渣渣', '中: 墨水', '右: 临灰'].join('\n')
					},
					{
						text: '并做成了动态壁纸',
						type: 'info'
					},
					{
						class: 'text-[1.2em]',
						text: '@ 墨水'
					}
				],
				src: _3,
				type: 'image'
			},
			{
				comments: [
					{
						text: '超喜欢这张 !',
						type: 'primary'
					},
					{
						class: 'text-[1.2em]',
						text: '@ wonold'
					}
				],
				src: _4,
				type: 'image'
			},
			{
				comments: [
					{
						class: 'text-[1.2em]',
						text: '@ 沙盒子'
					}
				],
				src: _5,
				type: 'image'
			}
		],
		title: '收到的赠图'
	}
] as const satisfies OwnerBirthdayRecordRenderable[]