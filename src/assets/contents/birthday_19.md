```vue template

<custom-naive-vertical-stack>
	<iframe class='w-full border-none' src='https://music.163.com/outchain/player?type=2&id=2680046302&auto=0'/>

	<n-card size="small" title="祝福">
		<custom-naive-vertical-stack align="center">
			<n-text class='text-6'>感谢所有人的祝贺ww~</n-text>

			<custom-naive-vertical-stack align="center">
				<n-image :src="publicAssets['@/assets/public/images/birthday/records/19/congratulate_1.webp'].value"/>
				<n-image :src="publicAssets['@/assets/public/images/birthday/records/19/congratulate_2.webp'].value"/>
			</custom-naive-vertical-stack>
		</custom-naive-vertical-stack>
	</n-card>

	<n-card size="small" title="礼物">
		<custom-naive-vertical-stack align="center">
			<n-image :src="publicAssets['@/assets/public/images/birthday/records/19/gift_1.webp'].value"/>
			<n-text depth="3">[ @ 苍陨 ]</n-text>
		</custom-naive-vertical-stack>
	</n-card>

	<n-card size="small" title="未完善的设定">
		<custom-naive-vertical-stack align="center" class="text-center">
			<n-image :src="publicAssets['@/assets/public/images/birthday/records/19/oc_1.webp'].value"/>

			<n-text depth="3">并非最终版本, 只是为了和本体卡在同一天生日 🤔 还在构思其它的花纹~</n-text>
			<n-text depth="3">[ @ 乱步 ]</n-text>
		</custom-naive-vertical-stack>
	</n-card>

	<n-card size="small" title="收到的赠图">
		<custom-naive-vertical-stack align="center">
			<n-image :src="publicAssets['@/assets/public/images/birthday/records/19/manuscript_1.webp'].value"/>

			<custom-naive-horizontal-stack class="w-full" justify="space-evenly">
				<n-text depth="3">左: 渣渣</n-text>
				<n-text depth="3">中: 墨水</n-text>
				<n-text depth="3">右: 临灰</n-text>
			</custom-naive-horizontal-stack>

			<n-text type="info">并做成了动态壁纸</n-text>

			<n-alert type="warning">可见性为仅好友可见, 可以在首页找到我的 Steam 并添加我</n-alert>

			<iframe class='w-full aspect-video border-none' src='https://player.bilibili.com/player.html?aid=113977661064095&autoplay=0'/>

			<custom-naive-auto-stack>
				<custom-redirect href='https://steamcommunity.com/sharedfiles/filedetails?id=3424280763'>
					<custom-naive-button icon='i-ant-design:link-outlined'>在 Steam 创意工坊中查看</custom-naive-button>
				</custom-redirect>
			</custom-naive-auto-stack>

			<n-text depth="3">[ @ 墨水 ]</n-text>

			<n-divider/>

			<n-image :src="publicAssets['@/assets/public/images/birthday/records/19/manuscript_2.webp'].value"/>

			<n-text type="primary">超喜欢这张 !</n-text>
			<n-text depth="3">[ @ wonold ]</n-text>

			<n-divider/>

			<n-image :src="publicAssets['@/assets/public/images/birthday/records/19/manuscript_3.webp'].value"/>
			<n-text depth="3">[ @ 沙盒子 ]</n-text>
		</custom-naive-vertical-stack>
	</n-card>
</custom-naive-vertical-stack>

```