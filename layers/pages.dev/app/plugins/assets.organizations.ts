import { isNullish } from "remeda";
import type { Asset } from "#layers/providers.assets/app/types/assets";

export default defineNuxtPlugin(() => {
    if (import.meta.env.DEV && typeof useAssetsStore === "function") {
        const appConfig = useAppConfig();
        const assetsStore = useAssetsStore();

        for (const organization of appConfig.dev.organizations) {
            if (isNullish(organization.avatar.src)) {
                continue;
            }

            assetsStore.registry.push(organization.avatar as Asset);
        }
    }
});