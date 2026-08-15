// @unocss-include

import type { MaybeLocaleKey } from "#layers/providers.i18n/app/types/i18n";

export default defineAppConfig<{
    readonly dev: {
        readonly codetime: {
            readonly domain: string;
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
            readonly name: MaybeLocaleKey;

            readonly items: {
                readonly name: MaybeLocaleKey;
                readonly icon: string;
                readonly href: string;
            }[];
        }[];

        readonly organizations: {
            readonly avatar: {
                readonly src: string | null;
                readonly href: string;
            };

            readonly name: MaybeLocaleKey;
            readonly href: string;
        }[];

        readonly projects: {
            readonly name: MaybeLocaleKey;
            readonly href: string;
        }[];

        readonly awards: {
            readonly name: MaybeLocaleKey;
            readonly href: string | null;
        }[];
    };
}>({
    dev: {
        codetime: (() => {
            const base = `codetime.dev`;
            const user_id = 2270;

            return {
                domain: base,
                user_id,

                widgets: {
                    badge: {
                        coding_time:
                            "https://shields.jannchie.com/endpoint?style=for-the-badge&url=" +
                            encodeURIComponent(`https://${base}/v3/users/shield?uid=${user_id}`),
                        tokens:
                            "https://shields.jannchie.com/endpoint?style=for-the-badge&url=" +
                            encodeURIComponent(
                                `https://${base}/v3/users/shield?uid=${user_id}&metric=tokens`,
                            ),
                    },
                    top: {
                        languages: `https://${base}/api/widgets/donut.svg?uid=${user_id}&theme={theme}`,
                        projects: `https://${base}/api/widgets/donut.svg?uid=${user_id}&mode=projects&theme={theme}`,
                    },
                    status: `https://${base}/api/widgets/status.svg?uid=${user_id}&theme={theme}`,
                    calendar: `https://${base}/api/widgets/calendar.svg?uid=${user_id}&theme={theme}`,
                    trend: `https://${base}/api/widgets/trend.svg?uid=${user_id}&theme={theme}`,
                    usage: `https://${base}/api/widgets/usage.svg?uid=${user_id}&theme={theme}`,
                },
            };
        })(),
        stacks: [
            {
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
            },
            {
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
            },
            {
                name: {
                    localeKey: "pages.dev:stacks:backend",
                },

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
            },
            {
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
                name: {
                    localeKey: "pages.dev:projects:github.779598566.name",
                },
                href: "https://github.com/Abnormal-Cat/abnormalcat.cn",
            },
            {
                name: {
                    localeKey: "pages.dev:projects:github.878443044.name",
                },
                href: "https://github.com/PawTeamClub/website",
            },
            {
                name: {
                    localeKey: "pages.dev:projects:unknown.1.name",
                },
                href: "https://github.com/WOSHIZHAZHA120/pages.yuhu",
            },
            {
                name: {
                    localeKey: "pages.dev:projects:github.515593979.name",
                },
                href: "https://github.com/26F-Studio/techmino-online-dict",
            },
            {
                name: {
                    localeKey: "pages.dev:projects:github.795885114.name",
                },
                href: "https://github.com/A-Minos/tetris-stats-templates",
            },
            {
                name: {
                    localeKey: "pages.dev:projects:github.841543947.name",
                },
                href: "https://github.com/A-Minos/tetris-stats-templates-new",
            },
            {
                name: {
                    localeKey: "pages.dev:projects:github.864056419.name",
                },
                href: "https://github.com/Endless-Spike-Studio/Endless-Services-Frontend",
            },
            {
                name: {
                    localeKey: "pages.dev:projects:github.864387815.name",
                },
                href: "https://github.com/Endless-Spike-Studio/Endless-Services-Runtime",
            },
            {
                name: {
                    localeKey: "pages.dev:projects:github.497849256.name",
                },
                href: "https://github.com/Endless-Spike-Studio/Endless-Services-Backend",
            },
            {
                name: {
                    localeKey: "pages.dev:projects:github.967204269.name",
                },
                href: "https://github.com/Endless-Spike-Studio/Endless-Services-Connector",
            },
            {
                name: {
                    localeKey: "pages.dev:projects:github.1182454162.name",
                },
                href: "https://github.com/d999effdab3c2783/tetrio-plus",
            },
            {
                name: {
                    localeKey: "pages.dev:projects:unknown.2.name",
                },
                href: "https://github.com/d999effdab3c2783/OpenList-Frontend",
            },
            {
                name: {
                    localeKey: "pages.dev:projects:github.1217222916.name",
                },
                href: "https://github.com/c794b7b0331e4cf3/InkFunPoetryStudio",
            },
            {
                name: {
                    localeKey: "pages.dev:projects:github.1191545593.name",
                },
                href: "https://github.com/A-Minos/tetrio-chinese",
            },
            {
                name: {
                    localeKey: "pages.dev:projects:github.1284581081.name",
                },
                href: "https://github.com/GMDtools/Services",
            },
        ],
        awards: [
            {
                name: [
                    "蓝桥杯 第十六届",
                    "软件赛 | 职业院校组 | 省赛",
                    "Web 应用开发",
                    "一等奖",
                ].join("\n"),
                href: null,
            },
            {
                name: [
                    "蓝桥杯 第十六届",
                    "软件赛 | 职业院校组 | 国赛",
                    "Web 应用开发",
                    "一等奖",
                ].join("\n"),
                href: "https://lanqiao.cn/cup-sixteen",
            },
            {
                name: [
                    "江西省 职业院校技能大赛 2025",
                    "高职组 个人赛",
                    "Web 应用软件开发",
                    "一等奖",
                ].join("\n"),
                href: "https://zs.jxeduyun.com/certifiDetail?certificatesid=26010815212809383571",
            },
            {
                name: [
                    "蓝桥杯 第十七届",
                    "软件赛 | 职业院校组 | 省赛",
                    "Web 应用开发",
                    "一等奖",
                ].join("\n"),
                href: null,
            },
            {
                name: ["2026 江西应用工程职业学院 职业教育活动周", "校内赛", "Web", "一等奖"].join(
                    "\n",
                ),
                href: null,
            },
            {
                name: [
                    "计算机设计大赛 2026",
                    "省赛",
                    "软件应用与开发 | Web 应用与开发",
                    "二等奖",
                ].join("\n"),
                href: null,
            },
            {
                name: [
                    "蓝桥杯 第十七届",
                    "软件赛 | 职业院校组 | 国赛",
                    "Web 应用开发",
                    "一等奖 (第一名)",
                ].join("\n"),
                href: null,
            },
        ],
    },
});