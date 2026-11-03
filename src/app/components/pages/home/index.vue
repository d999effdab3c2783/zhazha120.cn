<script lang="ts">
	import type { Member as MemberProp } from '@/app/components/pages/home/_types/props'
	import type { CollectionEntry } from 'astro:content'

	export const useMember = (item: CollectionEntry<'members'>): MemberProp => {
		return {
			avatar: isNotNil(item.data.avatar)
				? {
						src: item.data.avatar.image.src,
						poke: item.data.avatar.poke
					}
				: null,
			name: item.data.name
		}
	}
</script>

<script setup lang="ts">
	import { isNotNil } from 'es-toolkit'
	import { NElement } from 'naive-ui'

	import AppLayout from '@/app/components/layouts/app/index.vue'
	import Background from '@/app/components/pages/home/background/index.vue'
	import Member from '@/app/components/pages/home/member.vue'

	defineProps<{
		readonly member: MemberProp | null
	}>()
</script>

<template>
	<AppLayout>
		<n-element class="relative top-0 left-0 h-screen w-full">
			<n-element class="absolute top-0 left-0 size-full">
				<background
					direction="diagonal"
					:glow="0"
					rainbow
				/>
			</n-element>

			<n-element class="relative z-120 grid size-full grid-rows-3 place-items-center">
				<template v-if="isNotNil(member)">
					<n-element class="row-start-2">
						<member :item="member" />
					</n-element>
				</template>
			</n-element>
		</n-element>
	</AppLayout>
</template>