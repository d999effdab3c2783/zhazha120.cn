<script lang="ts">
	type Spark = {
		readonly x: number
		readonly y: number
		readonly angle: number
		readonly startTime: number
	}
</script>

<script lang="ts" setup>
	import { isNil, isNotNil } from 'es-toolkit'
	import { computed, onMounted, onUnmounted, ref, useTemplateRef, watch } from 'vue'

	const props = withDefaults(
		defineProps<
			Partial<{
				readonly sparkColor: string
				readonly sparkSize: number
				readonly sparkRadius: number
				readonly sparkCount: number
				readonly duration: number
				readonly easing: 'linear' | 'ease-in' | 'ease-out' | 'ease-in-out'
				readonly extraScale: number
			}>
		>(),
		{
			sparkColor: '#fff',
			sparkSize: 10,
			sparkRadius: 15,
			sparkCount: 8,
			duration: 400,
			easing: 'ease-out',
			extraScale: 1.0
		}
	)

	const containerRef = useTemplateRef('containerRef')
	const canvasRef = useTemplateRef<HTMLCanvasElement>('canvasRef')
	const sparks = ref<Spark[]>([])
	const startTimeRef = ref<number | null>(null)
	const animationId = ref<number | null>(null)

	const easeFunc = computed(() => {
		return (t: number) => {
			switch (props.easing) {
				case 'linear':
					return t
				case 'ease-in':
					return t * t
				case 'ease-in-out':
					return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t
				default:
					return t * (2 - t)
			}
		}
	})

	const handleClick = (e: MouseEvent) => {
		const canvas = canvasRef.value

		if (isNil(canvas)) {
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
			(_, i) => ({
				x,
				y,
				angle: (2 * Math.PI * i) / props.sparkCount,
				startTime: now
			})
		)

		sparks.value.push(...newSparks)
	}

	const draw = (timestamp: number) => {
		if (!startTimeRef.value) {
			startTimeRef.value = timestamp
		}

		const canvas = canvasRef.value

		if (isNil(canvas)) {
			return
		}

		const ctx = canvas.getContext('2d')

		if (isNil(ctx)) {
			return
		}

		ctx.clearRect(0, 0, canvas.width, canvas.height)

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

			ctx.strokeStyle = props.sparkColor
			ctx.lineWidth = 2
			ctx.beginPath()
			ctx.moveTo(x1, y1)
			ctx.lineTo(x2, y2)
			ctx.stroke()

			return true
		})

		animationId.value = requestAnimationFrame(draw)
	}

	const resizeCanvas = () => {
		const canvas = canvasRef.value

		if (isNil(canvas)) {
			return
		}

		const parent = canvas.parentElement

		if (isNil(parent)) {
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

	let resizeObserver: ResizeObserver | null = null

	onMounted(() => {
		const canvas = canvasRef.value

		if (isNil(canvas)) {
			return
		}

		const parent = canvas.parentElement

		if (isNil(parent)) {
			return
		}

		resizeObserver = new ResizeObserver(handleResize)
		resizeObserver.observe(parent)

		resizeCanvas()

		animationId.value = requestAnimationFrame(draw)
	})

	onUnmounted(() => {
		if (isNotNil(resizeObserver)) {
			resizeObserver.disconnect()
		}

		clearTimeout(resizeTimeout)

		if (isNotNil(animationId.value)) {
			cancelAnimationFrame(animationId.value)
		}
	})

	watch(
		[
			() => props.sparkColor,
			() => props.sparkSize,
			() => props.sparkRadius,
			() => props.sparkCount,
			() => props.duration,
			easeFunc,
			() => props.extraScale
		],
		() => {
			if (isNotNil(animationId.value)) {
				cancelAnimationFrame(animationId.value)
			}

			animationId.value = requestAnimationFrame(draw)
		}
	)
</script>

<template>
	<n-element
		ref="containerRef"
		class="size-full position-relative"
		@click="handleClick"
	>
		<canvas
			ref="canvasRef"
			class="pointer-events-none position-(inset-0 absolute)"
		/>

		<slot />
	</n-element>
</template>