import config from "@/config/database";
import { downloadBlob } from "@/utils/blob";
import { createDate } from "@/utils/date";
import type { Dexie } from "dexie";
import { isNullish } from "remeda";

export default async (database: Dexie) => {
    const useFurryCharacter = async (name: string, wait = false) => {
        while (true) {
            // oxlint-disable-next-line no-await-in-loop
            const item = await database
                .table("furry_characters")
                .where("name")
                .equals(name)
                .first();

            if (isNullish(item)) {
                if (wait) {
                    await new Promise<void>((resolve) => {
                        setTimeout(() => {
                            resolve();
                        }, 0);
                    });

                    continue;
                }

                break;
            }

            return item.id;
        }
    };

    await database.table("furry_events").bulkAdd([
        {
            cover: `${config.reference_prefix}_cover`,
            name: "兽行迹·沙地生灵诗篇",
            short_name: "兽行迹",
            start_date: createDate(2026, 5, 1).toISOString(),
            end_date: createDate(2026, 5, 4).toISOString(),
            href: "https://www.furward.cn/article/1",
            furry_character_ids: [await useFurryCharacter("Z", true)],
            _cover: await downloadBlob(
                "https://static.furward.cn/resources/ouestsOfMaouisSpirits/banner.webp",
            ),
        },
        {
            cover: `${config.reference_prefix}_cover`,
            name: "那个兽聚·继承者们",
            short_name: "那个兽聚",
            start_date: createDate(2026, 7, 10).toISOString(),
            end_date: createDate(2026, 7, 12).toISOString(),
            href: "https://www.thatfurcon.com",
            furry_character_ids: [await useFurryCharacter("Z", true)],
            _cover: await downloadBlob(
                "https://www.thatfurcon.com/exhibition/assets/background-Dud7z5m9.jpg",
            ),
        },
    ]);
};