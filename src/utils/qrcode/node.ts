import jsQR from 'jsqr';
import { isNonNullish } from 'remeda';
import type { ReadResult } from '@/utils/qrcode';
import { Jimp } from 'jimp';

export const read = async (path: string): ReadResult => {
	const image = await Jimp.read(path);

	const result = jsQR(
		// @ts-expect-error
		image.bitmap.data,
		image.bitmap.width,
		image.bitmap.height,
	);

	if (isNonNullish(result)) {
		return result.data;
	}
};