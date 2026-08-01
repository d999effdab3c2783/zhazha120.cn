import type { LenisOptions } from "lenis";

export default defineAppConfig<{
    readonly lenis: LenisOptions;
}>({
    lenis: {
        autoRaf: true,
        allowNestedScroll: true,
    },
});