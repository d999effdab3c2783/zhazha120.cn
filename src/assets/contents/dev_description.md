```vue template

<custom-naive-vertical-stack :size="0" :align="(isMobile ? 'center' : 'start')">
	<n-text type="success" class="text-6 fw-bold">也许是一名不合格的全栈开发者</n-text>
	<n-image class="my-2" src="https://img.shields.io/endpoint?style=for-the-badge&url=https://api.codetime.dev/v3/users/shield?uid=2270"/>
	<n-text type="info">自 2018 起开始从零自学开发</n-text>
	<n-text type="info">到现在或许啥技术都会点 喜欢探索尝试新东西</n-text>
	<n-text type="success">喜欢开源 有良好的 git 提交消息规范</n-text>
</custom-naive-vertical-stack>

```