<script setup lang="ts">
	import { useNow } from '@vueuse/core'
	import { differenceInYears, formatDistanceStrict } from 'date-fns'
	import { zhCN } from 'date-fns/locale'
	import { computed } from 'vue'

	import { useResponsive } from '~/composables/responsive'
	import { createDate } from '~/utils/date'

	const birthday = createDate(2025, 7, 5)
	const fursuitBirthday = createDate(2025, 9, 10)

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

	const fursuitAgo = computed(() => {
		return formatDistanceStrict(fursuitBirthday, now.value, {
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
			title="基本资料 & 关联"
		>
			<n-flex
				class="text-center"
				size="small"
				vertical
			>
				<n-divider class="!mt-0" />

				<n-text>年龄: {{ age }} 岁</n-text>
				<n-text>出生日期: {{ birthday.toLocaleDateString() }} ({{ ago }})</n-text>
				<n-text>实体化日期: {{ fursuitBirthday.toLocaleDateString() }} ({{ fursuitAgo }})</n-text>

				<n-divider />

				<n-flex
					justify="space-evenly"
					size="small"
				>
					<n-flex
						align="center"
						:size="0"
						vertical
					>
						<n-text>狄貊</n-text>
						<n-text :depth="3">设计 & 画师妈咪</n-text>
					</n-flex>

					<n-flex
						align="center"
						:size="0"
						vertical
					>
						<n-text>栗糖</n-text>
						<n-text :depth="3">装师</n-text>
					</n-flex>

					<n-flex
						align="center"
						:size="0"
						vertical
					>
						<n-text>Chars茶茶</n-text>
						<n-text :depth="3">立绘画师</n-text>

						<custom-redirect
							#="{ aProps, redirect }"
							href="https://www.mihuashi.com/profiles/2900931"
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
			title="毛"
		>
			<iframe
				class="border-none w-full aspect-video"
				src="https://player.bilibili.com/player.html?aid=115178574184785&autoplay=0"
			/>
		</n-card>

		<n-card
			size="small"
			title="探索"
		>
			<n-flex
				class="n-button__patch"
				size="small"
				:vertical="isMobile"
			>
				<custom-redirect
					#="{ aProps, redirect }"
					href="https://jxbqbh.com/jxuser/user/wx/certificate-detail?serialNum=202508Z3100000006"
				>
					<n-button
						:block="isMobile"
						tag="a"
						v-bind="aProps"
						@click.prevent="redirect"
					>
						<template #icon>
							<n-icon class="i-tdesign:verified" />
						</template>

						版权
					</n-button>
				</custom-redirect>
			</n-flex>
		</n-card>
	</n-flex>
</template>