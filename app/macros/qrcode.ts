import { createResolver } from '@nuxt/kit'
import { isNotNil } from 'es-toolkit'
import type { MacroContext } from 'unplugin-macros'
import { defineMacro } from 'unplugin-macros'

import { read as browserRead } from '@/utils/qrcode/browser'
import { read as nodeRead } from '@/utils/qrcode/node'

async function autoRead(this: MacroContext, input: string) {
	if (isNotNil(globalThis.process)) {
		const resolver = createResolver(this.id)
		const resolvedPath = await resolver.resolvePath(input)

		return await nodeRead(resolvedPath)
	}

	return await browserRead(new URL(input, import.meta.url).href)
}

export const read = defineMacro(autoRead)