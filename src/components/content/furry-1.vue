<script lang="ts" setup>
import { isMobile } from '~/shared/responsive'
import { LinkOutlined } from '@vicons/antd'
</script>

<template>
	<n-card size="small" title="壁纸">
		<n-flex vertical>
			<n-alert type="warning">可见性为仅好友可见, 可以在首页找到我的 Steam 个人主页并添加我</n-alert>

			<iframe class="w-full border-none aspect-ratio-video" src="https://player.bilibili.com/player.html?aid=113977661064095&autoplay=0"/>

			<div class="md:(w-fit mx-auto)">
				<n-button :block="isMobile" @click="showRedirectExternalWebsiteWarningModal('https://steamcommunity.com/sharedfiles/filedetails?id=3424280763')">
					<template #icon>
						<n-icon :component="LinkOutlined"/>
					</template>

					在 Steam 创意工坊中查看
				</n-button>
			</div>

			<iframe class="w-full border-none aspect-ratio-video" src="https://player.bilibili.com/player.html?aid=114521108645387&autoplay=0"/>

			<div class="md:(w-fit mx-auto)">
				<n-button :block="isMobile" @click="showRedirectExternalWebsiteWarningModal('https://steamcommunity.com/sharedfiles/filedetails?id=3482779647')">
					<template #icon>
						<n-icon :component="LinkOutlined"/>
					</template>

					在 Steam 创意工坊中查看
				</n-button>
			</div>
		</n-flex>
	</n-card>
</template>