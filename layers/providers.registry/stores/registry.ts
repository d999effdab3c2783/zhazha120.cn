import type { Utility } from "#layers/providers.registry/types/registry";

export const useRegistryStore = defineStore("registry", () => {
    const utilities = shallowReactive<Utility[]>([]);

    return {
        utilities,
    };
});