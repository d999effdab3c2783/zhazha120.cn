import type { Asset } from "#layers/providers.assets/app/types/assets";

export const useAssetsStore = defineStore("assets", () => {
    const registry = shallowReactive<Asset[]>([]);

    const convertPath = (href: string) => String(href.split("@fs")[1]);

    return {
        registry,
        convertPath,
    };
});