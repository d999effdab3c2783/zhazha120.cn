import type { GlobalThemeOverrides } from "naive-ui";
import { generate } from "@ant-design/colors";

const backgroundColor = "#3c3c3c";
const primaryColor = "#f79a00";

const surfaceColors = generate(backgroundColor, {
	theme: "dark",
});

console.log(surfaceColors);

const colors = generate(primaryColor, {
	backgroundColor,
});

export default defineAppConfig({
	theme: {
		global: {
			overrides: {
				common: {
					primaryColor: colors[5],
					primaryColorHover: colors[4],
					primaryColorSuppl: colors[7],
					primaryColorPressed: colors[6],
				},
			} satisfies GlobalThemeOverrides,
		},
		light: {
			overrides: {} satisfies GlobalThemeOverrides,
		},
		dark: {
			overrides: {
				common: {
					modalColor: surfaceColors[1],
				},
				Layout: {
					color: surfaceColors[0],
					footerColor: surfaceColors[1],
				},
			} satisfies GlobalThemeOverrides,
		},
	},
});