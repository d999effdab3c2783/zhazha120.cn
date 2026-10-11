import { decodeQR } from 'qr/decode.js'
import sharp from 'sharp'

export const read = async (path: string) => {
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