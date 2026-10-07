<script setup lang="ts">
	import { isNotNil } from 'es-toolkit'

	import { useResponsive } from '~/composables/responsive'
	import { useOwnerStore } from '~/stores/owner'

	const ownerStore = useOwnerStore()

	const { isMobile } = useResponsive()

	const generateBirthdayRecordLink = (age: number) => {
		return `/owner/birthday/records/${age}`
	}

	await ownerStore.loadBirthdayRecords()
</script>

<template>
	<n-card size="small">
		<template v-if="ownerStore.birthday.records.length > 0">
			<n-flex
				class="n-button__patch"
				size="small"
				:vertical="isMobile"
			>
				<template
					v-for="({ age }, index) in ownerStore.birthday.records"
					:key="index"
				>
					<template v-if="isNotNil(age)">
						<custom-redirect
							#="{ aProps, redirect }"
							:href="generateBirthdayRecordLink(age)"
						>
							<n-button
								:block="isMobile"
								v-bind="aProps"
								secondary
								tag="a"
								@click.prevent="redirect"
							>
								<template #icon>
									<n-icon class="i-tabler:clock-record" />
								</template>

								{{ age }} 岁
							</n-button>
						</custom-redirect>
					</template>
				</template>
			</n-flex>
		</template>

		<template v-else>
			<n-empty />
		</template>
	</n-card>
</template>

<style lang="scss">
	@use '~/styles/patches';
</style>