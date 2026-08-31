<template>
	<custom-naive-ui-vertical-stack>
		<n-alert :bordered="false" :show-icon="false">
			<custom-naive-ui-text-stack>
				<n-text>
					不太活泼 足够无聊 对大多数事情没有太多反应 不太会说话 不太会聊天 不太会表达自己 没有太多社交
				</n-text>

				<n-text class="text-[#00000000]">笨笨的 在部分情况下可能会需要更多的思考和时间 不要嫌弃我...</n-text>

				<n-text>可以扩列 但不建议</n-text>
				<n-text>热门游戏全都不玩 不要找我 很多时候没空 不去组队也不想语音</n-text>
				<n-text>不接受非正事私聊 对于无趣的事情不会回复太多 很多时候是敷衍回答</n-text>
				<n-text>可以加 可以躺列 可以提问 但不保证一定有解决方案</n-text>
			</custom-naive-ui-text-stack>
		</n-alert>

		<custom-naive-ui-auto-stack>
			<n-element class="flex-1">
				<n-alert size="small" type="info">
					<custom-naive-ui-text-stack>
						<n-text>也许没有雷点 也没啥情绪波动 单删也可恢复</n-text>

						<n-text>
							但也不想闲聊 以及莫名其妙的 戳一戳/发个表情 但什么都不说 或者早晚安问候之类的 没意思
						</n-text>

						<n-text>如果打扰到我做什么事了 可能会被我骂 但也并不是真的生气 试试换个时间再发</n-text>
					</custom-naive-ui-text-stack>
				</n-alert>
			</n-element>

			<n-alert size="small" type="warning">
				<custom-naive-ui-text-stack>
					<n-text>本体默认隐藏 你可以偷偷查</n-text>
					<n-text>但不要直接跑来问我和本体有关的任何问题 大概率不会理你也不会回答</n-text>
					<n-text>也不要拿着本就公开的信息跳我脸上 很无聊</n-text>
				</custom-naive-ui-text-stack>
			</n-alert>
		</custom-naive-ui-auto-stack>

		<n-alert :bordered="false" class="bg-purple-950/50 opacity-50">
			<template #icon>
				<n-icon class="text-purple-800 i-ant-design:question-circle-filled" />
			</template>

			<custom-naive-ui-text-stack>
				<n-text>有例外 包括但不限于熟人等 但无法预测 偶尔不想理人时以上内容依旧适用</n-text>
			</custom-naive-ui-text-stack>
		</n-alert>

		<custom-naive-ui-auto-stack>
			<n-element class="flex-1">
				<n-alert size="small" type="error">
					<custom-naive-ui-text-stack>
						<n-text>不会涩涩 不约 不是同 不谈恋爱 不找对象 不当对象</n-text>
						<n-text>不抽烟 不酗酒 不会打麻将</n-text>
					</custom-naive-ui-text-stack>
				</n-alert>
			</n-element>

			<n-element class="flex-1">
				<n-alert size="small" type="success">
					<custom-naive-ui-text-stack>
						<n-text>只剩自己</n-text>
						<n-text>爱喝奶茶 并尤其喜欢 古茗 (?)</n-text>
					</custom-naive-ui-text-stack>
				</n-alert>
			</n-element>
		</custom-naive-ui-auto-stack>
	</custom-naive-ui-vertical-stack>
</template>