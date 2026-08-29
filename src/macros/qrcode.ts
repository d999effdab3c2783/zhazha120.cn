import { defineMacro } from 'unplugin-macros';

import { read as browserRead } from '@/utils/qrcode/browser';
import { read as nodeRead } from '@/utils/qrcode/node';

export const read = defineMacro(async (input: string, base: string | URL = import.meta.url) => {
	const url = new URL(input, base).toString();

	if (globalThis.process === undefined) {
		return browserRead(url);
	}

	const path = url.split('file://').at(-1) ?? url;

	return nodeRead(path);
});