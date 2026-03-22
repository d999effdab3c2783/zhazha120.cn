import type { Dexie } from "dexie";

// @unocss-include

export default async (database: Dexie) => {
    await database.table("minecraft_contacts").bulkAdd([
        {
            icon: "i-ant-design:profile-outlined",
            name: "MC 百科 (mcmod)",
            href: "https://center.mcmod.cn/33335",
        },
    ]);
};