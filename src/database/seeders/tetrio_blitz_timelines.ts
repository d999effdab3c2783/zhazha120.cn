import { createDate } from "@/utils/date";
import type { Dexie } from "dexie";

export default async (database: Dexie) => {
    database.table("tetrio_blitz_timelines").bulkAdd([
        {
            score: 389548,
            archived_at: createDate(2024, 1, 7).toISOString(),
        },
        {
            score: 397487,
            archived_at: createDate(2026, 1, 21).toISOString(),
        },
        {
            score: 452633,
            archived_at: createDate(2026, 1, 26).toISOString(),
        },
        {
            score: 458187,
            archived_at: createDate(2026, 1, 26).toISOString(),
        },
    ]);
};