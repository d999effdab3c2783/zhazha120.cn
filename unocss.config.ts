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
        presetIcons(),
        presetWebFonts({
            provider: "none",
        }),
    ],
    transformers: [transformerCompileClass(), transformerDirectives(), transformerVariantGroup()],
});