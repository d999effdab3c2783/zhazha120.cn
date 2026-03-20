import type { useOsTheme } from "naive-ui";

export interface Theme {
    readonly icon: string;
    readonly name: string;
    readonly value: ReturnType<typeof useOsTheme>["value"];
}