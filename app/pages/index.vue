<script lang="ts" setup>
	import { isNil, isNotNil } from 'es-toolkit'
	import { useLenis } from 'lenis/vue'
	import { onMounted, useTemplateRef } from 'vue'

	import event from '~/shared/event'

	const part1Ref = useTemplateRef('part1Ref')
	const part2Ref = useTemplateRef('part2Ref')

	onMounted(() => {
		const lenis = useLenis()

		event.on('index:scroll', (target: number) => {
			if (isNil(lenis.value)) {
				return
			}

			switch (target) {
				case 1:
					if (isNotNil(part1Ref.value)) {
						lenis.value.scrollTo(part1Ref.value.$el)
					}
					break
				case 2:
					if (isNotNil(part2Ref.value)) {
						lenis.value.scrollTo(part2Ref.value.$el)
					}
					break
			}
		})
	})
</script>

<template>
	<n-flex
		:size="0"
		vertical
	>
		<sections-pages-index-1 ref="part1Ref" />
		<sections-pages-index-2 ref="part2Ref" />
	</n-flex>
</template>