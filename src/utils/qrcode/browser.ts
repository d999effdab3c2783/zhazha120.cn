import { decodeQR } from 'qr/decode.js'
import { isNullish } from 'remeda'

import type { ReadResult } from '@/utils/qrcode'

export const read = async (src: string): ReadResult => {
	const response = await fetch(src)
	const blob = await response.blob()

	const bitmap = await createImageBitmap(blob)
	const canvas = new OffscreenCanvas(bitmap.width, bitmap.height)
	const context = canvas.getContext('2d')

	if (isNullish(context)) {
		return undefined
	}

	context.drawImage(bitmap, 0, 0)

	const imageData = context.getImageData(0, 0, bitmap.width, bitmap.height)

	return decodeQR(imageData)
}