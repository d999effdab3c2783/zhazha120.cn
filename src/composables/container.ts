import { container } from "@/shared/website";
import type { MaybePromise } from "@/types/utils";
import { useMutationObserver } from "@vueuse/core";
import { isNonNullish } from "remeda";

export const useHasOverlay = (callback: (state: boolean) => MaybePromise<void>) => {
    useMutationObserver(
        container,
        async () => {
            const checks = [document.querySelector(".zhazha120__modal")];

            await callback(checks.some(isNonNullish));
        },
        {
            childList: true,
            subtree: true,
        },
    );
};