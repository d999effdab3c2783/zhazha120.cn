<script lang="ts" setup>
import CustomMarkdown from '@/components/custom/markdown/index.vue'
import CustomNaivePosition from '@/components/custom/naive/position.vue'
import { useZodRegistry } from '@/composables/database'
import { alova } from '@/shared/alova'
import { computedAsync } from '@vueuse/core'
import { NElement, NResult, NSpin } from 'naive-ui'
import { isNonNullish, isNullish } from 'remeda'
import { computed } from 'vue'
import { z } from 'zod'

defineOptions({
	name: 'SectionsMarkdownRenderer'
})

const props = defineProps<{
	readonly url?: string
}>()

const {
	0: safe_remote_domains
} = useZodRegistry(
	z.object({
		'markdown.safe_remote_domains:0': z.array(
			z.string()
		)
	})
)

const isSafeDomain = computed(() => {
	if ( isNullish(props.url) ) {
		return false
	}

	if ( props.url.startsWith('/') ) {
		return true
	}

	try {
		const host = new URL(props.url).hostname

		if ( ![
			...(safe_remote_domains.value ?? []),
			location.hostname
		].includes(host) ) {
			return false
		}
	} catch (e) {
		return false
	}

	return true
})

const raw = computedAsync(async () => {
	if ( isNullish(props.url) || !isSafeDomain.value ) {
		return
	}

	return await (
		await alova.Get<Response>(props.url).send()
	).text()
})
</script>

<template>
	<template v-if="!isSafeDomain">
		<n-result status="error" title="无法获取内容"/>
	</template>

	<template v-else>
		<template v-if="isNonNullish(raw)">
			<custom-markdown :raw="raw"/>
		</template>

		<template v-else>
			<n-element class="py-4">
				<custom-naive-position placement="center">
					<n-spin/>
				</custom-naive-position>
			</n-element>
		</template>
	</template>
</template>