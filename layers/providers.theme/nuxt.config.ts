import { Locales } from "../providers.i18n/app/enums/i18n";

export default defineNuxtConfig({
    css: [
        "@unocss/reset/sanitize/sanitize.css",
        "@unocss/reset/sanitize/assets.css",

        "#layers/providers.theme/app/styles/global.scss",
    ],
    i18n: {
        locales: [
            {
                code: Locales.English,
                file: "en.json",
            },
            {
                code: Locales.ChineseSimplified,
                file: "zh-CN.json",
            },
        ],
    },
    imports: {
        dirs: ["#layers/providers.theme/app/stores"],
    },
});