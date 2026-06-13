import { breakpointsTailwind } from "@vueuse/core";

export const useResponsive = () => {
	const breakpoints = useBreakpoints(breakpointsTailwind);

	const isMobile = breakpoints.smaller("md");

	return {
		breakpoints,
		isMobile,
	};
};