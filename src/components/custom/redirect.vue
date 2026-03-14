<script lang="ts" setup>
import CustomNaiveModalWrapper from '@/components/custom/naive/modal-wrapper.vue'
import CustomNaiveVerticalStack from '@/components/custom/naive/vertical-stack.vue'
import { NA, NText } from 'naive-ui'
import { isNonNullish } from 'remeda'
import { useRouter } from 'vue-router'

defineOptions({
	name: 'CustomRedirect'
})

const props = defineProps<{
	readonly href: string
}>()

const router = useRouter()

const handleClick = async (event: MouseEvent, toggleExternalLinkWarningModal: () => void) => {
	if (
		isNonNullish(event.target) &&
		event.target instanceof Element &&

		[
			'.n-image'
		].some(selector => {
			return isNonNullish(
				(event.target as Element).closest(selector)
			)
		})
	) {
		event.preventDefault()
		return
	}

	if ( props.href.startsWith('blob:') ) {
		return
	}

	event.preventDefault()

	if ( props.href.startsWith('/') ) {
		await router.push({
			path: props.href
		})

		return
	}

	toggleExternalLinkWarningModal()
}
</script>

<template>
	<custom-naive-modal-wrapper preset="card" size="small">
		<template #trigger="{ toggle }">
			<n-a :href="href" class="contents" @click="handleClick($event, toggle)">
				<slot/>
			</n-a>
		</template>

		<custom-naive-vertical-stack align="center" class="text-center">
			<n-text class="text-6 fw-bold" type="warning">外部内容警告</n-text>
			<n-a :href="href" target="_blank">{{ href }}</n-a>
			<n-text>↑ 自行判断 如需继续请戳上面的连接 ↑</n-text>
		</custom-naive-vertical-stack>
	</custom-naive-modal-wrapper>
</template>