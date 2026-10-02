<script setup lang="ts">
	import { useNow } from '@vueuse/core'
	import { differenceInYears, formatDistanceStrict } from 'date-fns'
	import { zhCN } from 'date-fns/locale'
	import { computed } from 'vue'

	import { useResponsive } from '~/composables/responsive'
	import { createDate } from '~/utils/date'

	const birthday = createDate(2024, 8, 9)

	const now = useNow()

	const { isMobile } = useResponsive()

	const age = computed(() => {
		return differenceInYears(now.value, birthday)
	})

	const ago = computed(() => {
		return formatDistanceStrict(birthday, now.value, {
			addSuffix: true,
			locale: zhCN,
			unit: 'day',
			roundingMethod: 'floor'
		})
	})
</script>

<template>
	<n-flex
		size="small"
		vertical
	>
		<n-card
			size="small"
			title="资料"
		>
			<n-flex
				size="small"
				vertical
			>
				<n-divider class="!mt-0" />

				<n-text>年龄: {{ age }} 岁</n-text>
				<n-text>出生日期: {{ birthday.toLocaleDateString() }} ({{ ago }})</n-text>
			</n-flex>
		</n-card>

		<n-card
			size="small"
			title="关联"
		>
			<n-flex
				align="center"
				justify="space-evenly"
				size="small"
				:vertical="isMobile"
			>
				<n-flex
					align="center"
					:size="0"
					vertical
				>
					<n-text>初晴沐雨</n-text>
					<n-text :depth="3">设计 & 画师妈咪</n-text>

					<n-flex
						class="mt-4"
						size="small"
						vertical
					>
						<custom-redirect
							#="{ aProps, redirect }"
							href="https://space.bilibili.com/1981236068"
						>
							<n-button
								v-bind="aProps"
								class="w-fit"
								tag="a"
								@click.prevent="redirect"
							>
								<template #icon>
									<n-icon class="i-ant-design:link-outlined" />
								</template>

								哔哩哔哩
							</n-button>
						</custom-redirect>
					</n-flex>
				</n-flex>

				<n-divider
					class="!my-4"
					dashed
					:vertical="!isMobile"
				/>

				<n-flex
					align="center"
					:size="0"
					vertical
				>
					<n-text>柒嘢</n-text>
					<n-text :depth="3">立绘画师</n-text>

					<n-flex
						class="mt-4"
						size="small"
						vertical
					>
						<custom-redirect
							#="{ aProps, redirect }"
							href="https://www.mihuashi.com/profiles/663529"
						>
							<n-button
								v-bind="aProps"
								class="w-fit"
								tag="a"
								@click.prevent="redirect"
							>
								<template #icon>
									<n-icon class="i-ant-design:link-outlined" />
								</template>

								米画师
							</n-button>
						</custom-redirect>
					</n-flex>
				</n-flex>
			</n-flex>
		</n-card>

		<n-card
			size="small"
			title="壁纸"
		>
			<n-flex
				size="small"
				vertical
			>
				<iframe
					class="border-none w-full aspect-video"
					src="https://player.bilibili.com/player.html?aid=113977661064095&autoplay=0"
				/>

				<n-flex
					align="center"
					size="small"
					vertical
				>
					<custom-redirect
						#="{ aProps, redirect }"
						href="https://steamcommunity.com/sharedfiles/filedetails?id=3424280763"
					>
						<n-button
							v-bind="aProps"
							tag="a"
							@click.prevent="redirect"
						>
							<template #icon>
								<n-icon class="i-ant-design:link-outlined" />
							</template>

							在 Steam 创意工坊中查看
						</n-button>
					</custom-redirect>

					<n-text :depth="3">[仅好友可见]</n-text>
				</n-flex>

				<n-divider />

				<iframe
					class="border-none w-full aspect-video"
					src="https://player.bilibili.com/player.html?aid=114521108645387&autoplay=0"
				/>

				<n-flex
					align="center"
					size="small"
					vertical
				>
					<custom-redirect
						#="{ aProps, redirect }"
						href="https://steamcommunity.com/sharedfiles/filedetails?id=3482779647"
					>
						<n-button
							v-bind="aProps"
							tag="a"
							@click.prevent="redirect"
						>
							<template #icon>
								<n-icon class="i-ant-design:link-outlined" />
							</template>

							在 Steam 创意工坊中查看
						</n-button>
					</custom-redirect>

					<n-text :depth="3">[仅好友可见]</n-text>
				</n-flex>
			</n-flex>
		</n-card>
	</n-flex>
</template>