<script setup lang="ts">
	import { addYears, differenceInYears, subYears } from 'date-fns'
	import { isNil, isNotNil } from 'es-toolkit'

	import { useResponsive } from '~/composables/responsive'
	import { useOwnerStore } from '~/stores/owner'

	const ownerStore = useOwnerStore()

	const { isMobile } = useResponsive()

	const generateBirthdayYear = (age: number) => {
		return addYears(ownerStore.birthday.date, age).getFullYear()
	}

	const generateBirthdayRecordLink = (age: number) => {
		return `/owner/birthday/records/${age}`
	}

	ownerStore.loadBirthdayRecords()
</script>

<template>
	<n-card size="small">
		<template v-if="ownerStore.birthday.records.length > 0">
			<n-scrollbar
				class="overscroll-contain"
				data-lenis-prevent-horizontal
				x-scrollable
			>
				<n-timeline :horizontal="!isMobile">
					<template
						v-for="(age, index) in differenceInYears(new Date(), ownerStore.birthday.date) + 1"
						:key="index"
					>
						<n-timeline-item type="success">
							<template #header>
								<n-flex
									:size="0"
									vertical
								>
									<custom-redirect
										#="{ aProps, redirect }"
										:href="generateBirthdayRecordLink(age - 1)"
									>
										<n-button
											text
											v-bind="aProps"
											tag="a"
											:type="
												ownerStore.birthday.records.some(item => {
													return String(item.age) === String(age - 1)
												})
													? 'primary'
													: undefined
											"
											@click.prevent="redirect"
										>
											{{ age - 1 }} 岁
										</n-button>
									</custom-redirect>

									<n-text
										class="text-[.8em]"
										:depth="3"
									>
										{{ generateBirthdayYear(age - 1) }}
									</n-text>
								</n-flex>
							</template>
						</n-timeline-item>
					</template>
				</n-timeline>
			</n-scrollbar>
		</template>

		<template v-else>
			<n-empty />
		</template>
	</n-card>
</template>

<style lang="scss">
	@use '~/styles/patches';
</style>