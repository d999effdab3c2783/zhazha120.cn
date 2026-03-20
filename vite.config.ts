import Vue from "@vitejs/plugin-vue";
import { resolve } from "node:path";
import UnoCSS from "unocss/vite";
import Info from "unplugin-info/vite";
import { defineConfig } from "vite";

export default defineConfig({
    publicDir: resolve(__dirname, "src/public"),
    build: {
        assetsInlineLimit: 0,
        rolldownOptions: {
            output: {
                hashCharacters: "base36",
                assetFileNames: "assets/[hash:21][extname]",
                entryFileNames: "assets/[hash:21].js",
                chunkFileNames: "assets/[hash:21].js",
                codeSplitting: {
                    groups: [
                        {
                            name: (id) => id.split("node_modules")[1].split("/")[1],
                            test: /node_modules/,
                        },
                    ],
                },
            },
        },
    },
    resolve: {
        alias: {
            "@": resolve(__dirname, "src"),
            "vue-bundler": "vue/dist/vue.esm-bundler.js",
        },
    },
    plugins: [Info(), UnoCSS(), Vue()],
});