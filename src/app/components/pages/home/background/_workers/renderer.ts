import type {
	EngineState,
	Layout,
	RendererCommand,
	Settings,
	View
} from '@/app/components/pages/home/background/_types/shared'

import { isNil, isNotNil } from 'es-toolkit'

import {
	DIRECTIONS,
	FRAME_TARGET_FPS,
	FRAME_TOLERANCE,
	MAX_CASCADES,
	MAX_PIXELS
} from '@/app/components/pages/home/background/_shared/config'
import {
	centerOf,
	flatView,
	hash,
	keyOf,
	layoutFor,
	project,
	smootherstep,
	smoothstep,
	tint,
	traceCell,
	viewFor
} from '@/app/components/pages/home/background/_shared/utils'

const state: EngineState = {
	raf: 0,
	last: 0,
	time: 0,
	visible: true,
	width: 1,
	height: 1,
	ratio: 1,
	dpr: 1,
	view: flatView(1, 1),
	offsetX: 0,
	offsetY: 0,
	started: false,
	startedAt: 0,
	inside: false,
	pointerX: 0,
	pointerY: 0,
	spotX: 0,
	spotY: 0,
	spotVX: 0,
	spotVY: 0,
	spotPower: 0,
	lit: new Map<number, number>(),
	hues: new Map<number, number>(),
	cascades: [],
	cascadeHue: 0
}

let canvas: OffscreenCanvas | null = null
let ctx: OffscreenCanvasRenderingContext2D | null = null
let settings: Settings | null = null
let reduce = false
let postedWidth = -1
let postedHeight = -1
let postedTransform = ''

const postView = (view: View) => {
	if (view.width === postedWidth && view.height === postedHeight && view.transform === postedTransform) {
		return
	}

	postedWidth = view.width
	postedHeight = view.height
	postedTransform = view.transform

	postMessage({
		event: 'viewport-change',
		payload: {
			width: view.width,
			height: view.height,
			transform: view.transform
		}
	})
}

const resize = () => {
	const target = canvas
	const s = settings

	if (isNil(target) || isNil(s)) {
		return
	}

	const view = viewFor(s.tiltX, s.tiltY, state.width, state.height, s.cellSize)
	const ratio = isNil(s.dpr) ? Math.min(state.dpr || 1, 2) : s.dpr
	const pixels = view.width * view.height * ratio * ratio
	const scale = pixels > MAX_PIXELS ? ratio * Math.sqrt(MAX_PIXELS / pixels) : ratio

	state.ratio = scale
	state.view = view

	const pixelWidth = Math.max(1, Math.round(view.width * scale))
	const pixelHeight = Math.max(1, Math.round(view.height * scale))

	if (target.width !== pixelWidth || target.height !== pixelHeight) {
		target.width = pixelWidth
		target.height = pixelHeight
	}

	postView(view)
}

const toPlane = (x: number, y: number): [number, number] | null => {
	const { inverse, far } = state.view

	if (isNil(inverse)) {
		return [x, y]
	}

	if (inverse[6] * x + inverse[7] * y + inverse[8] < 1 / far) {
		return null
	}

	return project(inverse, x, y)
}

const range = (layout: Layout, margin: number): [number, number, number, number] => {
	const { stepX, stepY } = layout
	const { view } = state

	return [
		Math.floor((state.offsetX + view.x0 - margin) / stepX) - 1,
		Math.ceil((state.offsetX + view.x0 + view.width + margin) / stepX) + 1,
		Math.floor((state.offsetY + view.y0 - margin) / stepY) - 1,
		Math.ceil((state.offsetY + view.y0 + view.height + margin) / stepY) + 1
	]
}

const nearestCell = (s: Settings, layout: Layout, wx: number, wy: number): [number, number] => {
	const { stepX, stepY } = layout
	const ci = Math.round(wx / stepX)
	const cj = Math.round(wy / stepY)

	let best = Infinity
	let cell: [number, number] = [ci, cj]

	for (let i = ci - 2; i <= ci + 2; i++) {
		for (let j = cj - 2; j <= cj + 2; j++) {
			const [x, y] = centerOf(s.shape, layout, i, j)
			const d = (x - wx) ** 2 + (y - wy) ** 2

			if (d < best) {
				best = d
				cell = [i, j]
			}
		}
	}

	return cell
}

