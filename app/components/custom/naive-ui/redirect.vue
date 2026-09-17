<script lang="ts" setup>
	import { createReusableTemplate } from '@vueuse/core'
	import { useMessage } from 'naive-ui'
	import { useRouter } from 'nuxt/app'
	import { computed, h, shallowRef } from 'vue'

	import { modal as modalStyle } from '~/styles/naive-ui'

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

	const { define: ParseExceptionMessageContentDefine, reuse: ParseExceptionMessageContent } = createReusableTemplate<{
		readonly error: unknown
	}>()

	const router = useRouter()
	const message = useMessage()

	const show = shallowRef(false)

	const processedRel = computed(() => {
		return ['noopener', ...props.rel].join(' ')
	})

	const handle = async () => {
		if (props.href.startsWith('/')) {
			await router.push({
				path: props.href
			})

			return
		}

		try {
			const url = new URL(props.href)

			if (['http:', 'https:'].includes(url.protocol) && url.host !== location.host) {
				show.value = true
				return
			}

			open(props.href, '_blank', processedRel.value)
		} catch (error) {
			message.error(() => {
				return h(ParseExceptionMessageContent, {
					error
				})
			})
		}
	}
</script>

<template>
	<ParseExceptionMessageContentDefine>
		<template #default="{ error }">
			<n-flex
				:size="0"
				vertical
			>
				<n-text>URL 解析异常</n-text>
				<n-text :depth="3">{{ error }}</n-text>
			</n-flex>
		</template>
	</ParseExceptionMessageContentDefine>

	<n-modal
		v-model:show="show"
		:class="modalStyle"
		preset="card"
		size="small"
		title="即将离开当前网站"
	>
		<n-flex
			align="center"
			size="large"
			vertical
		>
			<n-text
				class="text-[1.5em]"
				strong
				type="warning"
			>
				外部内容警告
			</n-text>

			<n-button
				:focusable="false"
				:href="href"
				:rel="processedRel"
				class="text-([1.2em] wrap) fw-bold"
				tag="a"
				target="_blank"
				text
				type="info"
			>
				{{ href }}
			</n-button>

			<n-text :depth="3"> ↑ 自行判断 如需继续请戳上面的连接 ↑</n-text>
		</n-flex>
	</n-modal>

	<slot
		:a-props="{ href, rel: processedRel }"
		:href="href"
		:redirect="handle"
		:rel="processedRel"
	/>
</template>