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
                name: "爱发电",
                methods: [
                    {
                        type: "external",

                        name: null,
                        href: "https://afdian.com/a/WOSHIZHAZHA120",

                        comment: "非赞助用途 (如奖金发放等) 麻烦使用 微信 或 支付宝 而不是爱发电",
                    },
                ],
            },
            {
                name: "QQ 支付",
                methods: [
                    {
                        type: "qrcode",

                        name: "收款",
                        image: null,
                        content:
                            "https://i.qianbao.qq.com/wallet/sqrcode.htm?m=tenpay&f=wallet&a=1&u=2331281251&n=%E6%B8%A3%E6%B8%A3120&ac=CAEQ447S1wgYsO6xzAYyDOS4quS6uuekvuS6pDgBQiBhMzVhNmYzNjljMmY1N2I0NmUzYjM4ZjllZmZmZjc3M0oOMTE3LjE2Ni4yNC4xNzI%3D_xxx_sign",
                    },
                ],
            },
            {
                name: "微信支付",
                methods: [
                    {
                        type: "qrcode",

                        name: "收款",
                        image: new URL("../app/assets/wechat.bin", import.meta.url).toString(),
                        content: "wxp://f2f00ALhTUmkx8CPQV4tMWrs5rMqalY6jbZ5iA4n66Fgi7o",
                    },
                ],
            },
            {
                name: "支付宝",
                methods: [
                    {
                        type: "qrcode",

                        name: "红包",
                        image: new URL(
                            "../app/assets/alipay/red_packet.bin",
                            import.meta.url,
                        ).toString(),
                        content: "19619685xddohmqm7u1bd83TGq",
                    },
                    {
                        type: "qrcode",

                        name: "收款",
                        image: new URL("../app/assets/alipay/pay.bin", import.meta.url).toString(),
                        content: "https://qr.alipay.com/fkx15787iexwbs0j9hn0p10",
                    },
                ],
            },
        ],
    },
});