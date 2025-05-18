<script lang="ts" setup>
import type Button from '~/types/button'

const props = defineProps<Button>()

const router = useRouter()

const handleClick = () => {
	if (!props.is_external) {
		router.push({
			path: props.href
		})

		return
	}

	console.log(props)
	showRedirectExternalWebsiteWarningModal(props.href, props.external_modal_slots)
}
</script>

<template>
	<n-button @click="handleClick">
		<template #icon>
			<slot name="icon">
				<Component :is="icon"/>
			</slot>
		</template>

		<slot name="content">
			<n-scrollbar x-scrollable>{{ props.name }}</n-scrollbar>
		</slot>
	</n-button>
</template>