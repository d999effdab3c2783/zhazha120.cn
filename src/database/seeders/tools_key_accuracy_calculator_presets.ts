import type { Dexie } from "dexie";

export default async (database: Dexie) => {
    await Promise.all(
        Object.entries(
            import.meta.glob<{
                readonly default: {
                    readonly $schema: string;
                    readonly name: string;

                    readonly maps: {
                        readonly title: string;
                        readonly notes: number;
                    }[];

                    readonly require_accuracy: number;
                };
            }>("@/assets/tools/key-accuracy-calculator/presets/*.json"),
        ).map(async ([name, loadModule]) => {
            if (name.includes("_schema")) {
                return;
            }

            const module = await loadModule();
            const preset = module.default;

            await database.table("tools_key_accuracy_calculator_presets").add({
                name: preset.name,
                require_accuracy: preset.require_accuracy,
                map_ids: await Promise.all(
                    preset.maps.map((map) => {
                        return database.table("tools_key_accuracy_calculator_maps").add({
                            name: map.title,
                            notes: map.notes,
                        });
                    }),
                ),
            });
        }),
    );
};