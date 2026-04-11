import { darkTheme, lightTheme, useOsTheme } from "naive-ui";

export const useThemeStore = defineStore("theme", () => {
    const mode = shallowRef<"system" | "light" | "dark">("system");
    const osTheme = useOsTheme();

    const preset = computed(() => {
        const actualMode = mode.value === "system" ? osTheme.value : mode.value;

        switch (actualMode) {
            case "light":
                return lightTheme;
            case "dark":
                return darkTheme;
        }

        return null;
    });

    return {
        mode,
        preset,
    };
});