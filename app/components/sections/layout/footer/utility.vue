<script setup lang="ts">
	import { useMagicKeys } from '@vueuse/core'
	import { isNil } from 'es-toolkit'
	import { useTemplateRef, watch } from 'vue'

	import { useResponsive } from '~/composables/responsive'
	import { useFooterStore } from '~/stores/footer'
	import { useUtilityStore } from '~/stores/utility'

	const name = '小工具'

	const modalRef = useTemplateRef('modalRef')

	const { isMobile } = useResponsive()

	const footerStore = useFooterStore()

	const magicKeys = useMagicKeys({
		reactive: true
	})

	const utilityStore = useUtilityStore()

	watch(
		() => magicKeys[footerStore.utility.hotkey],
		newState => {
			if (isNil(modalRef.value)) {
				return
			}

			if (newState) {
				modalRef.value.toggle()
			}
		}
	)

	await utilityStore.load()
</script>

<template>
	<custom-modal
		ref="modalRef"
		class="n-button__patch"
		preset="card"
		size="small"
		:title="name"
	>
		<template #trigger="{ toggle }">
			<n-button
				secondary
				size="small"
				@click="toggle"
			>
				<template #icon>
					<n-icon class="i-ant-design:appstore-outlined" />
				</template>

				{{ name }}
			</n-button>
		</template>

		<n-flex
			size="small"
			:vertical="isMobile"
		>
			<template
				v-for="({ icon, name: utilityName, render }, index) in utilityStore.registry"
				:key="index"
			>
				<custom-modal
					preset="card"
					size="small"
					:title="utilityName"
				>
					<template #trigger="{ toggle: utilityToggle }">
						<n-button
							:block="isMobile"
							@click="utilityToggle"
						>
							<template #icon>
								<n-icon :class="icon" />
							</template>

							{{ utilityName }}
						</n-button>
					</template>

					<component :is="render()" />
				</custom-modal>
			</template>
		</n-flex>
	</custom-modal>
</template>

<style lang="scss">
	@use '~/styles/patches';
</style>