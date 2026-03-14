```vue template

<custom-naive-vertical-stack>
	<n-card size="small" title="资料">
		<custom-naive-vertical-stack :align="(isMobile ? 'center' : 'start')">
			<custom-naive-horizontal-stack align="center">
				<n-text>设计 & 画师妈咪:</n-text>
				<n-text type="primary">@ 狄貊</n-text>
			</custom-naive-horizontal-stack>

			<custom-naive-horizontal-stack>
				<n-text>立绘画师:</n-text>

				<custom-redirect href="https://www.mihuashi.com/profiles/1806467">
					<n-text type="info">米画师 @ 小累RAIN</n-text>
				</custom-redirect>
			</custom-naive-horizontal-stack>

			<n-text depth="3">出生日期: 2025/7/5</n-text>
		</custom-naive-vertical-stack>
	</n-card>

	<n-card size="small" title="毛">
		<iframe class="w-full aspect-video border-none" src="https://player.bilibili.com/player.html?aid=115178574184785&autoplay=0"/>

		<custom-naive-auto-stack align="center">
			<n-text type="warning">装师: @ 栗糖</n-text>
			<n-text type="info">欧奎家兽装工作室 (群号: 1040074195)</n-text>
		</custom-naive-auto-stack>
	</n-card>

	<n-card size="small" title="探索">
		<custom-naive-auto-stack>
			<custom-redirect href="https://jxbqbh.com/jxuser/user/wx/certificate-detail?serialNum=202508Z3100000006">
				<custom-naive-button icon="i-tdesign:verified">版权</custom-naive-button>
			</custom-redirect>
		</custom-naive-auto-stack>
	</n-card>
</custom-naive-vertical-stack>

```