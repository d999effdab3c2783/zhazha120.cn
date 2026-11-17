import { defineNuxtModule, extendViteConfig } from '@nuxt/kit'
import { createHash } from 'node:crypto'
import { access, mkdir, readFile, writeFile } from 'node:fs/promises'
import { join, resolve } from 'node:path'
import sharp from 'sharp'

const logger = (message: string) => {
	console.log(`[bin -> sharp] ${message}`)
}

export default defineNuxtModule({
	meta: {
		name: 'customize'
	},
	setup() {
		extendViteConfig(config => {
			config.plugins ??= []
			config.plugins.push({
				apply: 'build',
				enforce: 'post',
				async generateBundle(outputOptions, bundle) {
					const CACHE_DIR = resolve(import.meta.dirname, '..', 'node_modules', '.cache', 'customize', 'sharp')

					let i = 0

					const bundles = Object.entries(bundle).filter(
						([fileName, asset]) => asset.type === 'asset' && fileName.toLowerCase().endsWith('.bin')
					)

					await Promise.all(
						bundles.map(async ([fileName, asset], index) => {
							if (asset.type === 'asset') {
								const originalFileName = asset.originalFileNames.join('/')

								try {
									logger(`[${index + 1}] ${originalFileName} -> ${fileName}`)

									const sha1FileName = createHash('sha1').update(asset.source).digest('hex')

									const cacheFilePath = join(CACHE_DIR, sha1FileName)

									const successMessage = `[${index + 1}] ${originalFileName} -> ${fileName} Success (${++i}/${bundles.length})`

									try {
										await access(cacheFilePath)
										asset.source = await readFile(cacheFilePath)

										logger(successMessage + ' (cached)')
									} catch {
										const sourceBuffer = Buffer.isBuffer(asset.source)
											? asset.source
											: Buffer.from(asset.source)

										const processed = await sharp(sourceBuffer)
											.resize({
												fit: 'inside',
												height: 1920,
												width: 1920,
												withoutEnlargement: true
											})
											.webp({
												alphaQuality: 85,
												effort: 6,
												nearLossless: false,
												quality: 75,
												smartSubsample: true
											})
											.toBuffer()

										await mkdir(resolve(CACHE_DIR), {
											recursive: true
										})

										await writeFile(cacheFilePath, processed)

										asset.source = processed

										logger(successMessage)
									}
								} catch (e) {
									const message = String(e)

									logger(`[${index + 1}] ${originalFileName} -> ${fileName} | Error: ${message}`)
								}
							}
						})
					)
				},
				name: 'customize'
			})
		})
	}
})