export default defineAppConfig<{
    readonly misc: {
        readonly friend_links: {
            readonly logo: {
                readonly src: string | null;
                readonly href: string;
            };

            readonly name: string;
            readonly description: string | null;
            readonly href: string;
        }[];
    };
}>({
    misc: {
        friend_links: [
            {
                logo: {
                    src: "https://abnormalcat.cn/_nuxt/avatar.CISg_1_-.png",
                    href: new URL(
                        "../app/assets/friend_links/abnormalcat.bin",
                        import.meta.url,
                    ).toString(),
                },

                name: "Abnormal Cat",
                description: null,
                href: "https://abnormalcat.cn",
            },
            {
                logo: {
                    src: "https://kclub-phost-1313107835.cos.ap-nanjing.myqcloud.com/Phost/smallkid/working.webp",
                    href: new URL(
                        "../app/assets/friend_links/kclub.bin",
                        import.meta.url,
                    ).toString(),
                },

                name: "迷失的小K",
                description: "感受编程乐趣，畅游代码海洋",
                href: "https://blog.kclub.tech",
            },
            {
                logo: {
                    src: "https://oss-fz.silverdragon.cn/loongapisources/2025/06/28/685fe4697dcc1.jpg",
                    href: new URL(
                        "../app/assets/friend_links/silverdragon.bin",
                        import.meta.url,
                    ).toString(),
                },

                name: "应龙笔记",
                description: "应龙笔记是一个专注于知识分享的网站",
                href: `https://www.silverdragon.cn?link={domain}`,
            },
            {
                logo: {
                    src: "https://sharpice.top/favicon.ico",
                    href: new URL(
                        "../app/assets/friend_links/sharpice.bin",
                        import.meta.url,
                    ).toString(),
                },

                name: "锐龙的小窝",
                description: "锐冰的个人博客",
                href: "https://blog.sharpice.top",
            },
            {
                logo: {
                    src: "https://langya.io/favicon.ico",
                    href: new URL(
                        "../app/assets/friend_links/langya.bin",
                        import.meta.url,
                    ).toString(),
                },

                name: "LangYa466",
                description: null,
                href: "https://langya.io?redirect={domain}",
            },
            {
                logo: {
                    src: "https://blog.fqilin.top/img/avatar.png",
                    href: new URL(
                        "../app/assets/friend_links/fqilin.bin",
                        import.meta.url,
                    ).toString(),
                },

                name: "F_Qilin",
                description: null,
                href: "https://blog.fqilin.top",
            },
            {
                logo: {
                    src: "https://img.linfun.top/imgapp/CxDragon-big-heade.png",
                    href: new URL(
                        "../app/assets/friend_links/linfun.bin",
                        import.meta.url,
                    ).toString(),
                },

                name: "是只林风呐",
                description: "-来点奇奇怪怪的- < )",
                href: "https://linfun.top",
            },
            {
                logo: {
                    src: "https://koto.cc/_assets/koto-cc-header_1024.b2W8i3OQ_Z1QNITL.webp",
                    href: new URL(
                        "../app/assets/friend_links/koto.bin",
                        import.meta.url,
                    ).toString(),
                },

                name: "koto's site",
                description: "koto 的灌水站",
                href: "https://koto.cc",
            },
            {
                logo: {
                    src: "https://img.linfun.top/imgapp/xxxxxxx.png", // TODO: 借林风的
                    href: new URL(
                        "../app/assets/friend_links/xxandcc.bin",
                        import.meta.url,
                    ).toString(),
                },

                name: "西西のBlog",
                description: "嘻嘻西西CC吸吸",
                href: "https://xxand.cc",
            },
            {
                logo: {
                    src: "https://attach.dracalon.com/2025/09/17/25.6.15-2.png",
                    href: new URL(
                        "../app/assets/friend_links/dracowyn.bin",
                        import.meta.url,
                    ).toString(),
                },

                name: "Dracowyn",
                description: "愿飞龙常入你梦乡",
                href: "https://dracowyn.com",
            },
            {
                logo: {
                    src: "https://blog.fmyron.com/img/avatar.png",
                    href: new URL(
                        "../app/assets/friend_links/fmyron.bin",
                        import.meta.url,
                    ).toString(),
                },

                name: "洺渊的小窝",
                description: "过去已成过去，将来还是将来，而我们能改变的只有现在。",
                href: "https://blog.fmyron.com",
            },
            {
                logo: {
                    src: "https://blog.guaizai.top/img/fluid.png",
                    href: new URL(
                        "../app/assets/friend_links/guaizai.bin",
                        import.meta.url,
                    ).toString(),
                },

                name: "GuaiZai's blog",
                description: "Tech inspires~!",
                href: "https://blog.guaizai.top",
            },
            {
                logo: {
                    src: "https://blog.mcxiafeng.top/images/avatar.webp",
                    href: new URL(
                        "../app/assets/friend_links/mcxiafeng.bin",
                        import.meta.url,
                    ).toString(),
                },

                name: "夏枫的猫窝w",
                description: "一只会敲代码的笨笨猫咪xmx",
                href: "https://blog.mcxiafeng.top",
            },
            {
                logo: {
                    src: "https://image.179.life/link/avatars/invert-viewer.webp",
                    href: new URL(
                        "../app/assets/friend_links/viewer.bin",
                        import.meta.url,
                    ).toString(),
                },

                name: "a small online lab",
                description: "致敬想象与创造力！",
                href: "https://invert-viewer.179.life",
            },
            {
                logo: {
                    src: "https://cdn2.lnk.bi/profilepics/-2729436_20260510881.png",
                    href: new URL(
                        "../app/assets/friend_links/maobing.bin",
                        import.meta.url,
                    ).toString(),
                },

                name: "maobing's sanctuary",
                description: "我是小🐱",
                href: "https://maobing-web-new.netlify.app",
            },
        ],
    },
});