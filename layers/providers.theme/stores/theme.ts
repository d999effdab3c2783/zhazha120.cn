import { darkTheme, type GlobalThemeOverrides, lightTheme, useOsTheme } from "naive-ui";
import { mergeDeep } from "remeda";

export const useThemeStore = defineStore("theme", () => {
    const appConfig = useAppConfig();

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
                return mergeDeep(appConfig.theme.global.overrides, appConfig.theme.light.overrides);
            case "dark":
                return mergeDeep(appConfig.theme.global.overrides, appConfig.theme.dark.overrides);
        }

        return appConfig.theme.global.overrides;
    });

    return {
        mode,
        preset,
        overrides,
    };
});