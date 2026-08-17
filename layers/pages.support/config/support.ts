import type { Channel } from "../app/types/support";
import { read } from "../../utilities.qrcode/macros/qrcode.ts" with { type: "macro" };

export default {
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

                    image: new URL("../app/assets/qq.bin", import.meta.url).toString(),
                    content: await read("../../pages.support/app/assets/qq.bin"),
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
                    content: await read("../../pages.support/app/assets/wechat.bin"),
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
                    content: await read("../../pages.support/app/assets/alipay/red_packet.bin"),
                },
                {
                    type: "qrcode",

                    name: {
                        localeKey: "pages.support:alipay:transfer",
                    },

                    image: new URL("../app/assets/alipay/pay.bin", import.meta.url).toString(),
                    content: await read("../../pages.support/app/assets/alipay/pay.bin"),
                },
            ],
        },
    ] satisfies Channel[],
} as const;