import type { Utility } from "~/types/registry";

export const useRegistryStore = defineStore("registry", () => {
    const utilities = shallowReactive<Utility[]>([]);

    return {
        utilities,
    };
});