import type { QrCodeProps } from 'naive-ui';
import { read } from '@/macros/qrcode' with { type: 'macro' };

export type ExternalSupportMethod = {
	readonly type: 'external';
	readonly name: string;
	readonly url: string;

	readonly comment?: string;
};

export type ImageSupportMethod = {
	readonly type: 'image';
	readonly name: string;
	readonly src: string;
};

export type QrCodeSupportMethod = {
	readonly type: 'qrcode';
	readonly name: string;
	readonly content: string | undefined;

	readonly props?: Omit<QrCodeProps, 'type' | 'size' | 'value'>;
};

export type SupportMethod = ExternalSupportMethod | ImageSupportMethod | QrCodeSupportMethod;

export type SupportChannel = {
	readonly name: string;
	readonly methods: SupportMethod[];
};

export default {
	channels: [
		{
			name: '爱发电',

			methods: [
				{
					type: 'external',
					name: '预览',
					url: 'https://afdian.com/a/WOSHIZHAZHA120',

					comment: [
						'不推荐, 需要登录',
						'非赞助用途 (如奖金发放等) 麻烦使用 微信 或 支付宝 而不是爱发电',
					].join('\n'),
				},
			],
		},
		{
			name: 'QQ 支付',
			methods: [
				{
					type: 'image',
					name: '收款',
					src: new URL('@/assets/images/support/qq/transfer.bin', import.meta.url).href,
				},
				{
					type: 'qrcode',
					name: '收款码',
					content: await read('../assets/images/support/qq/transfer.bin'),

					props: {
						iconSrc: 'https://q1.qlogo.cn/g?b=qq&nk=2331281251&s=640',
					},
				},
			],
		},
		{
			name: '微信支付',
			methods: [
				{
					type: 'image',
					name: '收款',
					src: new URL('@/assets/images/support/wechat/transfer.bin', import.meta.url).href,
				},
				{
					type: 'qrcode',
					name: '收款码',
					content: await read('../assets/images/support/wechat/transfer.bin'),

					props: {
						iconSrc: '/z.svg',
					},
				},
			],
		},
		{
			name: '支付宝',
			methods: [
				{
					type: 'image',
					name: '收款',
					src: new URL('@/assets/images/support/alipay/transfer.bin', import.meta.url).href,
				},
				{
					type: 'qrcode',
					name: '收款码',
					content: await read('../assets/images/support/alipay/transfer.bin'),

					props: {
						iconSrc: '/z.svg',
					},
				},
				{
					type: 'image',
					name: '红包',
					src: new URL('@/assets/images/support/alipay/red_packet.bin', import.meta.url).href,
				},
				{
					type: 'qrcode',
					name: '红包码',
					content: await read('../assets/images/support/alipay/red_packet.bin'),
				},
			],
		},
	] satisfies SupportChannel[],
} as const;