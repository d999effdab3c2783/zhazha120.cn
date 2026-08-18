import type { Stack } from "../../app/types/dev";

// @unocss-include

export default {
    sort: 5,

    name: {
        localeKey: "pages.dev:stacks:operations",
    },

    items: [
        {
            name: "Docker",
            icon: "i-devicon:docker",
            href: "https://docker.com",
        },
        {
            name: "Podman",
            icon: "i-devicon:podman",
            href: "https://podman.io",
        },
    ],
} satisfies Stack;