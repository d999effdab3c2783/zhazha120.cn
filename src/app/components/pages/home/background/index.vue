<script setup lang="ts">
	import type {
		RendererCommand,
		RendererEvent,
		Settings,
		ShapeGridProps
	} from '@/app/components/pages/home/background/_types/shared'
	import type { CSSProperties, ComponentPublicInstance } from 'vue'

	import {
		useDevicePixelRatio,
		useElementSize,
		useEventListener,
		useIntersectionObserver,
		usePreferredReducedMotion
	} from '@vueuse/core'
	import { clamp, isNil, isNotNil } from 'es-toolkit'
	import { NElement } from 'naive-ui'
	import { computed, onBeforeUnmount, onMounted, useTemplateRef, watch } from 'vue'

	import { DIRECTIONS, SHAPES } from '@/app/components/pages/home/background/_shared/config'
	import { fadeMask, lightnessOf } from '@/app/components/pages/home/background/_shared/utils'
	import RendererWorker from '@/app/components/pages/home/background/_workers/renderer?worker&inline'

	const props = withDefaults(defineProps<ShapeGridProps>(), {
		shape: 'square',
		cellSize: 40,
		lineWidth: 1,
		direction: 'diagonal',
		speed: 0.5,
		lineColor: '#2a2734',
		hoverColor: '#ffffff',
		fillOpacity: 0.15,
		rainbow: false,
		tiltX: 0,
		tiltY: 0,
		radius: 1.5,
		trail: 0.6,
		glow: 0.35,
		twinkle: 0,
		fade: 1,
		clickCascade: true,
		intro: true,
		opacity: 1,
		backgroundColor: 'transparent',
		paused: false,
		stiffness: false
	})

	const containerRef = useTemplateRef<ComponentPublicInstance>('containerRef')
	const canvasRef = useTemplateRef<HTMLCanvasElement>('canvasRef')

	const { width, height } = useElementSize(containerRef, {
		width: 1,
		height: 1
	})
	const { pixelRatio } = useDevicePixelRatio()
	const reducedMotion = usePreferredReducedMotion()

	const documentElement = computed<HTMLElement | null>(() => {
		if (typeof document === 'undefined') {
			return null
		}

		return document.documentElement
	})

	const settings = computed<Settings>(() => ({
		shape: SHAPES.includes(props.shape) ? props.shape : 'square',
		cellSize: Math.max(8, props.cellSize),
		lineWidth: Math.max(0.25, props.lineWidth),
		direction: DIRECTIONS[props.direction] ? props.direction : 'diagonal',
		speed: Math.max(0, props.speed),
		lineColor: props.lineColor,
		hoverColor: props.hoverColor,
		hoverFillColor: isNil(props.hoverFillColor) ? props.hoverColor : props.hoverFillColor,
		fillOpacity: clamp(props.fillOpacity, 0, 1),
		rainbow: props.rainbow,
		tone: clamp(lightnessOf(props.hoverColor), 0.45, 0.68),
		tiltX: clamp(props.tiltX, -70, 70),
		tiltY: clamp(props.tiltY, -70, 70),
		radius: Math.max(0, props.radius),
		trail: Math.max(0.05, props.trail),
		glow: clamp(props.glow, 0, 1),
		twinkle: clamp(props.twinkle, 0, 1),
		clickCascade: props.clickCascade,
		intro: props.intro,
		stiffness: props.stiffness,
		paused: props.paused,
		dpr: props.dpr
	}))

	const containerStyle = computed<CSSProperties>(() => {
		const mask = fadeMask(clamp(props.fade, 0, 1))

		if (mask === 'none') {
			return {
				opacity: clamp(props.opacity, 0, 1),
				backgroundColor: props.backgroundColor
			}
		}

		return {
			opacity: clamp(props.opacity, 0, 1),
			backgroundColor: props.backgroundColor,
			maskImage: mask,
			WebkitMaskImage: mask,
			maskComposite: 'intersect',
			WebkitMaskComposite: 'source-in'
		}
	})

	let worker: Worker | null = null
	let pointerInside = false

	const post = (command: RendererCommand, transfer: Transferable[] = []) => {
		if (isNil(worker)) {
			return
		}

		worker.postMessage(command, transfer)
	}

	const postResize = () => {
		post({
			command: 'resize',
			payload: {
				width: Math.max(1, width.value),
				height: Math.max(1, height.value),
				dpr: pixelRatio.value
			}
		})
	}

	const pointInContainer = (event: PointerEvent): [number, number] | null => {
		const container = containerRef.value

		if (isNil(container)) {
			return null
		}

		const rect = container.$el.getBoundingClientRect()
		const x = event.clientX - rect.left
		const y = event.clientY - rect.top

		if (x < 0 || y < 0 || x > rect.width || y > rect.height) {
			return null
		}

		return [x, y]
	}

	const onPointerMove = (event: PointerEvent) => {
		const point = pointInContainer(event)

		if (isNil(point)) {
			if (!pointerInside) {
				return
			}

			pointerInside = false

			post({
				command: 'pointer-move',
				payload: {
					position: {
						x: 0,
						y: 0
					},
					inside: false
				}
			})

			return
		}

		if (!pointerInside) {
			pointerInside = true
		}

		post({
			command: 'pointer-move',
			payload: {
				position: {
					x: point[0],
					y: point[1]
				},
				inside: true
			}
		})
	}

	const onPointerDown = (event: PointerEvent) => {
		const point = pointInContainer(event)

		if (isNil(point)) {
			return
		}

		post({
			command: 'pointer-down',
			payload: {
				x: point[0],
				y: point[1]
			}
		})
	}

	const onPointerLeave = () => {
		if (!pointerInside) {
			return
		}

		pointerInside = false

		post({
			command: 'pointer-leave'
		})
	}

	const onWorkerMessage = (event: MessageEvent<RendererEvent>) => {
		const canvas = canvasRef.value
		const message = event.data

		if (isNil(canvas)) {
			return
		}

		canvas.style.width = `${message.payload.width}px`
		canvas.style.height = `${message.payload.height}px`
		canvas.style.transform = message.payload.transform
	}

	watch(settings, value => {
		post({
			command: 'update-settings',
			payload: value
		})
	})

	watch([width, height, pixelRatio], () => {
		postResize()
	})

	useEventListener('pointermove', onPointerMove, {
		passive: true
	})

	useEventListener('pointerdown', onPointerDown, {
		passive: true
	})

	useEventListener('blur', onPointerLeave)

	useEventListener(documentElement, 'pointerleave', onPointerLeave)

	useIntersectionObserver(containerRef, entries => {
		post({
			command: 'visibility-change',
			payload: {
				visible: entries.some(entry => entry.isIntersecting)
			}
		})
	})

	const createWorker = (): Worker | null => {
		try {
			return new RendererWorker()
		} catch (error) {
			if (import.meta.env.DEV) {
				throw error
			}

			return null
		}
	}

	onMounted(() => {
		const canvas = canvasRef.value

		if (isNil(canvas)) {
			return
		}

		if (typeof canvas.transferControlToOffscreen !== 'function') {
			if (import.meta.env.DEV) {
				throw new Error('ShapeGrid requires OffscreenCanvas support')
			}

			return
		}

		const instance = createWorker()

		if (isNil(instance)) {
			return
		}

		worker = instance
		instance.addEventListener('message', onWorkerMessage)

		const offscreen = canvas.transferControlToOffscreen()
		const init: RendererCommand = {
			command: 'initialize',
			payload: {
				canvas: offscreen,
				settings: settings.value,
				viewport: {
					width: Math.max(1, width.value),
					height: Math.max(1, height.value),
					dpr: pixelRatio.value
				},
				reduceMotion: reducedMotion.value === 'reduce'
			}
		}

		instance.postMessage(init, [offscreen])
	})

	onBeforeUnmount(() => {
		if (isNotNil(worker)) {
			worker.terminate()
			worker = null
		}
	})
</script>

<template>
	<n-element
		ref="containerRef"
		class="relative h-full w-full overflow-hidden"
		:style="containerStyle"
	>
		<canvas
			ref="canvasRef"
			class="absolute top-0 left-0 block origin-top-left"
		/>
	</n-element>
</template>