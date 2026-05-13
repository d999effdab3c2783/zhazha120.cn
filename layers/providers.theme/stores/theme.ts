import { darkTheme, type GlobalThemeOverrides, lightTheme, useOsTheme } from "naive-ui";

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
                return appConfig.theme.light.overrides;
            case "dark":
                return appConfig.theme.dark.overrides;
        }

        return {};
    });

    return {
        mode,
        preset,
        overrides,
    };
});