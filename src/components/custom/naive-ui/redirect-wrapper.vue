<script lang="ts">
	export type Props = {
		readonly rel?: string[]
		readonly href: string
	}
</script>

<script lang="ts" setup>
	import { isNullish } from 'remeda'

	defineOptions({
		inheritAttrs: false
	})

	const props = withDefaults(defineProps<Props>(), {
		rel: () => {
			return []
		}
	})

	const modalRef = useTemplateRef('modalRef')

	const message = useMessage()
	const router = useRouter()

	const { define: ParseExceptionMessageContentDefine, reuse: ParseExceptionMessageContent } = createReusableTemplate<{
		readonly error: unknown
	}>()

	const processedRel = computed(() => {
		return ['noopener', ...props.rel].join(' ')
	})

	const handle = async () => {
		if (isNullish(modalRef.value)) {
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
			<custom-naive-ui-text-stack>
				<n-text>URL 解析异常</n-text>
				<n-text :depth="3">{{ error }}</n-text>
			</custom-naive-ui-text-stack>
		</template>
	</ParseExceptionMessageContentDefine>

	<custom-naive-ui-modal ref="modalRef" preset="card" size="small" title="即将离开当前网站">
		<template #trigger>
			<slot :a-props="{ href, rel: processedRel }" :href="href" :redirect="handle" :rel="processedRel" />
		</template>

		<custom-naive-ui-vertical-stack align="center">
			<n-text class="text-[1.5em]">外部内容警告</n-text>

			<n-button
				:href="href"
				:rel="processedRel"
				class="py-2 w-full text-wrap"
				tag="a"
				target="_blank"
				text
				type="primary"
			>
				{{ href }}
			</n-button>

			<n-text :depth="3">↑ 自行判断 如需继续请戳上面的连接 ↑</n-text>
		</custom-naive-ui-vertical-stack>

		<template #action>
			<slot name="extra" />
		</template>
	</custom-naive-ui-modal>
</template>