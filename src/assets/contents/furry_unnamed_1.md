```vue template

<n-flex size="small" vertical>
	<n-card size="small" title="资料">
		<custom-naive-vertical-stack :align="(isMobile ? 'center' : 'start')">
			<custom-naive-horizontal-stack align="center">
				<n-text>设计 & 画师妈咪:</n-text>

				<custom-redirect href="https://space.bilibili.com/1981236068">
					<n-text type="primary">哔哩哔哩 @ _初晴沐雨</n-text>
				</custom-redirect>
			</custom-naive-horizontal-stack>

			<custom-naive-horizontal-stack align="center">
				<n-text>立绘画师:</n-text>

				<custom-redirect href="https://www.mihuashi.com/profiles/663529">
					<n-text type="info">米画师 @ 柒嘢</n-text>
				</custom-redirect>
			</custom-naive-horizontal-stack>

			<n-text depth="3">出生日期: 2024/8/9</n-text>
		</custom-naive-vertical-stack>
	</n-card>

	<n-card size="small" title="壁纸">
		<custom-naive-vertical-stack>
			<n-alert type="warning">可见性为仅好友可见, 可以在首页找到我的 Steam 并添加我</n-alert>

			<iframe class="w-full aspect-video border-none" src="https://player.bilibili.com/player.html?aid=113977661064095&autoplay=0"/>

			<custom-naive-auto-stack justify="center">
				<custom-redirect href="https://steamcommunity.com/sharedfiles/filedetails?id=3424280763">
					<custom-naive-button icon="i-ant-design:link-outlined">在 Steam 创意工坊中查看</custom-naive-button>
				</custom-redirect>
			</custom-naive-auto-stack>

			<n-divider/>

			<iframe class="w-full aspect-video border-none" src="https://player.bilibili.com/player.html?aid=114521108645387&autoplay=0"/>

			<custom-naive-auto-stack justify="center">
				<custom-redirect href="https://steamcommunity.com/sharedfiles/filedetails?id=3482779647">
					<custom-naive-button icon="i-ant-design:link-outlined">在 Steam 创意工坊中查看</custom-naive-button>
				</custom-redirect>
			</custom-naive-auto-stack>
		</custom-naive-vertical-stack>
	</n-card>
</n-flex>

```