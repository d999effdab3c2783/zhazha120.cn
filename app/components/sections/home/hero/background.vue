<script lang="ts">
	import { extend } from '@colordx/core'
	import mix from '@colordx/core/plugins/mix'
	import { gsap } from 'gsap'
	import { InertiaPlugin } from 'gsap/InertiaPlugin'

	export type Dot = {
		cx: number
		cy: number

		xOffset: number
		yOffset: number

		inertiaApplied: boolean
	}

	extend([mix])

	gsap.registerPlugin(InertiaPlugin)
</script>

<script setup lang="ts">
	import { colordx } from '@colordx/core'
	import {
		useDevicePixelRatio,
		useElementVisibility,
		useEventListener,
		useMouseInElement,
		usePageLeave,
		useRafFn,
		useResizeObserver
	} from '@vueuse/core'
	import { clsx } from 'clsx'
	import { isNil, isNotNil } from 'es-toolkit'
	import { useLenis } from 'lenis/vue'
	import {
		computed,
		nextTick,
		onWatcherCleanup,
		shallowReactive,
		shallowRef,
		useTemplateRef,
		watch,
		type ComponentPublicInstance
	} from 'vue'

	const props = withDefaults(
		defineProps<
			Partial<{
				readonly dotSize: number
				readonly gap: number
				readonly baseColor: string
				readonly activeColor: string
				readonly proximity: number
				readonly speedTrigger: number
				readonly shockRadius: number
				readonly shockStrength: number
				readonly maxSpeed: number
				readonly resistance: number
				readonly returnDuration: number
				readonly class: string
			}>
		>(),
		{
			dotSize: () => 16,
			gap: () => 32,
			baseColor: () => 'black',
			activeColor: () => 'white',
			proximity: () => 150,
			speedTrigger: () => 100,
			shockRadius: () => 250,
			shockStrength: () => 5,
			maxSpeed: () => 5000,
			resistance: () => 750,
			returnDuration: () => 1.5,
			class: () => 'size-full'
		}
	)

	defineOptions({
		inheritAttrs: false
	})

	const containerRef = useTemplateRef<ComponentPublicInstance>('containerRef')
	const canvasRef = useTemplateRef('canvasRef')

	const { pixelRatio } = useDevicePixelRatio()

	const pageLeave = usePageLeave()
	const containerElementVisibility = useElementVisibility(containerRef)
	const mouseInCanvasElement = useMouseInElement(canvasRef)

	const drawRaf = useRafFn(
		() => {
			draw()
		},
		{
			immediate: false
		}
	)

	const lenis = useLenis()

	const show = computed(() => {
		return containerElementVisibility.value && !pageLeave.value
	})

	const classNames = computed(() => {
		return clsx(props.class)
	})

	const baseRgb = computed(() => {
		return colordx(props.baseColor).toRgb()
	})

	const baseRgbString = computed(() => {
		return colordx(props.baseColor).toRgbString()
	})

	const activeRgb = computed(() => {
		return colordx(props.activeColor).toRgb()
	})

	const pointer = {
		x: -1,
		y: -1,
		vx: 0,
		vy: 0,
		speed: 0,
		lastTime: 0,
		lastX: 0,
		lastY: 0
	}

	const canvasRect = shallowReactive({
		width: 0,
		height: 0,
		top: 0,
		left: 0
	})

	const dots = shallowRef<Dot[]>([])

	const updateRect = () => {
		if (isNil(canvasRef.value)) {
			return
		}

		const rect = canvasRef.value.getBoundingClientRect()

		canvasRect.width = rect.width
		canvasRect.height = rect.height
		canvasRect.top = rect.top
		canvasRect.left = rect.left
	}

	const buildGrid = () => {
		if (canvasRect.width <= 0 || canvasRect.height <= 0 || isNil(canvasRef.value)) {
			return
		}

		gsap.killTweensOf(dots.value)

		canvasRef.value.width = canvasRect.width * pixelRatio.value
		canvasRef.value.height = canvasRect.height * pixelRatio.value

		const colsSpan = canvasRect.width + props.gap
		const rowsSpan = canvasRect.height + props.gap
		const cellSpan = props.dotSize + props.gap

		const cols = Math.floor(colsSpan / cellSpan)
		const rows = Math.floor(rowsSpan / cellSpan)

		const gridW = cellSpan * cols - props.gap
		const gridH = cellSpan * rows - props.gap

		const extraX = canvasRect.width - gridW
		const extraY = canvasRect.height - gridH

		const startX = extraX / 2 + props.dotSize / 2
		const startY = extraY / 2 + props.dotSize / 2

		dots.value = []

		for (let y = 0; y < rows; y++) {
			for (let x = 0; x < cols; x++) {
				const cx = startX + x * cellSpan
				const cy = startY + y * cellSpan

				dots.value.push({
					cx,
					cy,

					xOffset: 0,
					yOffset: 0,

					inertiaApplied: false
				})
			}
		}

		draw()
	}

	const draw = () => {
		if (isNil(canvasRef.value)) {
			return
		}

		const context = canvasRef.value.getContext('2d')

		if (isNil(context)) {
			return
		}

		context.clearRect(0, 0, canvasRect.width * pixelRatio.value, canvasRect.height * pixelRatio.value)
		context.save()

		context.scale(pixelRatio.value, pixelRatio.value)

		const radius = props.dotSize / 2
		const proxSq = props.proximity * props.proximity

		const baseColor = colordx(baseRgb.value)

		for (const dot of dots.value) {
			const x = dot.cx + dot.xOffset
			const y = dot.cy + dot.yOffset

			context.beginPath()

			context.arc(x, y, radius, 0, Math.PI * 2)

			context.fillStyle = baseRgbString.value

			if (pointer.x >= 0 && pointer.y >= 0) {
				const dx = dot.cx - pointer.x
				const dy = dot.cy - pointer.y
				const dsq = dx * dx + dy * dy

				if (dsq <= proxSq) {
					const dist = Math.sqrt(dsq)
					const t = 1 - dist / props.proximity

					context.fillStyle = baseColor.mix(activeRgb.value, t).toRgbString()
				}
			}

			context.fill()
		}

		context.restore()
	}

	const handleMove = (event: MouseEvent) => {
		if (mouseInCanvasElement.isOutside.value) {
			pointer.x = -1
			pointer.y = -1
			return
		}

		pointer.x = event.clientX - canvasRect.left
		pointer.y = event.clientY - canvasRect.top

		const now = performance.now()

		if (pointer.lastTime <= 0) {
			pointer.lastTime = now
			pointer.lastX = event.clientX
			pointer.lastY = event.clientY
			return
		}

		const dt = now - pointer.lastTime

		if (dt <= 0) {
			return
		}

		const dx = event.clientX - pointer.lastX
		const dy = event.clientY - pointer.lastY

		let vx = (dx / dt) * 1000
		let vy = (dy / dt) * 1000
		let speed = Math.hypot(vx, vy)

		if (speed > props.maxSpeed) {
			const scale = props.maxSpeed / speed

			vx *= scale
			vy *= scale
			speed = props.maxSpeed
		}

		pointer.vx = vx
		pointer.vy = vy
		pointer.speed = speed
		pointer.lastTime = now
		pointer.lastX = event.clientX
		pointer.lastY = event.clientY

		if (speed <= props.speedTrigger) {
			return
		}

		const proximitySq = props.proximity * props.proximity

		for (const dot of dots.value) {
			const dtx = dot.cx - pointer.x
			const dty = dot.cy - pointer.y

			if (dtx * dtx + dty * dty >= proximitySq) {
				continue
			}

			if (dot.inertiaApplied) {
				continue
			}

			dot.inertiaApplied = true
			gsap.killTweensOf(dot)

			const pushX = dtx + vx * 0.005
			const pushY = dty + vy * 0.005

			gsap.to(dot, {
				inertia: {
					xOffset: pushX,
					yOffset: pushY,
					resistance: props.resistance
				},
				onComplete: () => {
					gsap.to(dot, {
						xOffset: 0,
						yOffset: 0,
						duration: props.returnDuration,
						ease: 'elastic.out(1,0.75)'
					})

					dot.inertiaApplied = false
				}
			})
		}
	}

	const handleClick = (event: MouseEvent) => {
		if (mouseInCanvasElement.isOutside.value) {
			return
		}

		const cx = event.clientX - canvasRect.left
		const cy = event.clientY - canvasRect.top

		for (const dot of dots.value) {
			const dist = Math.hypot(dot.cx - cx, dot.cy - cy)

			if (dot.inertiaApplied) {
				continue
			}

			if (dist < props.shockRadius) {
				dot.inertiaApplied = true
				gsap.killTweensOf(dot)

				const falloff = Math.max(0, 1 - dist / props.shockRadius)
				const pushX = (dot.cx - cx) * props.shockStrength * falloff
				const pushY = (dot.cy - cy) * props.shockStrength * falloff

				gsap.to(dot, {
					inertia: {
						xOffset: pushX,
						yOffset: pushY,
						resistance: props.resistance
					},
					onComplete: () => {
						gsap.to(dot, {
							xOffset: 0,
							yOffset: 0,
							duration: props.returnDuration,
							ease: 'elastic.out(1,0.75)'
						})

						dot.inertiaApplied = false
					}
				})
			}
		}
	}

	watch(
		[show, () => canvasRect.width, () => canvasRect.height, pixelRatio, () => props.dotSize, () => props.gap],
		async () => {
			await nextTick(() => {
				buildGrid()
			})
		},
		{
			immediate: true
		}
	)

	watch(
		canvasRef,
		newCanvasRef => {
			if (isNil(newCanvasRef)) {
				return
			}

			const resizeObserver = useResizeObserver(newCanvasRef, () => {
				updateRect()
			})

			onWatcherCleanup(() => {
				resizeObserver.stop()
			})

			if (isNotNil(lenis.value)) {
				lenis.value.on('scroll', updateRect)

				onWatcherCleanup(() => {
					if (isNil(lenis.value)) {
						return
					}

					lenis.value.off('scroll', updateRect)
				})
			} else {
				const stopScrollHandler = useEventListener('scroll', updateRect)

				onWatcherCleanup(() => {
					stopScrollHandler()
				})
			}

			const stopMoveHandler = useEventListener('mousemove', handleMove)
			const stopClickHandler = useEventListener('click', handleClick)

			onWatcherCleanup(() => {
				stopMoveHandler()
				stopClickHandler()
			})
		},
		{
			immediate: true
		}
	)

	watch(
		show,
		newShow => {
			if (!newShow) {
				drawRaf.pause()
				return
			}

			drawRaf.resume()
		},
		{
			immediate: true
		}
	)
</script>

<template>
	<n-element
		ref="containerRef"
		:class="classNames"
	>
		<transition
			appear
			mode="out-in"
			name="v-fade"
		>
			<template v-if="show">
				<canvas
					ref="canvasRef"
					class="size-full"
				/>
			</template>
		</transition>
	</n-element>
</template>

<style lang="scss">
	@use '~/styles/transitions/fade';
</style>