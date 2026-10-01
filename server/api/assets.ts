import { mkdir, writeFile } from 'fs/promises'
import { dirname } from 'path'

import { isNotNil } from 'es-toolkit'

import { defineEventHandler, readBody, setResponseStatus } from '#nuxt-scripts/h3'

export default defineEventHandler(async event => {
	if (event.method === 'PATCH') {
		const data = await readBody(event)

		if (Array.isArray(data)) {
			if (
				data.every(item => {
					return isNotNil(item.url) && isNotNil(item.path)
				})
			) {
				await Promise.all(
					data.map(async item => {
						const response = await fetch(item.url)

						if (!response.ok) {
							return
						}

						const arrayBuffer = await response.arrayBuffer()
						const buffer = Buffer.from(arrayBuffer)

						await mkdir(dirname(item.path), {
							recursive: true
						})

						await writeFile(item.path, buffer)
					})
				)

				return
			}
		}
	}

	setResponseStatus(event, 400)
})