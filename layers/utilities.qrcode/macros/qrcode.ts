import { defineMacro } from "unplugin-macros";
import { readQRCodeBrowser, readQRCodeNode } from "../app/utils/qrcode.ts";

export const read = defineMacro(async (input: string, base = import.meta.url) => {
    const url = new URL(input, base).toString();

    if (typeof window === "undefined") {
        const path = url.split("file://").at(-1) ?? url;

        return await readQRCodeNode(path);
    }

    return await readQRCodeBrowser(url);
});