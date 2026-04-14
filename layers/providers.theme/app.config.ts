import type { GlobalThemeOverrides } from "naive-ui";
import { generate } from "@ant-design/colors";

const backgroundColor = "#0c0c0c";
const primaryColor = "#f79a00";

const surfaceColors = generate(backgroundColor);
const colors = generate(primaryColor, {
    backgroundColor,
});

export default defineAppConfig({
    theme: {
        light: {
            overrides: {} satisfies GlobalThemeOverrides,
        },
        dark: {
            overrides: {
                common: {
                    primaryColor: colors[5],
                    primaryColorHover: colors[4],
                    primaryColorSuppl: colors[4],
                    primaryColorPressed: colors[6],

                    modalColor: surfaceColors[4],
                },
                Layout: {
                    color: surfaceColors[5],
                    footerColor: surfaceColors[4],
                },
            } satisfies GlobalThemeOverrides,
        },
    },
});