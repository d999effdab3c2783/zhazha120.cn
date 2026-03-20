import { createDate } from "@/utils/date";
import type { Dexie } from "dexie";

export default async (database: Dexie) => {
    database.table("malody_v3_dan_timelines").bulkAdd([
        {
            name: "Regular 0",
            completed_at: createDate(2023, 11, 24).toISOString(),
            video_url: "https://www.bilibili.com/video/BV1ub4y1T77n",
        },
        {
            name: "Regular 1",
            completed_at: createDate(2023, 11, 24).toISOString(),
            video_url: "https://www.bilibili.com/video/BV1nc411r7xQ",
        },
        {
            name: "Regular 2",
            completed_at: createDate(2023, 11, 24).toISOString(),
            video_url: "https://www.bilibili.com/video/BV1Nc411z7pE",
        },
        {
            name: "Regular 3",
            completed_at: createDate(2023, 11, 24).toISOString(),
            video_url: "https://www.bilibili.com/video/BV1rb4y1u74j",
        },
        {
            name: "Regular 4",
            completed_at: createDate(2023, 1, 9).toISOString(),
            video_url: "https://www.bilibili.com/video/BV18v4y1v7ov",
        },
        {
            name: "Regular 5",
            completed_at: createDate(2023, 1, 11).toISOString(),
            video_url: "https://www.bilibili.com/video/BV1uv4y1i78V",
        },
        {
            name: "Regular 6",
            completed_at: createDate(2023, 1, 22).toISOString(),
            video_url: "https://www.bilibili.com/video/BV1eM411t7Px",
        },
        {
            name: "Regular 7",
            completed_at: createDate(2023, 2, 14).toISOString(),
            video_url: "https://www.bilibili.com/video/BV1qv4y1s7xu",
        },
        {
            name: "Regular 8",
            completed_at: createDate(2023, 3, 26).toISOString(),
            video_url: "https://www.bilibili.com/video/BV18k4y147CV",
        },
        {
            name: "Regular 9",
            completed_at: createDate(2023, 5, 5).toISOString(),
            video_url: "https://www.bilibili.com/video/BV1Bs4y137wb",
        },
        {
            name: "Regular 10",
            completed_at: createDate(2023, 5, 10).toISOString(),
            video_url: "https://www.bilibili.com/video/BV1Hs4y1u7SU",
        },
        {
            name: "Regular 10 | 后光",
            completed_at: createDate(2024, 4, 30).toISOString(),
            video_url: "https://www.bilibili.com/video/BV18C411J71V",
        },
        {
            name: "Extra 1",
            completed_at: createDate(2023, 11, 12).toISOString(),
            video_url: "https://www.bilibili.com/video/BV1dN4y1D7ae",
        },
        {
            name: "Extra 1 | 后光",
            completed_at: createDate(2024, 9, 29).toISOString(),
            video_url: "https://www.bilibili.com/video/BV1NsxyedEpD",
        },
        {
            name: "Extra 2",
            completed_at: createDate(2023, 11, 17).toISOString(),
            video_url: "https://www.bilibili.com/video/BV1Dw411H7Gr",
        },
        {
            name: "Extra 2 | 后光",
            completed_at: createDate(2025, 2, 14).toISOString(),
            video_url: "https://www.bilibili.com/video/BV1mdACeNEVf",
        },
        {
            name: "Extra 3",
            completed_at: createDate(2023, 12, 3).toISOString(),
            video_url: "https://www.bilibili.com/video/BV1Lu4y1V7kW",
        },
        {
            name: "Extra 3 | 后光",
            completed_at: createDate(2025, 2, 14).toISOString(),
            video_url: "https://www.bilibili.com/video/BV12dACeNExr",
        },
        {
            name: "Extra 4",
            completed_at: createDate(2024, 9, 4).toISOString(),
            video_url: "https://www.bilibili.com/video/BV12opceAEZN",
        },
        {
            name: "Extra 5",
            completed_at: createDate(2024, 10, 28).toISOString(),
            video_url: "https://www.bilibili.com/video/BV1Cg1jYgE1x",
        },
    ]);
};