const illuminate = (s: Settings, layout: Layout, dt: number) => {
	const decay = Math.exp(-dt / s.trail)

	for (const [key, value] of state.lit) {
		const next = value * decay

		if (next < 0.004) {
			state.lit.delete(key)
			state.hues.delete(key)
		} else {
			state.lit.set(key, next)
		}
	}

	if (state.spotPower < 0.01) {
		return
	}

	const wx = state.spotX + state.offsetX
	const wy = state.spotY + state.offsetY
	const reach = Math.max(s.radius, 0.5) * s.cellSize
	const [hi, hj] = nearestCell(s, layout, wx, wy)
	const spanI = Math.ceil(reach / layout.stepX) + 2
	const spanJ = Math.ceil(reach / layout.stepY) + 2
	const hue = state.time * 120

	for (let i = hi - spanI; i <= hi + spanI; i++) {
		for (let j = hj - spanJ; j <= hj + spanJ; j++) {
			const [x, y] = centerOf(s.shape, layout, i, j)
			const distance = Math.hypot(x - wx, y - wy)
			const base = s.radius > 0 ? smoothstep(reach, reach * 0.15, distance) : 0
			const value = (i === hi && j === hj ? Math.max(base, 1) : base) * state.spotPower

			if (value <= 0.004) {
				continue
			}

			const key = keyOf(i, j)

			if (value > (state.lit.get(key) ?? 0)) {
				state.lit.set(key, value)
				state.hues.set(key, hue + ((x + y) / s.cellSize) * 12)
			}
		}
	}
}

const cascadeAt = (s: Settings, x: number, y: number) => {
	let value = 0

	for (const cascade of state.cascades) {
		const ring = Math.round(Math.hypot(x - cascade.x, y - cascade.y) / s.cellSize)
		const local = state.time - cascade.time - ring * 0.055

		if (local < 0) {
			continue
		}

		const pulse = Math.exp(-((local / 0.085) ** 2)) * cascade.power * Math.max(0, 1 - ring / cascade.reach)

		if (pulse > value) {
			value = pulse
			state.cascadeHue = cascade.hue + ring * 16
		}
	}

	return value
}

