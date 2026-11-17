import type { RenderableText } from '~/types/render'

// @unocss-include

export const title = '自述'

export const items = [
	'也许是一名不合格的全栈开发者',
	{
		class: 'text-transparent',
		text: '业余 兴趣爱好 碎片化 遇到什么学什么 ('
	},
	{
		text: '自 2018 起开始从零自学开发',
		type: 'success'
	},
	{
		text: '喜欢开源 有良好的 git 提交消息规范',
		type: 'success'
	},
	{
		text: '不太享受氛围编程',
		type: 'warning'
	},
	{
		text: '到现在或许啥技术都会点 喜欢探索尝试新东西',
		type: 'info'
	}
] as const satisfies RenderableText[]