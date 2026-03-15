<script lang="ts" setup>
import CustomNaiveAutoStack from '@/components/custom/naive/auto-stack.vue'
import CustomNaiveButton from '@/components/custom/naive/button.vue'
import CustomNaiveHorizontalStack from '@/components/custom/naive/horizontal-stack.vue'
import CustomNaiveVerticalStack from '@/components/custom/naive/vertical-stack.vue'
import CustomRedirect from '@/components/custom/redirect.vue'
import { usePublicAssets } from '@/composables/assets'
import { isDesktop, isMobile } from '@/shared/responsive'
import type { Tokens } from 'marked'
import { NAlert, NCard, NDivider, NFlex, NImage, NText } from 'naive-ui'
import { computed, defineComponent } from 'vue'
import { compile } from 'vue-bundler'

const props = defineProps<{
	readonly token: Tokens.Generic | Tokens.Code
}>()

const component = computed(() => {
	return defineComponent({
		components: {
			NFlex,
			NCard,
			NText,
			NAlert,
			NDivider,
			NImage,
			CustomNaiveHorizontalStack,
			CustomNaiveVerticalStack,
			CustomNaiveAutoStack,
			CustomRedirect,
			CustomNaiveButton
		},
		setup() {
			const publicAssets = usePublicAssets()

			return {
				isMobile,
				isDesktop,

				publicAssets
			}
		},
		render: compile(props.token.text.trim(), {
			mode: 'function'
		})
	})
})
</script>

<template>
	<component :is="component"/>
</template>