const draw = () => {
	const s = settings
	const context = ctx

	if (isNil(s) || isNil(context)) {
		return
	}

	const { view, ratio } = state
	const layout = layoutFor(s.shape, s.cellSize)

	context.setTransform(1, 0, 0, 1, 0, 0)
	context.globalCompositeOperation = 'source-over'
	context.globalAlpha = 1
	context.clearRect(0, 0, context.canvas.width, context.canvas.height)
	context.setTransform(ratio, 0, 0, ratio, -view.x0 * ratio, -view.y0 * ratio)

	const left = view.x0
	const top = view.y0
	const right = view.x0 + view.width
	const bottom = view.y0 + view.height
	const size = s.cellSize
	const [i0, i1, j0, j1] = range(layout, size)
	const markers = s.shape === 'cross' || s.shape === 'dot'
	const elapsed = state.time - state.startedAt
	const introRadius = s.intro && !reduce ? elapsed * view.reach * 1.8 : Infinity
	const originX = state.width / 2
	const originY = state.height / 2
	const centerX = originX + state.offsetX
	const centerY = originY + state.offsetY

	context.lineWidth = s.lineWidth
	context.lineJoin = 'round'
	context.lineCap = 'round'
	context.strokeStyle = s.lineColor
	context.fillStyle = s.lineColor
	context.beginPath()

	if (s.shape === 'square') {
		for (let i = i0; i <= i1; i++) {
			const x = i * layout.stepX - state.offsetX

			context.moveTo(x, top - size)
			context.lineTo(x, bottom + size)
		}

		for (let j = j0; j <= j1; j++) {
			const y = j * layout.stepY - state.offsetY

			context.moveTo(left - size, y)
			context.lineTo(right + size, y)
		}
	} else {
		for (let i = i0; i <= i1; i++) {
			for (let j = j0; j <= j1; j++) {
				const [cx, cy] = centerOf(s.shape, layout, i, j)

				traceCell(context, s.shape, layout, size, i, j, cx - state.offsetX, cy - state.offsetY, 0)
			}
		}
	}

	if (s.shape === 'dot') {
		context.fill()
	} else {
		context.stroke()
	}

	if (introRadius !== Infinity) {
		const gradient = context.createRadialGradient(originX, originY, 0, originX, originY, Math.max(1, introRadius))

		gradient.addColorStop(0, 'rgba(0, 0, 0, 1)')
		gradient.addColorStop(0.82, 'rgba(0, 0, 0, 1)')
		gradient.addColorStop(1, 'rgba(0, 0, 0, 0)')

		context.globalCompositeOperation = 'destination-in'
		context.fillStyle = gradient
		context.fillRect(left, top, view.width, view.height)
		context.globalCompositeOperation = 'source-over'
	}

	const glowing = s.glow > 0

	for (let i = i0; i <= i1; i++) {
		for (let j = j0; j <= j1; j++) {
			const [cx, cy] = centerOf(s.shape, layout, i, j)
			const key = keyOf(i, j)
			let value = state.lit.get(key) ?? 0
			let hue = state.hues.get(key) ?? 0

			if (state.cascades.length) {
				const pulse = cascadeAt(s, cx, cy)

				if (pulse > value) {
					value = pulse
					hue = state.cascadeHue
				}
			}

			if (s.twinkle > 0 && !reduce) {
				const seed = hash(i, j)
				const wave = Math.sin(state.time * (0.35 + seed * 0.5) + seed * 40)
				const sparkle = s.twinkle * 0.7 * Math.max(0, wave) ** 18

				if (sparkle > value) {
					value = sparkle
					hue = seed * 360
				}
			}

			if (introRadius !== Infinity) {
				const front = introRadius - Math.hypot(cx - centerX, cy - centerY)

				if (front < 0) {
					continue
				}

				const wave = Math.exp(-((front / (size * 1.4)) ** 2)) * 0.85

				if (wave > value) {
					value = wave
					hue = (Math.atan2(cy - centerY, cx - centerX) * 180) / Math.PI + state.time * 120
				}
			}

			if (value <= 0.01) {
				continue
			}

			const color = s.rainbow ? tint(hue, s.tone) : s.hoverColor
			const x = cx - state.offsetX
			const y = cy - state.offsetY

			context.beginPath()
			traceCell(context, s.shape, layout, size, i, j, x, y, markers ? value * size * 0.08 : s.lineWidth * 0.5)

			if (markers) {
				context.globalAlpha = Math.min(1, value)

				if (glowing) {
					context.shadowColor = color
					context.shadowBlur = s.glow * 14 * value
				}

				if (s.shape === 'dot') {
					context.fillStyle = color
					context.fill()
				} else {
					context.strokeStyle = color
					context.lineWidth = s.lineWidth * (1 + value * 0.6)
					context.stroke()
				}

				context.shadowBlur = 0

				continue
			}

			if (s.fillOpacity > 0) {
				context.globalAlpha = Math.min(1, value) * s.fillOpacity
				context.fillStyle = s.rainbow ? color : s.hoverFillColor
				context.fill()
			}

			context.globalAlpha = Math.min(1, value) * 0.85

			if (glowing) {
				context.shadowColor = color
				context.shadowBlur = s.glow * 16 * value
			}

			context.strokeStyle = color
			context.lineWidth = s.lineWidth
			context.stroke()
			context.shadowBlur = 0
		}
	}

	context.globalAlpha = 1

	if (isNotNil(view.mist)) {
		const [mx0, my0, mx1, my1] = view.mist
		const gradient = context.createLinearGradient(mx0, my0, mx1, my1)

		for (let k = 0; k <= 8; k++) {
			const t = k / 8

			gradient.addColorStop(t, `rgba(0, 0, 0, ${(1 - smootherstep(t)).toFixed(3)})`)
		}

		context.globalCompositeOperation = 'destination-in'
		context.fillStyle = gradient
		context.fillRect(left, top, view.width, view.height)
		context.globalCompositeOperation = 'source-over'
	}
}

