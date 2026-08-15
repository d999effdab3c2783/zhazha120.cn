// @unocss-include

import type { ButtonType } from "naive-ui";
import type { MaybeLocaleKey } from "#layers/providers.i18n/app/types/i18n";

export default defineAppConfig<{
    readonly self: {
        readonly avatar: {
            readonly src: string;
            readonly poke: MaybeLocaleKey;
        };

        readonly name: MaybeLocaleKey;
        readonly birthday: Date;

        readonly contacts: {
            readonly icon: string;
            readonly name: MaybeLocaleKey;
            readonly href: string;

            readonly comment?: MaybeLocaleKey;
        }[];

        readonly external_links: {
            readonly type?: ButtonType;

            readonly icon: string;
            readonly name: MaybeLocaleKey;
            readonly href: string;

            readonly comment?: MaybeLocaleKey;
        }[];
    };
}>({
    self: {
        avatar: {
            src: "/z.svg",
            poke: {
                localeKey: "pages.self:poke",
            },
        },
        name: {
            localeKey: "pages.self:nickname",
        },
        birthday: new Date("2006/5/7"),

        contacts: [
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
        ],
        external_links: [
            {
                type: "primary",

                icon: "i-tdesign:usergroup-add",
                name: {
                    localeKey: "pages.self:personal_group",
                },
                href: "https://qm.qq.com/cgi-bin/qm/qr?k=EKq625P5qpas9-m5lVFTDnyCgR1I9yPw&authKey=zqbyY33MW7xTvSEBm+fqVv7lrq3EhV7UuVPrYnQZTal9dQpkD9XM3ViHSu2QnGb3",

                comment: {
                    localeKey: "pages.self:personal_group.comment",
                },
            },
            {
                icon: "i-ant-design:cloud-download-outlined",
                name: {
                    localeKey: "pages.self:cloud_storage",
                },
                href: "https://pan.zhazha120.cn",
            },
        ],
    },
});