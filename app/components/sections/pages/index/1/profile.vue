<script lang="ts" setup>
	import { useMessage } from 'naive-ui'

	import selfProfileData from '~/data/self/profile'

	const message = useMessage()

	const handleAvatarDoubleClick = () => {
		message.create(selfProfileData.avatar.poke)
	}
</script>

<template>
	<n-flex
		align="center"
		justify="center"
		size="small"
	>
		<n-avatar
			:src="selfProfileData.avatar.src.href"
			circle
			class="size-24 transition-(duration-1000 ease-in-out property-transform) hover:(cursor-help rotate-360)"
			@dblclick="handleAvatarDoubleClick"
		/>

		<n-text
			class="text-(12 nowrap) fw-black fw-black font-[v-zhazha120-script] select-none transition-(duration-500 ease-in-out property-text-shadow) hover:text-shadow-[0_0_.2em]"
		>
			{{ selfProfileData.name }}
		</n-text>
	</n-flex>
</template>