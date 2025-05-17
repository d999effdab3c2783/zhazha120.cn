<script lang="ts" setup>
import { EyeOutlined } from '@vicons/antd'
import information from '~/data/information'
import { isMobile } from '~/shared/responsive'

definePageMeta({
	name: '关于我'
})

const show_real = ref(false)
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

			<n-card header-class="text-center" size="small" title="属性">
				<n-flex :vertical="isMobile" justify="center" size="small" wrap>
					<template v-for="attribute in information.attributes">
						<n-tag class="cursor-pointer md:w-fit">
							<n-popover>
								<template #trigger>
									<n-flex :size="0" align="center">
										<Component :is="attribute.icon()"/>

										<span class="ml-2">{{ attribute.value }}</span>
									</n-flex>
								</template>

								{{ attribute.name }}
							</n-popover>
						</n-tag>
					</template>
				</n-flex>
			</n-card>

			<n-card header-class="text-center" size="small" title="找到我">
				<n-flex :vertical="isMobile" align="center" justify="center" size="small">
					<template v-for="button in information.contacts">
						<custom-button :block="isMobile" secondary v-bind="button"/>
					</template>
				</n-flex>
			</n-card>

			<n-card header-class="text-center" size="small" title="探索我">
				<n-flex :vertical="isMobile" align="center" justify="center" size="small">
					<template v-for="button in information.explores">
						<custom-button :block="isMobile" v-bind="button"/>
					</template>
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

			<n-card header-class="text-center" size="small" title="现实方面">
				<template v-if="!show_real">
					<n-flex align="center" size="small" vertical>
						<n-text type="error">感觉有点负面 默认隐藏了</n-text>

						<n-popconfirm @positive-click="show_real = true">
							<template #trigger>
								<n-button size="small" type="error">
									<template #icon>
										<n-icon :component="EyeOutlined"/>
									</template>

									看看
								</n-button>
							</template>

							真的要看吗 QAQ
						</n-popconfirm>
					</n-flex>
				</template>

				<n-collapse-transition :show="show_real">
					<div class="text-center leading-tight">
						<n-text type="error">学习很差 很孤独 在现实中大多数场景下不合群</n-text>
						<br>
						<n-text type="error">跟不上网络热梗 不起哄 不跟风 不咋说话 流行游戏大多数也是只听过没玩过</n-text>
						<br>
						<n-text type="error">没怎么追过番剧 也没看过什么动画 也没看过多少电影</n-text>
						<br>
						<n-text type="error">因为没有共同话题 身边没有什么朋友 很无聊</n-text>
						<br>
						<n-text type="error">没有自信 有点自卑 喜欢一个人躲在角落默默干着自己的事情</n-text>
					</div>
				</n-collapse-transition>
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