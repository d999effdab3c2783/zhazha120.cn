import { Locales } from "../providers.i18n/app/enums/i18n.ts";

export default defineNuxtConfig({
    $production: {
        ignore: ["layers/utilities.assets/**"],
    },
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
});