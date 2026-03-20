import config from "@/config/database";
import { downloadBlob } from "@/utils/blob";
import type { Dexie } from "dexie";

export default async (database: Dexie) => {
    database.table("furry_characters").bulkAdd([
        {
            illustration: `${config.reference_prefix}_illustration`,
            name: "(暂无名称)",
            species: ["狗"],
            description: "其特点是腿部的闪电, 有蓝黄色的大以巴",
            content: (await import("@/assets/contents/furry_unnamed_1.md?raw")).default,
            _illustration: await downloadBlob(
                (await import("@/assets/images/furry/characters/1/illustration.webp?url")).default,
            ),
        },
        {
            illustration: `${config.reference_prefix}_illustration`,
            name: "Z",
            species: ["狗"],
            species_alias: "折耳狗",
            description: "头顶有着专属于渣渣的标识图案",
            content: (await import("@/assets/contents/furry_z.md?raw")).default,
            _illustration: await downloadBlob(
                (await import("@/assets/images/furry/characters/Z/illustration.webp?url")).default,
            ),
        },
    ]);
};