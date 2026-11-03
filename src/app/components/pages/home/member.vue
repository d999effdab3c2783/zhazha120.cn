<script setup lang="ts">
	import type { Member as MemberProp } from '@/app/components/pages/home/_types/props'

	import { isNotNil } from 'es-toolkit'
	import { NAvatar, NElement, NFlex, NText } from 'naive-ui'

	import pinia from '@/app/shared/pinia'
	import { useApiStore } from '@/app/stores/api'

	const props = defineProps<{
		readonly item: MemberProp
	}>()

	const apiStore = useApiStore(pinia)

	const handleAvatarDoubleClick = () => {
		if (isNotNil(props.item.avatar) && isNotNil(props.item.avatar.poke) && isNotNil(apiStore.message)) {
			apiStore.message.create(props.item.avatar.poke)
		}
	}
</script>

<template>
	<n-flex
		align="center"
		justify="center"
		size="small"
	>
		<template v-if="isNotNil(item.avatar)">
			<n-element
				class="point:rotate-360 size-24 transition-[transform,rotate] duration-1000 ease-in-out select-none *:size-full! hover:cursor-help"
				@dblclick="handleAvatarDoubleClick"
			>
				<n-avatar
					circle
					:src="item.avatar.src"
				/>
			</n-element>
		</template>

		<n-element
			class="point:text-shadow-[0_0_.6em] font-(family-name:--fonts--v-zhazha120-script) text-5xl transition-[text-shadow] duration-500 ease-in-out select-none hover:cursor-default"
		>
			<n-text>
				{{ item.name }}
			</n-text>
		</n-element>
	</n-flex>
</template>