import type { Contact } from "../app/types/self";

// @unocss-include

export default [
    {
        icon: "i-ant-design:qq-outlined",
        name: "QQ",
        href: "https://qm.qq.com/q/GkUxK7PmmW",

        comment: {
            localeKey: "pages.self:qq.comment",
            params: {
                qq: 2331281251,
            },
        },
    },
    {
        icon: "i-ant-design:mail-outlined",
        name: {
            localeKey: "pages.self:email",
        },
        href: "contact@zhazha120.cn",
    },
    {
        icon: "i-tabler:brand-netease-music",
        name: {
            localeKey: "pages.self:netease_music",
        },
        href: "https://music.163.com/#/user/home?id=634000521",
    },
    {
        icon: "i-simple-icons:steam",
        name: "Steam",
        href: "https://steamcommunity.com/id/WOSHIZHAZHA120",

        comment: {
            localeKey: "pages.self:steam.comment",
            params: {
                code: 485570157,
            },
        },
    },
    {
        icon: "i-simple-icons:bilibili",
        name: {
            localeKey: "pages.self:bilibili",
        },
        href: "https://space.bilibili.com/24267334",
    },
    {
        icon: "i-ant-design:github-outlined",
        name: "Github",
        href: "https://github.com/WOSHIZHAZHA120",
    },
] satisfies Contact[];