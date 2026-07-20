import type { GlobalThemeOverrides } from "naive-ui";
import { generate } from "@ant-design/colors";

const colors = generate("#f79a00");

export default defineAppConfig<{
    readonly theme: {
        readonly global: {
            readonly overrides: GlobalThemeOverrides;
        };

        readonly light: {
            readonly overrides: GlobalThemeOverrides;
        };

        readonly dark: {
            readonly overrides: GlobalThemeOverrides;
        };
    };
}>({
    theme: {
        global: {
            overrides: {
                common: {
                    primaryColor: colors[5],
                    primaryColorHover: colors[4],
                    primaryColorSuppl: colors[7],
                    primaryColorPressed: colors[6],
                },
            },
        },
        light: {
            overrides: {},
        },
        dark: {
            overrides: {},
        },
    },
});