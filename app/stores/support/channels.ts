import { read } from '@/macros/qrcode' with { type: 'macro' }
import alipayRedPacket from '~/assets/images/support/alipay/red_packet.webp?url'
import alipayTransfer from '~/assets/images/support/alipay/transfer.webp?url'
import qqTransfer from '~/assets/images/support/qq/transfer.webp?url'
import wechatTransfer from '~/assets/images/support/wechat/transfer.webp?url'
import type { SupportChannel } from '~/types/support'

export default [
	{
		name: '爱发电',
		methods: [
			{
				type: 'external',
				name: '预览',
				url: 'https://afdian.com/a/WOSHIZHAZHA120',

				comment: ['不推荐, 需要登录', '非赞助用途 (如奖金发放等) 麻烦使用 微信 或 支付宝 而不是爱发电'].join(
					'\n'
				)
			}
		]
	},
	{
		name: 'QQ 支付',
		methods: [
			{
				type: 'image',
				name: '收款',
				src: qqTransfer
			},
			{
				type: 'qrcode',
				name: '收款码',
				content: await read('~/assets/images/support/qq/transfer.webp'),

				props: {
					iconSrc: 'https://thirdqq.qlogo.cn/g?b=qq&nk=2331281251&s=0'
				}
			}
		]
	},
	{
		name: '微信支付',
		methods: [
			{
				type: 'image',
				name: '收款',
				src: wechatTransfer
			},
			{
				type: 'qrcode',
				name: '收款码',
				content: await read('~/assets/images/support/wechat/transfer.webp')
			}
		]
	},
	{
		name: '支付宝',
		methods: [
			{
				type: 'image',
				name: '收款',
				src: alipayTransfer
			},
			{
				type: 'qrcode',
				name: '收款码',
				content: await read('~/assets/images/support/alipay/transfer.webp')
			},
			{
				type: 'image',
				name: '收款',
				src: alipayRedPacket
			},
			{
				type: 'qrcode',
				name: '收款码',
				content: await read('~/assets/images/support/alipay/red_packet.webp')
			}
		]
	}
] as const satisfies SupportChannel[]