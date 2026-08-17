import { Locales } from "./app/enums/i18n";

export default defineNuxtConfig({
    i18n: {
        defaultLocale: Locales.ChineseSimplified,
        locales: [
            {
                code: Locales.English,
                name: "English",
            },
            {
                code: Locales.ChineseSimplified,
                name: "简体中文",
            },
        ],
        detectBrowserLanguage: {
            alwaysRedirect: true,
            cookieCrossOrigin: true,
            cookieSecure: true,
            fallbackLocale: Locales.ChineseSimplified,
        },
    },
});