import { read } from '~/macros/qrcode' with { type: 'macro' }
import alipayRedPacket from '~/stores/support/assets/alipay/red_packet.bin?url'
import alipayTransfer from '~/stores/support/assets/alipay/transfer.bin?url'
import qqTransfer from '~/stores/support/assets/qq/transfer.bin?url'
import wechatTransfer from '~/stores/support/assets/wechat/transfer.bin?url'
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
				content: await read('~/stores/support/assets/qq/transfer.bin'),

				props: {
					iconSrc:
						'https://thirdqq.qlogo.cn/ek_qqapp/AQKmeMv70RdTZKzZPjtHnjC5fPz1OSsEnXiacxFu5ibtUvaMXUOY8Lics3FibvE2uzXSdG8qw01LYRWyNibkvhJA8kpH74w0G911ThAMvQ4O6Oic5p5VmLQMTyXzlA8whPRg/0'
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
				content: await read('~/stores/support/assets/wechat/transfer.bin')
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
				content: await read('~/stores/support/assets/alipay/transfer.bin')
			},
			{
				type: 'image',
				name: '红包',
				src: alipayRedPacket
			},
			{
				type: 'qrcode',
				name: '红包码',
				content: await read('~/stores/support/assets/alipay/red_packet.bin')
			}
		]
	}
] as const satisfies SupportChannel[]