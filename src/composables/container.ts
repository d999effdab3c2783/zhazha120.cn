import { container } from "@/shared/website";
import { useMutationObserver } from "@vueuse/core";
import { isNonNullish } from "remeda";
import { readonly, ref } from "vue";

export const useHasOverlay = () => {
    const state = ref(false);

    useMutationObserver(
        container,
        () => {
            state.value = [document.querySelector(".zhazha120__modal")].some(isNonNullish);
        },
        {
            childList: true,
            subtree: true,
        },
    );

    return readonly(state);
};