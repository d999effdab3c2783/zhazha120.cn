import { useGlobalApiStore } from "@/stores/global_api";
import { useClipboard } from "@vueuse/core";
import { isNonNullish } from "remeda";

export const copy = async (text: string) => {
    const clipboard = useClipboard();
    const globalApiStore = useGlobalApiStore();

    if (!clipboard.isSupported.value) {
        if (isNonNullish(globalApiStore.message)) {
            globalApiStore.message.error("复制失败, 不支持当前环境");
        }

        return;
    }

    await clipboard.copy(text);

    if (clipboard.copied.value) {
        if (isNonNullish(globalApiStore.message)) {
            globalApiStore.message.success("复制成功");
        }
    }
};

export const paste = async () => {
    const clipboard = useClipboard({
        read: true,
    });

    const globalApiStore = useGlobalApiStore();

    if (!clipboard.isSupported.value) {
        if (isNonNullish(globalApiStore.message)) {
            globalApiStore.message.error("复制失败, 不支持当前环境");
        }

        return;
    }

    return await navigator.clipboard.read();
};