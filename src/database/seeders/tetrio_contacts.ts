import type { Dexie } from "dexie";

// @unocss-include

export default async (database: Dexie) => {
    await database.table("tetrio_contacts").bulkAdd([
        {
            icon: "i-ant-design:profile-outlined",
            name: "看我资料",
            href: "https://ch.tetr.io/u/5eb3a6530b29196c155074e8",
        },
    ]);
};