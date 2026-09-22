<script setup lang="ts">
	import { useMagicKeys } from '@vueuse/core'
	import { isNil } from 'es-toolkit'
	import { useTemplateRef, watch } from 'vue'

	import { useFooterStore } from '~/stores/footer'
	import { useUtilityStore } from '~/stores/utility'

	const name = '小工具'

	const modalRef = useTemplateRef('modalRef')

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

		<n-flex size="small">
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
						<n-button @click="utilityToggle">
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