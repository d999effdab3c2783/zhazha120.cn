import { container } from "@/shared/global";
import type { MaybePromise } from "@/types/utils";
import { useMutationObserver } from "@vueuse/core";
import { isNonNullish } from "remeda";

export const useContainer = () => {
    return container;
};

export const useHasOverlay = (callback: (state: boolean) => MaybePromise<void>) => {
    useMutationObserver(
        useContainer(),
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