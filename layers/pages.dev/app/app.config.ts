// @unocss-include

export default defineAppConfig<{
    readonly dev: {
        readonly codetime: {
            readonly user_id: number;

            readonly widgets: {
                readonly badge: {
                    readonly coding_time: string;
                    readonly tokens: string;
                };

                readonly top: {
                    readonly languages: string;
                    readonly projects: string;
                };

                readonly status: string;
                readonly calendar: string;
                readonly trend: string;
                readonly usage: string;
            };
        };

        readonly stacks: {
            readonly name: string;

            readonly items: {
                readonly name: string;
                readonly icon: string;
                readonly href: string;
            }[];
        }[];

        readonly organizations: {
            readonly avatar: {
                readonly src: string;
                readonly href: string;
            };

            readonly name: string;
            readonly href: string;
        }[];

        readonly projects: {
            readonly name: string;
            readonly href: string;
        }[];
    };
}>({
    dev: {
        codetime: (() => {
            const user_id = 2270;

            return {
                domain: "codetime.dev",
                user_id,

                widgets: {
                    badge: {
                        coding_time:
                            "https://shields.jannchie.com/endpoint?style=for-the-badge&url=" +
                            encodeURIComponent(
                                `https://codetime.dev/v3/users/shield?uid=${user_id}`,
                            ),
                        tokens:
                            "https://shields.jannchie.com/endpoint?style=for-the-badge&url=" +
                            encodeURIComponent(
                                `https://codetime.dev/v3/users/shield?uid=${user_id}&metric=tokens`,
                            ),
                    },
                    top: {
                        languages: `https://codetime.dev/api/widgets/donut.svg?uid=${user_id}&theme={theme}`,
                        projects: `https://codetime.dev/api/widgets/donut.svg?uid=${user_id}&mode=projects&theme={theme}`,
                    },
                    status: `https://codetime.dev/api/widgets/status.svg?uid=${user_id}&theme={theme}`,
                    calendar: `https://codetime.dev/api/widgets/calendar.svg?uid=${user_id}&theme={theme}`,
                    trend: `https://codetime.dev/api/widgets/trend.svg?uid=${user_id}&theme={theme}`,
                    usage: `https://codetime.dev/api/widgets/usage.svg?uid=${user_id}&theme={theme}`,
                },
            };
        })(),
        stacks: [
            {
                name: "开发工具",

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
            },
            {
                name: "前端",

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
            },
            {
                name: "后端",

                items: [
                    {
                        name: "Node.js",
                        icon: "i-devicon:nodejs",
                        href: "https://nodejs.org",
                    },
                    {
                        name: "Python",
                        icon: "i-logos:python",
                        href: "https://python.org",
                    },
                    {
                        name: "C#",
                        icon: "i-devicon:csharp",
                        href: "https://learn.microsoft.com/zh-cn/dotnet/csharp",
                    },
                    {
                        name: "Java",
                        icon: "i-logos:java",
                        href: "https://java.com",
                    },
                    {
                        name: "PHP",
                        icon: "i-logos:php",
                        href: "https://php.net",
                    },
                    {
                        name: "Go",
                        icon: "i-logos:go",
                        href: "https://go.dev",
                    },
                    {
                        name: "Composer",
                        icon: "i-logos:composer",
                        href: "https://getcomposer.org",
                    },
                    {
                        name: "Laravel",
                        icon: "i-logos:laravel",
                        href: "https://laravel.com",
                    },
                ],
            },
            {
                name: "基础设施",

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
            },
            {
                name: "运维",

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
            },
        ],
        organizations: [
            {
                avatar: {
                    src: "https://avatars.githubusercontent.com/u/72001477",
                    href: new URL(
                        "../app/assets/organizations/72001477.bin",
                        import.meta.url,
                    ).toString(),
                },

                name: "26F Studio",
                href: "https://github.com/26F-Studio",
            },
            {
                avatar: {
                    src: "https://avatars.githubusercontent.com/u/168070538",
                    href: new URL(
                        "../app/assets/organizations/168070538.bin",
                        import.meta.url,
                    ).toString(),
                },

                name: "A Minos",
                href: "https://github.com/A-Minos",
            },
            {
                avatar: {
                    src: "https://avatars.githubusercontent.com/u/108103310",
                    href: new URL(
                        "../app/assets/organizations/108103310.bin",
                        import.meta.url,
                    ).toString(),
                },

                name: "Z Team",
                href: "https://github.com/c794b7b0331e4cf3",
            },
            {
                avatar: {
                    src: "https://avatars.githubusercontent.com/u/102524977",
                    href: new URL(
                        "../app/assets/organizations/102524977.bin",
                        import.meta.url,
                    ).toString(),
                },

                name: "Endless Spike Studio",
                href: "https://github.com/Endless-Spike-Studio",
            },
            {
                avatar: {
                    src: "https://avatars.githubusercontent.com/u/103052241",
                    href: new URL(
                        "../app/assets/organizations/103052241.bin",
                        import.meta.url,
                    ).toString(),
                },

                name: "FurDevsCN",
                href: "https://github.com/FurDevsCN",
            },
            {
                avatar: {
                    src: "https://avatars.githubusercontent.com/u/180642546",
                    href: new URL(
                        "../app/assets/organizations/180642546.bin",
                        import.meta.url,
                    ).toString(),
                },

                name: "FurryChatWorld",
                href: "https://github.com/FurryChatWorld",
            },
            {
                avatar: {
                    src: "https://avatars.githubusercontent.com/u/156998119",
                    href: new URL(
                        "../app/assets/organizations/156998119.bin",
                        import.meta.url,
                    ).toString(),
                },

                name: "PawTeamClub",
                href: "https://github.com/PawTeamClub",
            },
            {
                avatar: {
                    src: "https://avatars.githubusercontent.com/u/298097181",
                    href: new URL(
                        "../app/assets/organizations/298097181.bin",
                        import.meta.url,
                    ).toString(),
                },

                name: "GDTools",
                href: "https://github.com/GMDtools",
            },
        ],
        projects: [
            {
                name: "zhazha120.cn",
                href: "https://github.com/d999effdab3c2783/zhazha120.cn",
            },
            {
                name: "BitterSweet",
                href: "https://github.com/c794b7b0331e4cf3/BitterSweetNext",
            },
            {
                name: "Abnormal Cat 的个人网站",
                href: "https://github.com/Abnormal-Cat/abnormalcat.cn",
            },
            {
                name: "Paw Team 官网",
                href: "https://github.com/PawTeamClub/website",
            },
            {
                name: "与互的个人网站",
                href: "https://github.com/WOSHIZHAZHA120/pages.yuhu",
            },
            {
                name: "Techmino 在线词典",
                href: "https://github.com/26F-Studio/techmino-online-dict",
            },
            {
                name: "俄罗斯方块查询 Bot 模板 老",
                href: "https://github.com/A-Minos/tetris-stats-templates",
            },
            {
                name: "俄罗斯方块查询 Bot 模板 新",
                href: "https://github.com/A-Minos/tetris-stats-templates-new",
            },
            {
                name: "Endless Services 前端",
                href: "https://github.com/Endless-Spike-Studio/Endless-Services-Frontend",
            },
            {
                name: "Endless Services 运行时",
                href: "https://github.com/Endless-Spike-Studio/Endless-Services-Runtime",
            },
            {
                name: "Endless Services 后端",
                href: "https://github.com/Endless-Spike-Studio/Endless-Services-Backend",
            },
            {
                name: "Endless Services 连接器",
                href: "https://github.com/Endless-Spike-Studio/Endless-Services-Connector",
            },
            {
                name: "tetr.io plus (定制魔改)",
                href: "https://github.com/d999effdab3c2783/tetrio-plus",
            },
            {
                name: "OpenList 前端 (定制魔改)",
                href: "https://github.com/d999effdab3c2783/OpenList-Frontend",
            },
            {
                name: "墨趣诗坊",
                href: "https://github.com/c794b7b0331e4cf3/InkFunPoetryStudio",
            },
            {
                name: "tetr.io 汉化",
                href: "https://github.com/A-Minos/tetrio-chinese",
            },
        ],
    },
});