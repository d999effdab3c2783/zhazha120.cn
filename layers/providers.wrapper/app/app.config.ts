import type { LenisOptions } from "lenis";

export default defineAppConfig({
	lenis: {
		autoRaf: true,
	} satisfies LenisOptions,
});