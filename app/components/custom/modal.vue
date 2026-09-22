<script lang="ts" setup>
	import { clsx } from 'clsx'
	import type { ModalProps } from 'naive-ui'
	import { computed, shallowRef } from 'vue'

	import { useResponsive } from '~/composables/responsive'

	const props = defineProps<
		/* @vue-ignore */ Omit<ModalProps, 'show'> &
			Partial<{
				readonly class: string
				readonly defaultShow: boolean
			}>
	>()

	defineOptions({
		inheritAttrs: false
	})

	const show = shallowRef(props.defaultShow)

	const { isMobile } = useResponsive()

	const classNames = computed(() => {
		return clsx(
			{
				'm-2': isMobile.value
			},
			{
				'mx-auto w-1/2': !isMobile.value
			}
		)
	})

	const handleHide = () => {
		show.value = false
	}

	const handleShow = () => {
		show.value = true
	}

	const handleToggle = () => {
		show.value = !show.value
	}

	defineExpose({
		state: show,
		hide: handleHide,
		show: handleShow,
		toggle: handleToggle
	})
</script>

<template>
	<n-modal
		v-model:show="show"
		:class="classNames"
		v-bind="{
			...$props,
			...$attrs
		}"
	>
		<template
			v-for="(_, name) in $slots"
			:key="name"
			#[name]="data"
		>
			<slot
				:name="name"
				v-bind="data ?? {}"
			/>
		</template>
	</n-modal>

	<slot
		:hide="handleHide"
		name="trigger"
		:show="handleShow"
		:state="show"
		:toggle="handleToggle"
	/>
</template>