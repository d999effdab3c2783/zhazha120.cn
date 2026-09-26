import type { RenderableText } from '~/types/render'

// @unocss-include

export const name = '渣渣120'
export const poke = '戳哭了 哄不好了'

export const bio = [
	'不太活泼 足够无聊 没有太多反应 不太会说话 不太会聊天 不太会表达自己 极少主动社交',

	{
		text: '笨笨的 在特定情况下可能会需要更多的思考和时间 不要嫌弃我...',
		class: 'text-transparent'
	},

	'可以扩列 但不建议',
	'极少碰热门游戏 别问我 最近在玩什么游戏 或 玩过什么 也许都是没玩过',
	'大多数时候没空 不组队 社恐 不语音 或 偷偷黑听',
	'不接受私聊 正事除外 对于无聊的事情不会回复太多 或敷衍回答',
	'可以加 可以躺列 可以提问 不滥用的情况下也许会帮忙解决 但不保证',

	null,

	{
		type: 'info',
		text: '也许没有雷点 或 情绪波动 单删随意 可恢复'
	},
	{
		type: 'info',
		text: '不接受 包括但不限于 闲聊 莫名其妙的 戳一戳 / 发个表情 然后不说话 早晚安问候 等 懒得理'
	},
	{
		type: 'info',
		text: '在干活时语气可能会变尖锐 如果不是什么要紧的事 建议换个时间'
	},

	null,

	{
		type: 'warning',
		text: '本体默认隐藏 你可以偷偷查'
	},
	{
		type: 'warning',
		text: '如果直接跑来问我和本体有关的任何问题 不会理你 也 不会回答'
	},
	{
		type: 'warning',
		text: '不接受 拿着本就公开的信息跳我脸上 很无聊'
	},

	null,

	{
		depth: 3,
		text: '也许有例外 包括但不限于 空闲 熟人等 但无法预测 偶尔不想理人时以上内容依旧适用'
	},

	null,

	{
		type: 'error',
		text: '不涩涩 不约 不是同 不谈恋爱 不找对象 不当对象'
	},
	{
		type: 'error',
		text: '不抽烟 不酗酒 不打麻将'
	},

	null,

	{
		type: 'success',
		text: '只剩自己'
	},
	{
		type: 'success',
		text: '爱喝奶茶 并尤其喜欢 蜜雪冰城 和 古茗 (?)'
	}
] as const satisfies RenderableText[]