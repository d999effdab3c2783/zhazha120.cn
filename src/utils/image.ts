import { isNullish } from 'remeda'

export const convertWebp = async (url: string, quality = 1) => {
	return await new Promise<Blob>(resolve => {
		const image = new Image()

		image.addEventListener('load', async () => {
			const canvas = document.createElement('canvas')

			canvas.width = image.naturalWidth
			canvas.height = image.naturalHeight

			const context = canvas.getContext('2d')

			if ( isNullish(context) ) {
				return
			}

			context.drawImage(image, 0, 0)

			canvas.toBlob(blob => {
				if ( isNullish(blob) ) {
					return
				}

				resolve(blob)
			}, 'image/webp', quality)
		}, {
			once: true
		})

		image.crossOrigin = 'anonymous'
		image.src = url
	})
}