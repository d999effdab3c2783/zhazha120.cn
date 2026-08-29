import { BrowserQRCodeReader } from '@zxing/browser';

import type { ReadResult } from '@/utils/qrcode';

export const read = async (src: string): ReadResult => {
	try {
		const reader = new BrowserQRCodeReader();
		const decoded = await reader.decodeFromImageUrl(src);

		return decoded.getText();
	} catch {}
};