import type { Dexie } from "dexie";

export default async (database: Dexie) => {
    await database.table("tetrio_downloads").bulkAdd([
        {
            name: "下载我当前使用的皮肤",
            href: "https://cdn.zhazha120.cn/download/tetrio_skin.tpse",
        },
        {
            name: "下载我当前使用的设置",
            href: "https://cdn.zhazha120.cn/download/tetrio_config.ttc",
        },
        {
            name: "下载我当前使用的背景",
            href: "https://cdn.zhazha120.cn/download/tetrio_background.webp",
        },
    ]);
};