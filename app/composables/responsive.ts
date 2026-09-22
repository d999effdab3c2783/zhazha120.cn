import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'

const breakpoints = useBreakpoints(breakpointsTailwind)

export const useResponsive = () => {
	const isMobile = breakpoints.smaller('md')

	return {
		breakpoints,
		isMobile
	} as const
}