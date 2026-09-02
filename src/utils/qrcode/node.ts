import { readFile } from 'node:fs/promises';
import { decodeQR } from 'qr/decode.js';
import webp from 'webp-wasm';

import type { ReadResult } from '@/utils/qrcode';

export const read = async (path: string): ReadResult => {
	const raw = await readFile(path);
	const image = await webp.decode(raw);

	return decodeQR(image);
};