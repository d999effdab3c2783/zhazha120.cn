// @unocss-include

import type { ButtonType } from "naive-ui";

export default defineAppConfig<{
    readonly self: {
        readonly avatar: {
            readonly src: string;
            readonly poke: string;
        };

        readonly name: string;
        readonly birthday: Date;

        readonly contacts: {
            readonly icon: string;
            readonly name: string;
            readonly href: string;

            readonly comment?: string;
        }[];

        readonly external_links: {
            readonly type?: ButtonType;

            readonly icon: string;
            readonly name: string;
            readonly href: string;

            readonly comment?: string;
        }[];
    };
}>({
    self: {
        avatar: {
            src: "/z.svg",
            poke: "戳哭了 哄不好了",
        },
        name: "渣渣120",
        birthday: new Date("2006/5/7"),

        contacts: [
            {
                icon: "i-ant-design:qq-outlined",
                name: "QQ",
                href: "https://qm.qq.com/q/GkUxK7PmmW",

                comment: "QQ 号: 2331281251",
            },
            {
                icon: "i-ant-design:mail-outlined",
                name: "邮箱",
                href: "contact@zhazha120.cn",
            },
            {
                icon: "i-tabler:brand-netease-music",
                name: "网易云音乐",
                href: "https://music.163.com/#/user/home?id=634000521",
            },
            {
                icon: "i-simple-icons:steam",
                name: "Steam",
                href: "https://steamcommunity.com/id/WOSHIZHAZHA120",

                comment: "好友代码: 485570157",
            },
            {
                icon: "i-simple-icons:bilibili",
                name: "哔哩哔哩",
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
                name: "个人群",
                href: "https://qm.qq.com/cgi-bin/qm/qr?k=EKq625P5qpas9-m5lVFTDnyCgR1I9yPw&authKey=zqbyY33MW7xTvSEBm+fqVv7lrq3EhV7UuVPrYnQZTal9dQpkD9XM3ViHSu2QnGb3",

                comment: [
                    "一些群 个人相关",
                    "答对问题自助入群 答案自己回去上滑看看这个网站介绍的是谁",
                    "无打扰 (没有莫名其妙的 @全体成员, 也不会发布群待办)",
                    "话题很杂 也许什么都聊",
                    "人多不一定热闹 看不懂也没关系",
                ].join("\n"),
            },
            {
                icon: "i-ant-design:cloud-download-outlined",
                name: "云盘",
                href: "https://pan.zhazha120.cn",
            },
        ],
    },
});