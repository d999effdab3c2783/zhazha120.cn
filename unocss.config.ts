import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import {
    defineConfig,
    presetIcons,
    presetWebFonts,
    presetWind4,
    transformerCompileClass,
    transformerDirectives,
    transformerVariantGroup,
} from "unocss";

export default defineConfig({
    presets: [
        presetWind4(),
        presetIcons({
            collections: {
                custom: {
                    openlist: readFileSync(
                        resolve(__dirname, "layers/pages.dev/app/assets/icons/openlist.svg"),
                        {
                            encoding: "utf-8",
                        },
                    ).toString(),
                },
            },
        }),
        presetWebFonts({
            provider: "none",
            fonts: {
                sans: ["v-zhazha120-sans"],
            },
        }),
    ],
    transformers: [transformerCompileClass(), transformerDirectives(), transformerVariantGroup()],
});