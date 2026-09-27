export type SupportChannel = {
	readonly name: string
	readonly methods: SupportMethod[]
}

export type ExternalSupportMethod = {
	readonly type: 'external'
	readonly name: string
	readonly url: string
} & Partial<{
	readonly comment: string
}>

export type ImageSupportMethod = {
	readonly type: 'image'
	readonly name: string
	readonly src: string
}

export type QRCodeSupportMethod = {
	readonly type: 'qrcode'
	readonly name: string
	readonly content: string | null
} & Partial<{
	readonly props: Omit<QrCodeProps, 'value'>
}>

export type SupportMethod = ExternalSupportMethod | ImageSupportMethod | QRCodeSupportMethod