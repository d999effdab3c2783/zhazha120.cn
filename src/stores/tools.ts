import { useDatabase } from "@/composables/database";
import type ToolsKeyAccuracyCalculatorMap from "@/database/tables/tools_key_accuracy_calculator_map";
import type ToolsKeyAccuracyCalculatorPreset from "@/database/tables/tools_key_accuracy_calculator_preset";
import type {
    AccuracyInput,
    RawToolsKeyAccuracyCalculatorPreset,
} from "@/types/components/tools/key-accuracy-calculator";
import { until, watchIgnorable } from "@vueuse/core";
import type { WatermarkProps } from "naive-ui";
import { defineStore } from "pinia";
import { isNonNullish, isNullish, omit, prop, sumBy } from "remeda";
import { computed, ref } from "vue";

export const useToolsKeyAccuracyCalculatorStore = defineStore(
    "tools.key_accuracy_calculator",
    () => {
        const toRaw = async (
            preset: ToolsKeyAccuracyCalculatorPreset,
        ): Promise<RawToolsKeyAccuracyCalculatorPreset> => {
            const maps = useDatabase<ToolsKeyAccuracyCalculatorMap[]>(async (database) => {
                return database.tools_key_accuracy_calculator_maps
                    .where("id")
                    .anyOf(preset.map_ids)
                    .toArray();
            });

            await until(maps).toMatch(isNonNullish);

            return {
                ...omit(preset, ["id", "map_ids", "table"]),
                maps: maps.value.map((item) => {
                    return {
                        use: true,
                        ...omit(item, ["id", "table"]),
                    };
                }),
            };
        };

        const createRawPreset = (): RawToolsKeyAccuracyCalculatorPreset => {
            return {
                name: "",
                maps: [],
                require_accuracy: 0,
            };
        };

        const createMap = (): RawToolsKeyAccuracyCalculatorPreset["maps"][number] => {
            return {
                use: true,
                name: "",
                artist: "",
                mapper: "",
                notes: 0,
            };
        };

        const preset = ref<ToolsKeyAccuracyCalculatorPreset>();
        const rawPreset = ref<RawToolsKeyAccuracyCalculatorPreset>();

        const editPreset = ref<RawToolsKeyAccuracyCalculatorPreset>(createRawPreset());

        const presetWatcher = watchIgnorable(preset, async (newPreset) => {
            if (isNullish(newPreset)) {
                return;
            }

            const newRawPreset = await toRaw(newPreset);

            rawPreset.value = newRawPreset;

            editPresetWatcher.ignoreUpdates(() => {
                editPreset.value = newRawPreset;
            });
        });

        const editPresetWatcher = watchIgnorable(
            editPreset,
            () => {
                presetWatcher.ignoreUpdates(() => {
                    preset.value = undefined;
                });

                rawPreset.value = undefined;
            },
            {
                deep: true,
            },
        );

        const inputs = ref<AccuracyInput[]>([]);

        const filteredMaps = computed(() => {
            if (isNullish(rawPreset.value)) {
                return;
            }

            return rawPreset.value.maps.filter((item) => {
                return item.use;
            });
        });

        const totalNotes = computed(() => {
            if (isNullish(filteredMaps.value)) {
                return;
            }

            return sumBy(filteredMaps.value, prop("notes"));
        });

        const filteredInputs = computed(() => {
            if (isNullish(inputs.value)) {
                return;
            }

            return inputs.value.filter(isNonNullish);
        });

        const result = computed(() => {
            if (isNullish(filteredMaps.value) || isNullish(filteredInputs.value)) {
                return;
            }

            return filteredInputs.value.map((currentAccuracy, index) => {
                if (index === 0) {
                    return currentAccuracy;
                }

                return (
                    (currentAccuracy *
                        sumBy(filteredMaps.value!.slice(0, index + 1), prop("notes")) -
                        filteredInputs.value![index - 1] *
                            sumBy(filteredMaps.value!.slice(0, index), prop("notes"))) /
                    filteredMaps.value![index].notes
                );
            });
        });

        const formatMapName = (map: RawToolsKeyAccuracyCalculatorPreset["maps"][number]) => {
            return `${isNonNullish(map.artist) ? `${map.artist} - ` : ""}${map.name}${isNonNullish(map.mapper) ? `// ${map.mapper}` : ""}`;
        };

        const resetInputs = async () => {
            if (isNullish(inputs.value)) {
                return;
            }

            inputs.value = inputs.value.map(() => {
                return null;
            });
        };

        return {
            toRaw,
            preset,
            rawPreset,
            editPreset,
            createRawPreset,
            createMap,
            filteredMaps,
            filteredInputs,
            totalNotes,
            inputs,
            formatMapName,
            resetInputs,
            result,
        };
    },
);

export const useToolsImageWatermarkStore = defineStore(
    "tools.image_watermark",
    () => {
        const config = ref<Partial<WatermarkProps>>({
            content: "渣渣120",
            cross: true,
            fontColor: "rgba(128, 128, 128, .3)",
            fontSize: 20,
            fontWeight: 900,
            globalRotate: -15,
            height: 24,
            lineHeight: 10,
            textAlign: "center",
            width: 154,
            yOffset: 10,
        });

        return {
            config,
        };
    },
    {
        persist: {
            pick: ["config"],
        },
    },
);