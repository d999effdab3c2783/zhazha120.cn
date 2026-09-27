import { decodeQR } from 'qr/decode.js'
import sharp from 'sharp'

import type { QRCodeReadResult } from '~/types/qrcode'

export const read = async (path: string): QRCodeReadResult => {
	const image = sharp(path)
	const raw = image.raw()

	const { data, info } = await raw.toBuffer({
		resolveWithObject: true
	})

	return decodeQR({
		width: info.width,
		height: info.height,

		data
	})
}