const frame = (now: number) => {
	state.raf = 0

	const s = settings

	if (isNil(s) || isNil(ctx)) {
		return
	}

	if (FRAME_TARGET_FPS > -1 && state.last > 0 && now - state.last < 1000 / FRAME_TARGET_FPS - FRAME_TOLERANCE) {
		state.raf = requestAnimationFrame(frame)

		return
	}

	const dt = state.last ? Math.min(0.05, (now - state.last) / 1000) : 1 / 60
	state.last = now

	if (!state.started) {
		state.started = true
		state.startedAt = state.time
	}

	if (!s.paused) {
		state.time += dt

		if (!reduce) {
			const [dx, dy] = DIRECTIONS[s.direction]

			state.offsetX -= dx * s.speed * 60 * dt
			state.offsetY -= dy * s.speed * 60 * dt
		}

		const want = state.inside ? 1 : 0
		state.spotPower += (want - state.spotPower) * (1 - Math.exp(-(want ? 10 : 5) * dt))

		if (s.stiffness) {
			const stiffness = 220
			const damping = 2 * Math.sqrt(stiffness) * 0.85

			state.spotVX += (stiffness * (state.pointerX - state.spotX) - damping * state.spotVX) * dt
			state.spotVY += (stiffness * (state.pointerY - state.spotY) - damping * state.spotVY) * dt
			state.spotX += state.spotVX * dt
			state.spotY += state.spotVY * dt
		} else {
			state.spotX = state.pointerX
			state.spotY = state.pointerY
		}

		illuminate(s, layoutFor(s.shape, s.cellSize), dt)

		state.cascades = state.cascades.filter(cascade => {
			return state.time - cascade.time < cascade.reach * 0.055 + 0.4
		})
	}

	draw()

	const settled =
		s.paused ||
		(s.speed === 0 || s.direction === 'none' || reduce
			? state.lit.size === 0 &&
				state.cascades.length === 0 &&
				s.twinkle === 0 &&
				state.spotPower < 0.005 &&
				state.time - state.startedAt > 3
			: false)

	if (!settled && state.visible) {
		state.raf = requestAnimationFrame(frame)
	} else {
		state.last = 0
	}
}

const wake = () => {
	if (!state.raf && state.visible && isNotNil(settings) && isNotNil(ctx)) {
		state.raf = requestAnimationFrame(frame)
	}
}

const onMessage = (event: MessageEvent<RendererCommand>) => {
	const message = event.data

	switch (message.command) {
		case 'initialize': {
			const { canvas: offscreenCanvas, settings: initialSettings, viewport, reduceMotion } = message.payload
			const context = offscreenCanvas.getContext('2d')

			if (isNil(context)) {
				return
			}

			canvas = offscreenCanvas
			ctx = context
			settings = initialSettings
			reduce = reduceMotion
			state.width = Math.max(1, viewport.width)
			state.height = Math.max(1, viewport.height)
			state.dpr = viewport.dpr

			resize()
			wake()

			break
		}

		case 'resize': {
			const { width, height, dpr } = message.payload

			state.width = Math.max(1, width)
			state.height = Math.max(1, height)
			state.dpr = dpr

			resize()
			draw()
			wake()

			break
		}

		case 'update-settings': {
			settings = message.payload

			resize()
			draw()
			wake()

			break
		}

		case 'pointer-move': {
			if (isNil(settings)) {
				return
			}

			const { position, inside } = message.payload
			const point = inside ? toPlane(position.x, position.y) : null

			if (isNotNil(point) && !state.inside && state.spotPower < 0.02) {
				state.spotX = point[0]
				state.spotY = point[1]
				state.spotVX = 0
				state.spotVY = 0
			}

			state.inside = isNotNil(point)

			if (isNotNil(point)) {
				state.pointerX = point[0]
				state.pointerY = point[1]

				wake()
			}

			break
		}

		case 'pointer-down': {
			const s = settings

			if (isNil(s) || !s.clickCascade) {
				return
			}

			const { x, y } = message.payload
			const point = toPlane(x, y)

			if (isNil(point)) {
				return
			}

			state.cascades.push({
				x: point[0] + state.offsetX,
				y: point[1] + state.offsetY,
				time: state.time,
				power: 1,
				reach: Math.hypot(state.view.width, state.view.height) / s.cellSize,
				hue: state.time * 120
			})

			if (state.cascades.length > MAX_CASCADES) {
				state.cascades.shift()
			}

			wake()

			break
		}

		case 'pointer-leave': {
			state.inside = false

			break
		}

		case 'visibility-change': {
			state.visible = message.payload.visible

			if (state.visible) {
				wake()
			}

			break
		}
	}
}

addEventListener('message', onMessage)