import type { Direction, Shape } from '@/app/components/pages/home/background/_types/shared'

export const SHAPES: readonly Shape[] = ['square', 'tile', 'hexagon', 'triangle', 'diamond', 'circle', 'cross', 'dot']

export const DIRECTIONS: Record<Direction, readonly [number, number]> = {
	right: [1, 0],
	left: [-1, 0],
	up: [0, -1],
	down: [0, 1],
	diagonal: [Math.SQRT1_2, -Math.SQRT1_2],
	none: [0, 0]
}

export const SQRT3 = Math.sqrt(3)
export const OFFSET = 32768
export const FAR = 2.5
export const MAX_PIXELS = Number.MAX_SAFE_INTEGER // 8e6
export const MAX_CASCADES = Number.MAX_SAFE_INTEGER // 6

export const FRAME_TARGET_FPS = -1
export const FRAME_TOLERANCE = 1