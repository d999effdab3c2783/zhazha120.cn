import { breakpointsTailwind } from '@vueuse/core';

const breakpoints = useBreakpoints(breakpointsTailwind);

export type UseResponsiveReturn = {
	readonly breakpoints: typeof breakpoints;
	readonly isMobile: ComputedRef<boolean>;
};

export const useResponsive = (): UseResponsiveReturn => {
	const isMobile = breakpoints.smaller('md');

	return {
		breakpoints,
		isMobile,
	} as const;
};