import { isNullish } from "remeda";
import type { Asset } from "#layers/providers.assets/app/types/assets";
import { useFullFriendLinks } from "#layers/pages.misc/app/composables/friend_links.ts";

export default defineNuxtPlugin(() => {
    if (import.meta.env.DEV && typeof useAssetsStore === "function") {
        const assetsStore = useAssetsStore();
        const friendLinks = useFullFriendLinks();

        for (const friendLink of friendLinks) {
            if (isNullish(friendLink.remoteLogo)) {
                continue;
            }

            assetsStore.registry.push({
                src: friendLink.remoteLogo,
                href: friendLink.default.logo,
            } as Asset);
        }
    }
});