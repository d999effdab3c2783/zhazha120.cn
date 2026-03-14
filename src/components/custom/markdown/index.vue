<script lang="ts" setup>
import CustomMarkdownToken from '@/components/custom/markdown/token/index.vue'
import CustomNaiveVerticalStack from '@/components/custom/naive/vertical-stack.vue'
import { useThemeStore } from '@/stores/theme'
import { Marked } from 'marked'
import { type GlobalThemeOverrides, NConfigProvider } from 'naive-ui'
import { isNonNullish, mergeAll } from 'remeda'
import { computed, watchEffect } from 'vue'

defineOptions({
	name: 'CustomMarkdown'
})

const props = defineProps<{
	readonly raw: string
	readonly theme_overrides?: GlobalThemeOverrides
}>()

const themeStore = useThemeStore()

const marked = new Marked()
const tokens = computed(() => {
	return marked.lexer(props.raw)
})

const themeOverrides = mergeAll([
	themeStore.overrides,
	isNonNullish(props.theme_overrides) ? props.theme_overrides : {},
	{
		Typography: {
			textColor: 'current',
			pTextColor: 'current',
			pMargin: 0
		}
	}
])

if ( import.meta.env.DEV ) {
	watchEffect(() => {
		console.groupCollapsed(import.meta.url)
		console.log(props.raw)
		console.log(tokens.value)
		console.groupEnd()
	})
}
</script>

<template>
	<n-config-provider :theme-overrides="themeOverrides" abstract inline-theme-disabled preflight-style-disabled>
		<custom-naive-vertical-stack :size="0">
			<template v-for="token in tokens">
				<custom-markdown-token :token="token"/>
			</template>
		</custom-naive-vertical-stack>
	</n-config-provider>
</template>