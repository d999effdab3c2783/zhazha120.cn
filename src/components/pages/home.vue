<script lang="ts" setup>
import CustomNaiveVerticalStack from '@/components/custom/naive/vertical-stack.vue'
import SectionsHome1 from '@/components/sections/home/_1.vue'
import SectionsHome2 from '@/components/sections/home/_2.vue'
import SectionsHomeCursor from '@/components/sections/home/cursor.vue'
import { useLenis } from 'lenis/vue'
import { isNullish } from 'remeda'
import { type ComponentPublicInstance, useTemplateRef } from 'vue'

const lenis = useLenis()
const _2_ref = useTemplateRef<ComponentPublicInstance>('_2_ref')

const handleDown = async () => {
	if ( isNullish(lenis.value) || isNullish(_2_ref.value) ) {
		return
	}

	lenis.value.scrollTo(_2_ref.value.$el)
}
</script>

<template>
	<custom-naive-vertical-stack :size="0">
		<sections-home-cursor/>

		<sections-home-1 @down="handleDown"/>
		<sections-home-2 ref="_2_ref"/>
	</custom-naive-vertical-stack>
</template>