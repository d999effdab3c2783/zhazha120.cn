import { isNullish } from "remeda";
import type { Asset } from "#layers/providers.assets/app/types/assets";

export default defineNuxtPlugin(() => {
    if (import.meta.env.DEV && typeof useAssetsStore === "function") {
        const appConfig = useAppConfig();
        const assetsStore = useAssetsStore();

        for (const friendLink of appConfig.misc.friend_links) {
            if (isNullish(friendLink.logo.src)) {
                continue;
            }

            assetsStore.registry.push(friendLink.logo as Asset);
        }
    }
});