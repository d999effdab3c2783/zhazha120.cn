import type { Dexie } from "dexie";

// @unocss-include

export default async (database: Dexie) => {
    await database.table("self_external_links").bulkAdd([
        {
            icon: "i-tdesign:usergroup-add",
            name: "个人群",
            href: "https://qm.qq.com/cgi-bin/qm/qr?k=EKq625P5qpas9-m5lVFTDnyCgR1I9yPw&authKey=zqbyY33MW7xTvSEBm+fqVv7lrq3EhV7UuVPrYnQZTal9dQpkD9XM3ViHSu2QnGb3",
            tip: (await import("@/assets/contents/personal_qq_group_tip.md?raw")).default,
        },
        {
            icon: "i-mingcute:live-line",
            name: "直播间",
            href: "http://live.zhazha120.cn",
        },
        {
            icon: "i-ant-design:cloud-download-outlined",
            name: "云盘",
            href: "https://pan.zhazha120.cn",
        },
        {
            icon: "i-ant-design:mail-outlined",
            name: "邮箱",
            href: "http://mail.zhazha120.cn",
        },
    ]);
};