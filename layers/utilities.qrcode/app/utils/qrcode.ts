import { BrowserQRCodeReader } from "@zxing/browser";
import { isNonNullish } from "remeda";
import jsQR from "jsqr";
import { Jimp } from "jimp";

export const readQRCodeBrowser = async (src: string) =>
    await new BrowserQRCodeReader()
        .decodeFromImageUrl(src)
        .then((decoded) => decoded.getText())
        .catch(() => null);

export const readQRCodeNode = async (path: string) => {
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

    return null;
};