import { isNil } from 'es-toolkit'
import { decodeQR } from 'qr/decode.js'

export const read = async (src: string) => {
	const response = await fetch(src)
	const blob = await response.blob()

	const bitmap = await createImageBitmap(blob)
	const canvas = new OffscreenCanvas(bitmap.width, bitmap.height)
	const context = canvas.getContext('2d')

	if (isNil(context)) {
		return null
	}

	context.drawImage(bitmap, 0, 0)

	const imageData = context.getImageData(0, 0, bitmap.width, bitmap.height)

	return decodeQR(imageData)
}