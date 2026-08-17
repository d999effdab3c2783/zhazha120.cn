import type { Stack } from "../../app/types/dev";

// @unocss-include

export default {
    name: {
        localeKey: "pages.dev:stacks:frontend",
    },

    items: [
        {
            name: "Yarn",
            icon: "i-logos:yarn",
            href: "https://yarnpkg.com",
        },
        {
            name: "Pnpm",
            icon: "i-logos:pnpm",
            href: "https://pnpm.io",
        },
        {
            name: "Bun",
            icon: "i-devicon:bun",
            href: "https://bun.sh",
        },
        {
            name: "TypeScript",
            icon: "i-devicon:typescript",
            href: "https://typescriptlang.org",
        },
        {
            name: "Vite",
            icon: "i-logos:vitejs",
            href: "https://vitejs.dev",
        },
        {
            name: "Sass & Scss",
            icon: "i-logos:sass",
            href: "https://sass-lang.com",
        },
        {
            name: "TailwindCSS",
            icon: "i-devicon:tailwindcss",
            href: "https://tailwindcss.com",
        },
        {
            name: "UnoCSS",
            icon: "i-logos:unocss",
            href: "https://unocss.dev",
        },
        {
            name: "Vue",
            icon: "i-logos:vue",
            href: "https://vuejs.org",
        },
        {
            name: "Nuxt",
            icon: "i-devicon:nuxtjs",
            href: "https://nuxt.com",
        },
        {
            name: "Naive UI",
            icon: "i-logos:naiveui",
            href: "https://naiveui.com",
        },
    ],
} satisfies Stack;