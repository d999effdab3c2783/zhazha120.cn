<script setup lang="ts">
	import { isNil, isNotNil } from 'es-toolkit'
	import { computed, useTemplateRef } from 'vue'

	import { useRouter } from '#app'
	import { useApiStore } from '~/stores/api'

	const props = withDefaults(
		defineProps<
			{
				readonly href: string
			} & Partial<{
				readonly rel: string[]
			}>
		>(),
		{
			rel: () => []
		}
	)

	defineOptions({
		inheritAttrs: false
	})

	const modalRef = useTemplateRef('modalRef')

	const apiStore = useApiStore()
	const router = useRouter()

	const processedRel = computed(() => {
		return ['noopener', ...props.rel].join(' ')
	})

	const handle = async () => {
		if (isNil(modalRef.value)) {
			return
		}

		if (props.href.startsWith('/')) {
			await router.push({
				path: props.href
			})

			return
		}

		try {
			const url = new URL(props.href)

			if (['http:', 'https:'].includes(url.protocol) && url.host !== location.host) {
				modalRef.value.show()
				return
			}

			open(props.href, '_blank', processedRel.value)
		} catch (error) {
			if (isNotNil(apiStore.message)) {
				apiStore.message.error(`URL 解析异常: ${error}`)
			}
		}
	}
</script>

<template>
	<custom-modal
		ref="modalRef"
		preset="card"
		size="small"
		title="即将离开当前网站"
	>
		<template #trigger>
			<slot
				:a-props="{ href, rel: processedRel }"
				:href="href"
				:redirect="handle"
				:rel="processedRel"
			/>
		</template>

		<n-flex
			align="center"
			size="small"
			vertical
		>
			<n-text
				class="text-[1.5em]"
				type="warning"
			>
				外部内容警告
			</n-text>

			<n-button
				class="fw-bold py-2 text-wrap"
				:href="href"
				:rel="processedRel"
				tag="a"
				target="_blank"
				text
				type="primary"
			>
				{{ href }}
			</n-button>

			<n-text :depth="3">↑ 自行判断 如需继续请戳上面的连接 ↑</n-text>
		</n-flex>

		<template
			v-if="isNotNil($slots.footer)"
			#footer
		>
			<n-divider class="!mt-0" />

			<n-element class="utils__center--flex">
				<slot name="footer" />
			</n-element>
		</template>
	</custom-modal>
</template>

<style scoped lang="scss">
	@use '~/styles/utils';
</style>