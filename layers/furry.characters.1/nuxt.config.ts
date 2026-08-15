import { Locales } from "../providers.i18n/app/enums/i18n";

export default defineNuxtConfig({
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