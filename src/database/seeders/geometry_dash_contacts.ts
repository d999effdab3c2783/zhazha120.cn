import type { Dexie } from "dexie";

// @unocss-include

export default async (database: Dexie) => {
    database.table("geometry_dash_contacts").bulkAdd([
        {
            icon: "i-ant-design:profile-outlined",
            name: "看我资料",
            href: "https://gdbrowser.com/u/1889402",
        },
    ]);
};