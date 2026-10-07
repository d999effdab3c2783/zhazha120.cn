import _1 from '~/stores/owner/birthday/records/19/stores/images/1.bin?url'
import _2 from '~/stores/owner/birthday/records/19/stores/images/2.bin?url'
import _3 from '~/stores/owner/birthday/records/19/stores/images/3.bin?url'
import _4 from '~/stores/owner/birthday/records/19/stores/images/4.bin?url'
import _5 from '~/stores/owner/birthday/records/19/stores/images/5.bin?url'
import type { OwnerBirthdayRecordRenderable } from '~/types/owner'

export default [
	{
		title: '礼物',
		items: [
			{
				type: 'image',
				src: _1,

				comments: [
					{
						text: '@ 苍陨',
						class: 'text-[1.2em]'
					}
				]
			}
		]
	},
	{
		title: '未完善的设定',
		items: [
			{
				type: 'image',
				src: _2,

				comments: [
					{
						text: '并非最终版本, 只是为了和本体卡在同一天生日 🤔 还在构思其它的花纹',
						depth: 3
					},
					{
						text: '@ 乱步',
						class: 'text-[1.2em]'
					}
				]
			}
		]
	},
	{
		title: '收到的赠图',
		items: [
			{
				type: 'image',
				src: _3,

				comments: [
					{
						text: ['左: 渣渣', '中: 墨水', '右: 临灰'].join('\n'),
						depth: 3
					},
					{
						type: 'info',
						text: '并做成了动态壁纸'
					},
					{
						text: '@ 墨水',
						class: 'text-[1.2em]'
					}
				]
			},
			{
				type: 'image',
				src: _4,

				comments: [
					{
						type: 'primary',
						text: '超喜欢这张 !'
					},
					{
						text: '@ wonold',
						class: 'text-[1.2em]'
					}
				]
			},
			{
				type: 'image',
				src: _5,

				comments: [
					{
						text: '@ 沙盒子',
						class: 'text-[1.2em]'
					}
				]
			}
		]
	}
] as const satisfies OwnerBirthdayRecordRenderable[]