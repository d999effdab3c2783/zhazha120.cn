<script lang="ts" setup>
	import { isNonNullish, isNullish } from 'remeda';
	import CustomModal from '@/components/custom/naive-ui/modal.vue';
	import { NFlex, NText } from 'naive-ui';

	defineOptions({
		inheritAttrs: false,
	});

	const props = withDefaults(
		defineProps<{
			readonly rel?: string[];
			readonly href: string;
		}>(),
		{
			rel: () => [],
		},
	);

	const modalRef = useTemplateRef('modalRef');

	const message = useMessage();
	const router = useRouter();

	const { define: ParseExceptionMessageContentDefine, reuse: ParseExceptionMessageContent } = createReusableTemplate<{
		readonly error: unknown;
	}>();

	const processedRel = computed(() => ['noopener', ...props.rel].join(' '));

	const handle = async () => {
		if (isNullish(modalRef.value)) {
			return;
		}

		if (props.href.startsWith('/')) {
			await router.push({
				path: props.href,
			});

			return;
		}

		try {
			const url = new URL(props.href);

			if (['http:', 'https:'].includes(url.protocol) && url.host !== location.host) {
				modalRef.value.show();
				return;
			}

			open(props.href, '_blank', processedRel.value);
		} catch (error) {
			message.error(() =>
				h(ParseExceptionMessageContent, {
					error,
				}),
			);
		}
	};
</script>

<template>
	<ParseExceptionMessageContentDefine>
		<template #default="{ error }">
			<n-flex :size="0" vertical>
				<n-text>URL 解析异常</n-text>
				<n-text :depth="3">{{ error }}</n-text>
			</n-flex>
		</template>
	</ParseExceptionMessageContentDefine>

	<CustomModal ref="modalRef" preset="card" size="small" title="即将离开当前网站">
		<template #trigger>
			<slot :a-props="{ href, rel }" :href="href" :redirect="handle" :rel="processedRel" />
		</template>

		<n-flex align="center" size="small" vertical>
			<n-text class="text-6 fw-bold" type="warning">外部内容警告</n-text>

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

			<n-text>↑ 自行判断 如需继续请戳上面的连接 ↑</n-text>
		</n-flex>

		<template v-if="isNonNullish($slots.extra)">
			<n-divider />

			<slot name="extra" />
		</template>
	</CustomModal>
</template>