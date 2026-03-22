import type { Dexie } from "dexie";

export default async (database: Dexie) => {
    await database.table("birthday_records").bulkAdd([
        {
            age: 19,
            content: (await import("@/assets/contents/birthday_19.md?raw")).default,
        },
    ]);
};