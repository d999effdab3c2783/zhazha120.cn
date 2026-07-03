import type { GlobalThemeOverrides } from "naive-ui";
import { generate } from "@ant-design/colors";

const colors = generate("#f79a00");

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
			overrides: {} satisfies GlobalThemeOverrides,
		},
	},
});