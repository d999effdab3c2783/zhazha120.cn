export type Shape = 'square' | 'tile' | 'hexagon' | 'triangle' | 'diamond' | 'circle' | 'cross' | 'dot'

export type Direction = 'diagonal' | 'up' | 'down' | 'left' | 'right' | 'none'

export type ShapeGridProps = Partial<{
	readonly shape: Shape
	readonly cellSize: number
	readonly lineWidth: number
	readonly direction: Direction
	readonly speed: number
	readonly lineColor: string
	readonly hoverColor: string
	readonly hoverFillColor: string
	readonly fillOpacity: number
	readonly rainbow: boolean
	readonly tiltX: number
	readonly tiltY: number
	readonly radius: number
	readonly trail: number
	readonly glow: number
	readonly twinkle: number
	readonly fade: number
	readonly clickCascade: boolean
	readonly intro: boolean
	readonly opacity: number
	readonly backgroundColor: string
	readonly stiffness: boolean
	readonly paused: boolean
	readonly dpr: number
}>

export type Layout = {
	readonly stepX: number
	readonly stepY: number
} & Partial<{
	readonly radius: number
	readonly side: number
}>

export type View = {
	readonly x0: number
	readonly y0: number
	readonly width: number
	readonly height: number
	readonly inverse: readonly number[] | null
	readonly transform: string
	readonly mist: readonly number[] | null
	readonly far: number
	readonly reach: number
}

export type Settings = {
	readonly shape: Shape
	readonly cellSize: number
	readonly lineWidth: number
	readonly direction: Direction
	readonly speed: number
	readonly lineColor: string
	readonly hoverColor: string
	readonly hoverFillColor: string
	readonly fillOpacity: number
	readonly rainbow: boolean
	readonly tone: number
	readonly tiltX: number
	readonly tiltY: number
	readonly radius: number
	readonly trail: number
	readonly glow: number
	readonly twinkle: number
	readonly clickCascade: boolean
	readonly intro: boolean
	readonly stiffness: boolean
	readonly paused: boolean
} & Partial<{
	readonly dpr: number
}>

export type Cascade = {
	readonly x: number
	readonly y: number
	readonly time: number
	readonly power: number
	readonly reach: number
	readonly hue: number
}

export type Point = {
	readonly x: number
	readonly y: number
}

export type Viewport = {
	readonly width: number
	readonly height: number
	readonly dpr: number
}

export type RendererCommand =
	| {
			readonly command: 'initialize'

			readonly payload: {
				readonly canvas: OffscreenCanvas
				readonly settings: Settings
				readonly viewport: Viewport
				readonly reduceMotion: boolean
			}
	  }
	| {
			readonly command: 'resize'
			readonly payload: Viewport
	  }
	| {
			readonly command: 'update-settings'
			readonly payload: Settings
	  }
	| {
			readonly command: 'pointer-move'

			readonly payload: {
				readonly position: Point
				readonly inside: boolean
			}
	  }
	| {
			readonly command: 'pointer-down'
			readonly payload: Point
	  }
	| {
			readonly command: 'pointer-leave'
	  }
	| {
			readonly command: 'visibility-change'

			readonly payload: {
				readonly visible: boolean
			}
	  }

export type RendererEvent = {
	readonly event: 'viewport-change'

	readonly payload: {
		readonly width: number
		readonly height: number
		readonly transform: string
	}
}

export type EngineState = {
	raf: number
	last: number
	time: number
	visible: boolean
	width: number
	height: number
	ratio: number
	dpr: number
	view: View
	offsetX: number
	offsetY: number
	started: boolean
	startedAt: number
	inside: boolean
	pointerX: number
	pointerY: number
	spotX: number
	spotY: number
	spotVX: number
	spotVY: number
	spotPower: number
	readonly lit: Map<number, number>
	readonly hues: Map<number, number>
	cascades: Cascade[]
	cascadeHue: number
}