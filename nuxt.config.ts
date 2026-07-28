import AutoImport from "unplugin-auto-import/vite";
import { NaiveUiResolver } from "unplugin-vue-components/resolvers";
import Components from "unplugin-vue-components/vite";
import { resolve } from "node:path";
import Info from "unplugin-info/vite";

export default defineNuxtConfig({
    compatibilityDate: "latest",
    css: ["lenis/dist/lenis.css"],
    modules: ["@pinia/nuxt", "@vueuse/nuxt", "lenis/nuxt", "@unocss/nuxt"],
    ssr: false,
    vite: {
        plugins: [
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