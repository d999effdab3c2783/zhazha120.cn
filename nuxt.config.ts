import AutoImport from "unplugin-auto-import/vite";
import Customize from "./plugins/vite/customize";
import { NaiveUiResolver } from "unplugin-vue-components/resolvers";
import Components from "unplugin-vue-components/vite";
import Macros from "unplugin-macros/vite";
import { resolve } from "node:path";
import Info from "unplugin-info/vite";

export default defineNuxtConfig({
    compatibilityDate: "latest",
    css: ["lenis/dist/lenis.css"],
    modules: ["@nuxtjs/i18n", "@pinia/nuxt", "@vueuse/nuxt", "lenis/nuxt", "@unocss/nuxt"],
    nitro: {
        preset: "static",
    },
    ssr: false,
    vite: {
        plugins: [
            Customize(),
            Macros({
                virtualModules: true,
            }),
            Info(),
            AutoImport({
                dts: resolve(__dirname, "app", "types", "auto-imports.d.ts"),
                imports: [
                    {
                        "naive-ui": [
                            "useDialog",
                            "useMessage",
                            "useModal",
                            "useNotification",
                            "useLoadingBar",
                        ],
                    },
                ],
            }),
            Components({
                dts: resolve(__dirname, "app", "types", "components.d.ts"),
                resolvers: [NaiveUiResolver()],
            }),
        ],
    },
});