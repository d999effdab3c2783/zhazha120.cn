import { createDate } from "@/utils/date";
import type { Dexie } from "dexie";

export default async (database: Dexie) => {
    database.table("tetrio_tetra_league_season_2_timelines").bulkAdd([
        {
            rank: "a+",
            archived_at: createDate(2024, 8, 17).toISOString(),
        },
        {
            rank: "s-",
            archived_at: createDate(2024, 8, 17).toISOString(),
        },
        {
            rank: "s",
            archived_at: createDate(2024, 8, 17).toISOString(),
        },
        {
            rank: "s+",
            archived_at: createDate(2024, 8, 17).toISOString(),
        },
        {
            rank: "ss",
            archived_at: createDate(2024, 8, 17).toISOString(),
        },
        {
            rank: "u",
            archived_at: createDate(2024, 8, 18).toISOString(),
        },
        {
            rank: "x",
            archived_at: createDate(2024, 9, 9).toISOString(),
        },
    ]);
};