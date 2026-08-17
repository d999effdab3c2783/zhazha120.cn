import type { Plugin } from "vite";
import sharp from "sharp";

export default () => {
    const createLogger = (type: string) => (message: string) => console.log(`[${type}] ${message}`);

    return {
        name: "customize",
        enforce: "post",
        apply: "build",

        async generateBundle(outputOptions, bundle) {
            const print = createLogger("图片处理");

            await Promise.all(
                Object.entries(bundle)
                    .filter(
                        ([fileName, asset]) =>
                            asset.type === "asset" && fileName.toLowerCase().endsWith(".bin"),
                    )
                    .map(async ([fileName, asset]) => {
                        if (asset.type === "asset") {
                            const originalFileName = asset.originalFileNames.join("/");

                            try {
                                print(`当前: ${originalFileName} -> ${fileName}`);

                                const sourceBuffer = Buffer.isBuffer(asset.source)
                                    ? asset.source
                                    : Buffer.from(asset.source);

                                asset.source = await sharp(sourceBuffer)
                                    .webp({
                                        quality: 10,
                                    })
                                    .toBuffer();
                            } catch (e) {
                                const message = String(e);

                                print(`${originalFileName} -> ${fileName} | 异常: ${message}`);
                            }
                        }
                    }),
            );
        },
    } satisfies Plugin;
};