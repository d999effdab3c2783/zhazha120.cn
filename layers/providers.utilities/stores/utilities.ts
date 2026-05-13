import type { Utility } from "#layers/providers.utilities/types/registry";

export const useUtilitiesStore = defineStore("utilities", () => {
    const registry = shallowReactive<Utility[]>([]);

    return {
        registry,
    };
});