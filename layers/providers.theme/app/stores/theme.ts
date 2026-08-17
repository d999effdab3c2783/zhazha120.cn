import { darkTheme, type GlobalThemeOverrides, lightTheme, useOsTheme } from "naive-ui";
import naiveUIConfig from "../../config/naive-ui.ts" with { type: "macro" };
import { mergeDeep } from "remeda";

export const useThemeStore = defineStore("theme", () => {
    const mode = shallowRef<"system" | "light" | "dark">("system");
    const osTheme = useOsTheme();

    const actualMode = computed(() => (mode.value === "system" ? osTheme.value : mode.value));

    const preset = computed(() => {
        switch (actualMode.value) {
            case "light":
                return lightTheme;
            case "dark":
                return darkTheme;
        }

        return null;
    });

    const overrides = computed<GlobalThemeOverrides>(() => {
        switch (actualMode.value) {
            case "light":
                return mergeDeep(naiveUIConfig.global.overrides, naiveUIConfig.light.overrides);
            case "dark":
                return mergeDeep(naiveUIConfig.global.overrides, naiveUIConfig.dark.overrides);
        }

        return naiveUIConfig.global.overrides;
    });

    return {
        mode,
        actualMode,
        preset,
        overrides,
    };
});