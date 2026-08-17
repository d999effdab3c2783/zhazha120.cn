import { isNullish } from "remeda";
import type { Asset } from "#layers/providers.assets/app/types/assets";

export default defineNuxtPlugin(() => {
    if (import.meta.env.DEV && typeof useAssetsStore === "function") {
        const organizations = useFullOrganizations();
        const assetsStore = useAssetsStore();

        for (const organization of organizations) {
            if (isNullish(organization.remoteAvatar)) {
                continue;
            }

            assetsStore.registry.push({
                src: organization.remoteAvatar,
                href: organization.default.avatar,
            } as Asset);
        }
    }
});