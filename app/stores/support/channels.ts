import type { SupportChannel } from '~/types/support'

import { read } from '~/macros/qrcode' with { type: 'macro' }
import alipayRedPacket from '~/stores/support/assets/alipay/red_packet.bin?url'
import alipayTransfer from '~/stores/support/assets/alipay/transfer.bin?url'
import qqTransfer from '~/stores/support/assets/qq/transfer.bin?url'
import wechatTransfer from '~/stores/support/assets/wechat/transfer.bin?url'

export default [
	{
		methods: [
			{
				comment: ['不推荐, 需要登录', '非赞助用途 (如奖金发放等) 麻烦使用 微信 或 支付宝 而不是爱发电'].join(
					'\n'
				),
				name: '预览',
				type: 'external',
				url: 'https://afdian.com/a/WOSHIZHAZHA120'
			}
		],
		name: '爱发电'
	},
	{
		methods: [
			{
				name: '收款',
				src: qqTransfer,
				type: 'image'
			},
			{
				content: await read('~/stores/support/assets/qq/transfer.bin'),
				name: '收款码',
				props: {
					iconSrc: 'https://thirdqq.qlogo.cn/g?b=qq&nk=2331281251&s=0'
				},
				type: 'qrcode'
			}
		],
		name: 'QQ 支付'
	},
	{
		methods: [
			{
				name: '收款',
				src: wechatTransfer,
				type: 'image'
			}
		],
		name: '微信支付'
	},
	{
		methods: [
			{
				name: '收款',
				src: alipayTransfer,
				type: 'image'
			},
			{
				content: await read('~/stores/support/assets/alipay/transfer.bin'),
				name: '收款码',
				type: 'qrcode'
			},
			{
				name: '红包',
				src: alipayRedPacket,
				type: 'image'
			},
			{
				content: await read('~/stores/support/assets/alipay/red_packet.bin'),
				name: '红包码',
				type: 'qrcode'
			}
		],
		name: '支付宝'
	}
] as const satisfies SupportChannel[]