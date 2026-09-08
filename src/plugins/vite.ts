import type { Plugin } from 'vite'

import minifyHtml from '@minify-html/node'
import sharp from 'sharp'

export default (): Plugin[] => {
	return [
		{
			name: 'customize:compress-bin',
			enforce: 'post',
			apply: 'build',

			async generateBundle(_, bundle) {
				const filteredBundles = Object.entries(bundle).filter(([fileName, asset]) => {
					return 'asset' === asset.type && fileName.toLowerCase().endsWith('.bin')
				})

				let processedCounter = 0

				await Promise.all(
					filteredBundles.map(async ([__, asset], index) => {
						if ('asset' === asset.type) {
							const originalFileName = asset.originalFileNames.join('/')

							try {
								const sourceBuffer = Buffer.isBuffer(asset.source)
									? asset.source
									: Buffer.from(asset.source)

								asset.source = await sharp(sourceBuffer)
									// oxlint-disable-next-line unicorn/no-null
									.resize(1920, null, {
										withoutEnlargement: true
									})
									.webp({
										effort: 6,
										nearLossless: true,
										quality: 100,
										smartDeblock: true,
										smartSubsample: true
									})
									.toBuffer()

								// oxlint-disable-next-line no-console
								console.log(
									`[${index}] ${originalFileName}`,
									`(${++processedCounter}/${filteredBundles.length})`
								)
							} catch (error) {
								const message = String(error)

								// oxlint-disable-next-line no-console
								console.error(
									message,

									`[${index}] ${originalFileName}`,
									`(${++processedCounter}/${filteredBundles.length})`
								)
							}
						}
					})
				)
			}
		},
		{
			name: 'customize:minify-html',
			enforce: 'post',
			apply: 'build',

			transformIndexHtml(html) {
				return minifyHtml
					.minify(Buffer.from(html), {
						minify_css: true,
						minify_js: true
					})
					.toString()
			}
		}
	]
}