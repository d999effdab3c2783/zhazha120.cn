import type { Dexie } from "dexie";

// @unocss-include

export default async (database: Dexie) => {
    await database.table("osu_contacts").bulkAdd([
        {
            icon: "i-ant-design:profile-outlined",
            name: "看我资料",
            href: "https://osu.ppy.sh/users/16303789",
        },
    ]);
};