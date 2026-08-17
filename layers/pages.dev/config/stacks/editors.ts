import type { Stack } from "../../app/types/dev";

// @unocss-include

export default {
    name: {
        localeKey: "pages.dev:stacks:editors",
    },

    items: [
        {
            name: "IntelliJ IDEA",
            icon: "i-logos:intellij-idea",
            href: "https://www.jetbrains.com/idea",
        },
        {
            name: "WebStorm",
            icon: "i-logos:webstorm",
            href: "https://www.jetbrains.com/webstorm",
        },
        {
            name: "PhpStorm",
            icon: "i-logos:phpstorm",
            href: "https://www.jetbrains.com/phpstorm",
        },
        {
            name: "PyCharm",
            icon: "i-logos:pycharm",
            href: "https://www.jetbrains.com/pycharm",
        },
        {
            name: "GoLand",
            icon: "i-logos:goland",
            href: "https://www.jetbrains.com/goland",
        },
        {
            name: "Rider",
            icon: "i-logos:rider",
            href: "https://www.jetbrains.com/rider",
        },
        {
            name: "Visual Studio",
            icon: "i-logos:visual-studio",
            href: "https://visualstudio.com",
        },
        {
            name: "Visual Studio Code",
            icon: "i-logos:visual-studio-code",
            href: "https://code.visualstudio.com",
        },
        {
            name: "Git",
            icon: "i-devicon:git",
            href: "https://git-scm.com",
        },
    ],
} satisfies Stack;