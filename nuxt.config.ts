import AutoImport from "unplugin-auto-import/vite";
import { NaiveUiResolver } from "unplugin-vue-components/resolvers";
import Components from "unplugin-vue-components/vite";

export default defineNuxtConfig({
    compatibilityDate: "latest",
    ssr: false,
    modules: ["@vueuse/nuxt", "@unocss/nuxt"],
    vite: {
        plugins: [
            AutoImport({
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
                resolvers: [NaiveUiResolver()],
            }),
        ],
    },
});