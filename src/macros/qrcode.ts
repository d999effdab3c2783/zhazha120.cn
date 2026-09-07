import type { MacroContext } from 'unplugin-macros'

import { dirname, resolve } from 'node:path'
import { isNonNullish } from 'remeda'
import { defineMacro } from 'unplugin-macros'

import { read as browserRead } from '@/utils/qrcode/browser'
import { read as nodeRead } from '@/utils/qrcode/node'

async function autoRead(input: string) {
	// @ts-ignore
	// oxlint-disable-next-line typescript/no-unsafe-type-assertion
	const that = this as MacroContext

	if (isNonNullish(globalThis.process)) {
		const base = dirname(that.id)
		const path = resolve(base, input)

		return await nodeRead(path)
	}

	const base = import.meta.url
	const url = new URL(input, base).toString()

	return await browserRead(url)
}

export const read = defineMacro(autoRead)