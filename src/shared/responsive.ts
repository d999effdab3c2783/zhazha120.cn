import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'

export const breakpoints = useBreakpoints(breakpointsTailwind)

export const isMobile = breakpoints.smaller('md')

export const isDesktop = breakpoints.greater('sm')