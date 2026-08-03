import type { Character } from "#layers/pages.furry/app/types/furry";

export const useFurryStore = defineStore("furry", () => {
    const characters = shallowReactive<Character[]>([]);

    return {
        characters,
    };
});