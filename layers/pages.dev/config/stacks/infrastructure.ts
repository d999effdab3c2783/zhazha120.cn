import type { Stack } from "../../app/types/dev";

// @unocss-include

export default {
    sort: 4,

    name: {
        localeKey: "pages.dev:stacks:infrastructure",
    },

    items: [
        {
            name: "Caddy",
            icon: "i-catppuccin:caddy",
            href: "https://caddyserver.com",
        },
        {
            name: "MySQL",
            icon: "i-devicon:mysql",
            href: "https://mysql.com",
        },
        {
            name: "MariaDB",
            icon: "i-devicon:mariadb",
            href: "https://mariadb.org",
        },
        {
            name: "PostgreSQL",
            icon: "i-logos:postgresql",
            href: "https://postgresql.org",
        },
        {
            name: "Redis",
            icon: "i-devicon:redis",
            href: "https://redis.io",
        },
        {
            name: "Memcached",
            icon: "i-devicon:memcached",
            href: "https://memcached.org",
        },
        {
            name: "OpenList",
            icon: "i-custom:openlist",
            href: "https://oplist.org",
        },
    ],
} satisfies Stack;