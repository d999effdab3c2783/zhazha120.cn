<template>
	<div ref="containerRef" class="relative w-full h-full" @click="handleClick">
		<canvas ref="canvasRef" class="absolute inset-0 pointer-events-none" />

		<slot />
	</div>
</template>

<script lang="ts" setup>
	import { isNonNullish, isNullish } from 'remeda'
	import { computed, onMounted, onUnmounted, ref, useTemplateRef, watch } from 'vue'

	interface Spark {
		x: number
		y: number
		angle: number
		startTime: number
	}

	interface Props {
		sparkColor?: string
		sparkSize?: number
		sparkRadius?: number
		sparkCount?: number
		duration?: number
		easing?: 'linear' | 'ease-in' | 'ease-out' | 'ease-in-out'
		extraScale?: number
	}

	const props = withDefaults(defineProps<Props>(), {
		sparkColor: '#fff',
		sparkSize: 10,
		sparkRadius: 15,
		sparkCount: 8,
		duration: 400,
		easing: 'ease-out',
		extraScale: 1.0
	})

	// @ts-ignore
	const containerRef = useTemplateRef<HTMLDivElement>('containerRef')
	const canvasRef = useTemplateRef<HTMLCanvasElement>('canvasRef')
	const sparks = ref<Spark[]>([])
	const startTimeRef = ref<number>()
	const animationId = ref<number>()

	const easeFunc = computed(() => {
		return (t: number) => {
			switch (props.easing) {
				case 'linear':
					return t
				case 'ease-in':
					return t * t
				case 'ease-in-out':
					return 0.5 > t ? 2 * t * t : -1 + (4 - 2 * t) * t
				default:
					return t * (2 - t)
			}
		}
	})

	const handleClick = (e: MouseEvent) => {
		const canvas = canvasRef.value

		if (isNullish(canvas)) {
			return
		}

		const rect = canvas.getBoundingClientRect()
		const x = e.clientX - rect.left
		const y = e.clientY - rect.top

		const now = performance.now()

		const newSparks: Spark[] = Array.from(
			{
				length: props.sparkCount
			},
			(_, i) => {
				return {
					x,
					y,
					angle: (2 * Math.PI * i) / props.sparkCount,
					startTime: now
				}
			}
		)

		sparks.value.push(...newSparks)
	}

	const draw = (timestamp: number) => {
		if (isNullish(startTimeRef.value)) {
			startTimeRef.value = timestamp
		}

		const canvas = canvasRef.value

		const context = canvas?.getContext('2d')

		if (isNullish(context) || isNullish(canvas)) {
			return
		}

		context.clearRect(0, 0, canvas.width, canvas.height)

		sparks.value = sparks.value.filter((spark: Spark) => {
			const elapsed = timestamp - spark.startTime

			if (elapsed >= props.duration) {
				return false
			}

			const progress = elapsed / props.duration
			const eased = easeFunc.value(progress)

			const distance = eased * props.sparkRadius * props.extraScale
			const lineLength = props.sparkSize * (1 - eased)

			const x1 = spark.x + distance * Math.cos(spark.angle)
			const y1 = spark.y + distance * Math.sin(spark.angle)
			const x2 = spark.x + (distance + lineLength) * Math.cos(spark.angle)
			const y2 = spark.y + (distance + lineLength) * Math.sin(spark.angle)

			context.strokeStyle = props.sparkColor
			context.lineWidth = 2
			context.beginPath()
			context.moveTo(x1, y1)
			context.lineTo(x2, y2)
			context.stroke()

			return true
		})

		animationId.value = requestAnimationFrame(draw)
	}

	const resizeCanvas = () => {
		const canvas = canvasRef.value

		if (isNullish(canvas)) {
			return
		}

		const parent = canvas.parentElement

		if (isNullish(parent)) {
			return
		}

		const { width, height } = parent.getBoundingClientRect()

		if (canvas.width !== width || canvas.height !== height) {
			canvas.width = width
			canvas.height = height
		}
	}

	let resizeTimeout: ReturnType<typeof setTimeout>

	const handleResize = () => {
		clearTimeout(resizeTimeout)
		resizeTimeout = setTimeout(resizeCanvas, 100)
	}

	let resizeObserver: ResizeObserver

	onMounted(() => {
		const canvas = canvasRef.value

		if (isNullish(canvas)) {
			return
		}

		const parent = canvas.parentElement

		if (isNullish(parent)) {
			return
		}

		resizeObserver = new ResizeObserver(handleResize)
		resizeObserver.observe(parent)

		resizeCanvas()

		animationId.value = requestAnimationFrame(draw)
	})

	onUnmounted(() => {
		if (isNonNullish(resizeObserver)) {
			resizeObserver.disconnect()
		}

		clearTimeout(resizeTimeout)

		if (isNonNullish(animationId.value)) {
			cancelAnimationFrame(animationId.value)
		}
	})

	watch(
		[
			() => {
				return props.sparkColor
			},
			() => {
				return props.sparkSize
			},
			() => {
				return props.sparkRadius
			},
			() => {
				return props.sparkCount
			},
			() => {
				return props.duration
			},
			easeFunc,
			() => {
				return props.extraScale
			}
		],
		() => {
			if (isNonNullish(animationId.value)) {
				cancelAnimationFrame(animationId.value)
			}

			animationId.value = requestAnimationFrame(draw)
		}
	)
</script>