import { isArray, isNonNullish } from "remeda";
import type { Asset } from "#layers/providers.assets/app/types/assets";
import { mkdir, writeFile } from "node:fs/promises";
import { dirname } from "node:path";

export default defineEventHandler(async (event) => {
    if (event.method === "POST") {
        const data = await readBody<
            (Asset & {
                readonly path: string;
            })[]
        >(event);

        const validate = (asset: (typeof data)[number]) =>
            isNonNullish(asset.src) && isNonNullish(asset.href) && isNonNullish(asset.path);

        if (isArray(data) && data.every(validate)) {
            await Promise.all(
                data.map(async (asset) => {
                    const response = await fetch(asset.src);

                    if (!response.ok) {
                        return;
                    }

                    const arrayBuffer = await response.arrayBuffer();
                    const buffer = Buffer.from(arrayBuffer);

                    await mkdir(dirname(asset.path), {
                        recursive: true,
                    });

                    await writeFile(asset.path, buffer);
                }),
            );

            return 1;
        }

        return -2;
    }

    return -1;
});