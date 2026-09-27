import { createResolver } from '@nuxt/kit'
import { isNotNil } from 'es-toolkit'
import type { MacroContext } from 'unplugin-macros'
import { defineMacro } from 'unplugin-macros'

import { read as browserRead } from '@/utils/qrcode/browser'
import { read as nodeRead } from '@/utils/qrcode/node'

async function autoRead(input: string) {
	// @ts-ignore
	// oxlint-disable-next-line typescript/no-unsafe-type-assertion
	const that = this as MacroContext

	if (isNotNil(globalThis.process)) {
		const resolver = createResolver(that.id)
		const resolvedPath = await resolver.resolvePath(input)

		return await nodeRead(resolvedPath)
	}

	return await browserRead(new URL(input, import.meta.url).href)
}

export const read = defineMacro(autoRead)