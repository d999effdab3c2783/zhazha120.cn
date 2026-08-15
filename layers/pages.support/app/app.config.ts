import type { Channel } from "#layers/pages.support/app/types/support";

export default defineAppConfig<{
    readonly support: {
        readonly fallback_qrcode_size: number;
        readonly channels: Channel[];
    };
}>({
    support: {
        fallback_qrcode_size: 240,

        channels: [
            {
                name: {
                    localeKey: "pages.support:afdian:name",
                },
                methods: [
                    {
                        type: "external",

                        name: null,
                        href: "https://afdian.com/a/WOSHIZHAZHA120",

                        comment: {
                            localeKey: "pages.support:afdian:comment",
                        },
                    },
                ],
            },
            {
                name: {
                    localeKey: "pages.support:qq_pay:name",
                },
                methods: [
                    {
                        type: "qrcode",

                        name: {
                            localeKey: "pages.support:qq_pay:transfer",
                        },
                        image: null,
                        content:
                            "https://i.qianbao.qq.com/wallet/sqrcode.htm?m=tenpay&f=wallet&a=1&u=2331281251&n=%E6%B8%A3%E6%B8%A3120&ac=CAEQ447S1wgYsO6xzAYyDOS4quS6uuekvuS6pDgBQiBhMzVhNmYzNjljMmY1N2I0NmUzYjM4ZjllZmZmZjc3M0oOMTE3LjE2Ni4yNC4xNzI%3D_xxx_sign",
                    },
                ],
            },
            {
                name: {
                    localeKey: "pages.support:wechat_pay:name",
                },
                methods: [
                    {
                        type: "qrcode",

                        name: {
                            localeKey: "pages.support:wechat_pay:transfer",
                        },
                        image: new URL("../app/assets/wechat.bin", import.meta.url).toString(),
                        content: "wxp://f2f00ALhTUmkx8CPQV4tMWrs5rMqalY6jbZ5iA4n66Fgi7o",
                    },
                ],
            },
            {
                name: {
                    localeKey: "pages.support:alipay:name",
                },
                methods: [
                    {
                        type: "qrcode",

                        name: {
                            localeKey: "pages.support:alipay:red_packet",
                        },
                        image: new URL(
                            "../app/assets/alipay/red_packet.bin",
                            import.meta.url,
                        ).toString(),
                        content: "19619685xddohmqm7u1bd83TGq",
                    },
                    {
                        type: "qrcode",

                        name: {
                            localeKey: "pages.support:alipay:transfer",
                        },
                        image: new URL("../app/assets/alipay/pay.bin", import.meta.url).toString(),
                        content: "https://qr.alipay.com/fkx15787iexwbs0j9hn0p10",
                    },
                ],
            },
        ],
    },
});