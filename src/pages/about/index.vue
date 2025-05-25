<script lang="ts" setup>
import { HomeOutlined } from '@vicons/antd'
import information from '~/data/information'
import { isMobile } from '~/shared/responsive'

definePageMeta({
	name: '关于我'
})

const router = useRouter()

const goHome = () => {
	router.push({
		name: '首页'
	})
}
</script>

<template>
	<custom-sub-page>
		<n-flex class="w-full md:w-1/2 mx-auto" vertical>
			<n-flex :wrap="false" align="center" justify="center" size="small">
				<div class="size-16">
					<n-image :img-props="{ class: 'size-full' }" :src="information.avatar" class="rounded-full transition-(transform duration-500) hover:rotate-360"/>
				</div>

				<div class="leading-tight">
					<n-flex :size="0" vertical>
						<n-text class="text-3xl fw-extrabold">{{ information.name }}</n-text>
						<n-text :depth="3">简称 {{ information.short_name }}</n-text>
					</n-flex>
				</div>
			</n-flex>

			<n-flex align="center" justify="center" size="small">
				<template v-for="tag in information.tags">
					<n-tag :type="tag.type">{{ tag.value }}</n-tag>
				</template>
			</n-flex>

			<div class="leading-tight fw-bold text-center">
				<n-text class="text-xl whitespace-pre" type="info">{{ information.description }}</n-text>
			</div>

			<n-divider class="!my-0">了解我</n-divider>

			<n-alert :show-icon="false" class="text-center" title="注意事项" type="warning">
				<n-flex :vertical="isMobile" align="center" class="lt-md:[&>*]:w-full" justify="center" size="small">
					<template v-for="sensitive_tag in information.sensitive_tags">
						<n-tag :type="sensitive_tag.type">{{ sensitive_tag.value }}</n-tag>
					</template>
				</n-flex>
			</n-alert>

			<n-alert :show-icon="false" class="text-center" title="危险" type="error">
				<n-text :depth="3" class="fw-bold">furry: 边缘 不咋混圈 福瑞当然很可爱 但我只想摸毛</n-text>
				<br>
				<n-text class="fw-extrabold">你可以偷偷查 但不要直接跑来问我和本体有关的任何问题 不会理你也不会回答</n-text>
			</n-alert>

			<n-card header-class="text-center" size="small" title="找到我">
				<n-flex :vertical="isMobile" align="center" justify="center" size="small">
					<template v-for="button in information.contacts">
						<custom-button :block="isMobile" secondary v-bind="button"/>
					</template>
				</n-flex>
			</n-card>

			<n-card header-class="text-center" size="small" title="探索我">
				<n-flex size="small" vertical>
					<n-flex :vertical="isMobile" align="center" justify="center" size="small">
						<template v-for="button in information.explores">
							<custom-button :block="isMobile" v-bind="button"/>
						</template>
					</n-flex>

					<n-divider class="!my-0">以及</n-divider>

					<n-flex :vertical="isMobile" justify="center">
						<n-button :block="isMobile" @click="goHome">
							<template #icon>
								<n-icon :component="HomeOutlined"/>
							</template>

							在 首页 了解更多
						</n-button>
					</n-flex>
				</n-flex>
			</n-card>

			<n-flex :vertical="isMobile" :wrap="false" class="[&>*]:flex-1" size="small">
				<n-alert :show-icon="false" class="text-center" type="error">
					🙅‍ 不抽烟 不酗酒 不会打麻将
				</n-alert>

				<n-alert :show-icon="false" class="text-center" type="success">
					😋 爱喝奶茶 并尤其喜欢古茗 (?)
				</n-alert>
			</n-flex>

			<n-divider class="!my-0">更多</n-divider>

			<n-card header-class="text-center" size="small" title="开发方面">
				<div class="text-center leading-tight">
					<n-text type="info">从初中开始从零自学开发</n-text>
					<br>
					<n-text type="info">到现在或许啥技术都会点 喜欢探索尝试新东西</n-text>
					<br>
					<n-text type="success">喜欢开源 有良好的 git 提交消息规范</n-text>
				</div>
			</n-card>

			<n-card header-class="text-center" size="small" title="扩列方面">
				<div class="text-center leading-tight">
					<n-text type="success">
						很欢迎 可以在上面
						<n-text code>找到我</n-text>
						卡片中看到我的社交账号
					</n-text>
					<br><br>
					<n-text type="info">不太会主动发起话题 纯被动型发言 没有雷点</n-text>
					<br>
					<n-text type="warning">内耗型 如非必要不会麻烦别人</n-text>
					<br>
					<n-text type="success">想和所有人交朋友 不怕烦 !</n-text>
				</div>
			</n-card>
		</n-flex>
	</custom-sub-page>
</template>