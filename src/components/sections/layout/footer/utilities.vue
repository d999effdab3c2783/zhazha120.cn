<script lang="ts" setup>
	import { isNonNullish } from 'remeda'

	import footerData from '@/data/website/footer' with { type: 'macro' }

	const modalRef = useTemplateRef('modalRef')

	const utilities = await useUtilities()
	const magicKeys = useMagicKeys()

	watch(magicKeys[footerData.utilities.hotkey], (newState) => {
		if (newState && isNonNullish(modalRef.value)) {
			modalRef.value.toggle()
		}
	})
</script>

<template>
	<custom-naive-ui-modal ref="modalRef" preset="card" size="small" title="功能">
		<template #trigger="{ toggle }">
			<custom-naive-ui-button icon-class="i-ant-design:appstore-outlined" secondary size="small" @click="toggle">
				<custom-naive-ui-text-stack>
					<n-text class="text-current fw-bold">小工具</n-text>
				</custom-naive-ui-text-stack>
			</custom-naive-ui-button>
		</template>

		<custom-naive-ui-horizontal-stack>
			<sections-shared-suspense>
				<template v-for="{ icon, name, render } in utilities">
					<custom-naive-ui-modal :title="name" preset="card" size="small">
						<template #trigger="{ toggle }">
							<custom-naive-ui-button :icon-class="icon" secondary size="small" @click="toggle">
								<custom-naive-ui-text-stack>
									<n-text class="text-current fw-bold">{{ name }}</n-text>
								</custom-naive-ui-text-stack>
							</custom-naive-ui-button>
						</template>

						<Component :is="render()" />
					</custom-naive-ui-modal>
				</template>
			</sections-shared-suspense>
		</custom-naive-ui-horizontal-stack>
	</custom-naive-ui-modal>
</template>