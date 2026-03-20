import type { Dexie } from "dexie";

export default async (database: Dexie) => {
    database.table("osu_downloads").bulkAdd([
        {
            name: "下载我当前使用的皮肤",
            href: "https://cdn.zhazha120.cn/download/osu_skin.osk",
        },
    ]);
};