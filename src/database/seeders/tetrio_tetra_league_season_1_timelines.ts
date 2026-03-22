import { createDate } from "@/utils/date";
import type { Dexie } from "dexie";

export default async (database: Dexie) => {
    await database.table("tetrio_tetra_league_season_1_timelines").bulkAdd([
        {
            rank: "a+",
            archived_at: createDate(2022, 4, 30).toISOString(),
        },
        {
            rank: "s",
            archived_at: createDate(2022, 5, 22).toISOString(),
        },
        {
            rank: "s+",
            archived_at: createDate(2022, 7, 18).toISOString(),
        },
        {
            rank: "ss",
            archived_at: createDate(2022, 8, 17).toISOString(),
        },
        {
            rank: "u",
            archived_at: createDate(2022, 12, 11).toISOString(),
        },
        {
            rank: "x",
            archived_at: createDate(2023, 11, 2).toISOString(),
        },
    ]);
};