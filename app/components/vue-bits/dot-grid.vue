<script lang="ts">
	type Dot = {
		cx: number
		cy: number
		xOffset: number
		yOffset: number
		inertiaApplied: boolean
	}
</script>

<script lang="ts" setup>
	import { isNil, isNotNil, throttle } from 'es-toolkit'
	import { gsap } from 'gsap'
	import { InertiaPlugin } from 'gsap/InertiaPlugin'
	import { computed, type CSSProperties, nextTick, onMounted, onUnmounted, ref, useTemplateRef, watch } from 'vue'

	import { useThemeStore } from '~/stores/theme'

	gsap.registerPlugin(InertiaPlugin)

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
				readonly className: string
				readonly style: CSSProperties
			}>
		>(),
		{
			dotSize: 16,
			gap: 32,
			baseColor: '#27FF64',
			activeColor: '#27FF64',
			proximity: 150,
			speedTrigger: 100,
			shockRadius: 250,
			shockStrength: 5,
			maxSpeed: 5000,
			resistance: 750,
			returnDuration: 1.5,
			className: '',
			style: () => ({})
		}
	)

	const wrapperRef = useTemplateRef('wrapperRef')
	const canvasRef = useTemplateRef<HTMLCanvasElement>('canvasRef')

	const themeStore = useThemeStore()

	const dots = ref<Dot[]>([])

	const pointer = ref({
		x: 0,
		y: 0,
		vx: 0,
		vy: 0,
		speed: 0,
		lastTime: 0,
		lastX: 0,
		lastY: 0
	})

	function hexToRgb(hex: string) {
		const m = hex.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i)

		if (isNil(m) || isNil(m[1]) || isNil(m[2]) || isNil(m[3])) {
			return {
				r: 0,
				g: 0,
				b: 0
			}
		}

		return {
			r: parseInt(m[1], 16),
			g: parseInt(m[2], 16),
			b: parseInt(m[3], 16)
		}
	}

	const baseRgb = computed(() => {
		return hexToRgb(props.baseColor)
	})

	const activeRgb = computed(() => {
		return hexToRgb(props.activeColor)
	})

	const circlePath = computed(() => {
		if (isNil(Path2D)) {
			return null
		}

		const p = new Path2D()

		p.arc(0, 0, props.dotSize / 2, 0, Math.PI * 2)

		return p
	})

	const buildGrid = () => {
		const wrap = wrapperRef.value
		const canvas = canvasRef.value

		if (isNil(wrap) || isNil(canvas)) {
			return
		}

		const { width, height } = wrap.$el.getBoundingClientRect()

		const dpr = devicePixelRatio || 1

		canvas.width = width * dpr
		canvas.height = height * dpr
		canvas.style.width = `${width}px`
		canvas.style.height = `${height}px`

		const ctx = canvas.getContext('2d')

		if (isNotNil(ctx)) {
			ctx.scale(dpr, dpr)
		}

		const cols = Math.floor((width + props.gap) / (props.dotSize + props.gap))
		const rows = Math.floor((height + props.gap) / (props.dotSize + props.gap))
		const cell = props.dotSize + props.gap

		const gridW = cell * cols - props.gap
		const gridH = cell * rows - props.gap

		const extraX = width - gridW
		const extraY = height - gridH

		const startX = extraX / 2 + props.dotSize / 2
		const startY = extraY / 2 + props.dotSize / 2

		const newDots: Dot[] = []

		for (let y = 0; y < rows; y++) {
			for (let x = 0; x < cols; x++) {
				const cx = startX + x * cell
				const cy = startY + y * cell

				newDots.push({
					cx,
					cy,
					xOffset: 0,
					yOffset: 0,
					inertiaApplied: false
				})
			}
		}

		dots.value = newDots
	}

	let rafId: number
	let resizeObserver: ResizeObserver | null = null

	const draw = () => {
		const canvas = canvasRef.value

		if (isNil(canvas)) {
			return
		}

		const ctx = canvas.getContext('2d')

		if (isNil(ctx)) {
			return
		}

		ctx.clearRect(0, 0, canvas.width, canvas.height)

		const { x: px, y: py } = pointer.value
		const proxSq = props.proximity * props.proximity

		for (const dot of dots.value) {
			const ox = dot.cx + dot.xOffset
			const oy = dot.cy + dot.yOffset
			const dx = dot.cx - px
			const dy = dot.cy - py
			const dsq = dx * dx + dy * dy

			let style = props.baseColor

			if (dsq <= proxSq) {
				const dist = Math.sqrt(dsq)

				let t,
					r,
					g,
					b = 0

				switch (themeStore.actualMode) {
					case 'light':
						t = dist / props.proximity

						r = Math.round(activeRgb.value.r + (255 - activeRgb.value.r) * t)
						g = Math.round(activeRgb.value.g + (255 - activeRgb.value.g) * t)
						b = Math.round(activeRgb.value.b + (255 - activeRgb.value.b) * t)

						style = `rgb(${r},${g},${b})`
						break
					case 'dark':
						t = 1 - dist / props.proximity

						r = Math.round(baseRgb.value.r + (activeRgb.value.r - baseRgb.value.r) * t)
						g = Math.round(baseRgb.value.g + (activeRgb.value.g - baseRgb.value.g) * t)
						b = Math.round(baseRgb.value.b + (activeRgb.value.b - baseRgb.value.b) * t)

						style = `rgb(${r},${g},${b})`
						break
				}
			}

			if (isNotNil(circlePath.value)) {
				ctx.save()
				ctx.translate(ox, oy)
				ctx.fillStyle = style
				ctx.fill(circlePath.value)
				ctx.restore()
			}
		}

		rafId = requestAnimationFrame(draw)
	}

	const onMove = (e: MouseEvent) => {
		const now = performance.now()
		const pr = pointer.value
		const dt = pr.lastTime ? now - pr.lastTime : 16
		const dx = e.clientX - pr.lastX
		const dy = e.clientY - pr.lastY

		let vx = (dx / dt) * 1000
		let vy = (dy / dt) * 1000
		let speed = Math.hypot(vx, vy)

		if (speed > props.maxSpeed) {
			const scale = props.maxSpeed / speed
			vx *= scale
			vy *= scale
			speed = props.maxSpeed
		}

		pr.lastTime = now
		pr.lastX = e.clientX
		pr.lastY = e.clientY
		pr.vx = vx
		pr.vy = vy
		pr.speed = speed

		const canvas = canvasRef.value

		if (isNil(canvas)) {
			return
		}

		const rect = canvas.getBoundingClientRect()

		pr.x = e.clientX - rect.left
		pr.y = e.clientY - rect.top

		for (const dot of dots.value) {
			const dist = Math.hypot(dot.cx - pr.x, dot.cy - pr.y)

			if (speed > props.speedTrigger && dist < props.proximity && !dot.inertiaApplied) {
				dot.inertiaApplied = true
				gsap.killTweensOf(dot)

				const pushX = dot.cx - pr.x + vx * 0.005
				const pushY = dot.cy - pr.y + vy * 0.005

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

	const onClick = (e: MouseEvent) => {
		const canvas = canvasRef.value

		if (isNil(canvas)) {
			return
		}

		const rect = canvas.getBoundingClientRect()

		const cx = e.clientX - rect.left
		const cy = e.clientY - rect.top

		for (const dot of dots.value) {
			const dist = Math.hypot(dot.cx - cx, dot.cy - cy)

			if (dist < props.shockRadius && !dot.inertiaApplied) {
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

	const throttledMove = throttle(onMove, 50)

	onMounted(async () => {
		await nextTick()

		buildGrid()

		if (isNotNil(circlePath.value)) {
			draw()
		}

		if (isNotNil(ResizeObserver)) {
			resizeObserver = new ResizeObserver(buildGrid)

			if (isNotNil(wrapperRef.value)) {
				resizeObserver.observe(wrapperRef.value.$el)
			}
		} else {
			addEventListener('resize', buildGrid)
		}

		addEventListener('mousemove', throttledMove, { passive: true })
		addEventListener('click', onClick)
	})

	onUnmounted(() => {
		if (isNotNil(rafId)) {
			cancelAnimationFrame(rafId)
		}

		if (isNotNil(resizeObserver)) {
			resizeObserver.disconnect()
		} else {
			removeEventListener('resize', buildGrid)
		}

		removeEventListener('mousemove', throttledMove)
		removeEventListener('click', onClick)
	})

	watch([() => props.dotSize, () => props.gap], () => {
		buildGrid()
	})

	watch([() => props.proximity, () => props.baseColor, activeRgb, baseRgb, circlePath], () => {
		if (isNotNil(rafId)) {
			cancelAnimationFrame(rafId)
		}

		if (isNotNil(circlePath.value)) {
			draw()
		}
	})
</script>

<template>
	<n-element
		:class="['flex-(~ justify-center items-center) size-full position-relative', className]"
		:style="style"
	>
		<n-element
			ref="wrapperRef"
			class="size-full position-relative"
		>
			<canvas
				ref="canvasRef"
				class="size-full pointer-events-none position-(inset-0 absolute)"
			/>
		</n-element>
	</n-element>
</template>