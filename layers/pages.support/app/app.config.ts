export default defineAppConfig<{
    readonly support: {
        readonly fallback_qrcode_size: number;

        readonly afdian: string;
        readonly qq: string;
        readonly wechat: string;

        readonly alipay: {
            readonly red_packet: string;
            readonly pay: string;
        };
    };
}>({
    support: {
        fallback_qrcode_size: 240,

        afdian: "https://afdian.com/a/WOSHIZHAZHA120",
        qq: "https://i.qianbao.qq.com/wallet/sqrcode.htm?m=tenpay&f=wallet&a=1&u=2331281251&n=%E6%B8%A3%E6%B8%A3120&ac=CAEQ447S1wgYsO6xzAYyDOS4quS6uuekvuS6pDgBQiBhMzVhNmYzNjljMmY1N2I0NmUzYjM4ZjllZmZmZjc3M0oOMTE3LjE2Ni4yNC4xNzI%3D_xxx_sign",
        wechat: "wxp://f2f00ALhTUmkx8CPQV4tMWrs5rMqalY6jbZ5iA4n66Fgi7o",

        alipay: {
            red_packet: "19619685xddohmqm7u1bd83TGq",
            pay: "https://qr.alipay.com/fkx15787iexwbs0j9hn0p10",
        },
    },
});