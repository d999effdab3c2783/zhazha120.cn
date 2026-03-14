import type { RouteRecordRaw } from 'vue-router'

export default [
	{
		path: '/markdown',
		name: '内容',
		component: () => import('@/components/pages/markdown.vue')
	},

	{
		path: '/about',
		name: '关于',
		component: () => import('@/components/pages/about.vue')
	},

	{
		path: '/',
		name: '首页',
		component: () => import('@/components/pages/home.vue')
	},
	{
		path: '/support/:method?',
		name: '支持 & 赞助',
		component: () => import('@/components/pages/support.vue')
	},
	{
		path: '/game',
		name: '游戏',
		component: () => import('@/components/pages/game/index.vue')
	},
	{
		path: '/game/records',
		name: '游戏记录',
		component: () => import('@/components/pages/game/records/index.vue'),
		children: [
			{
				path: 'maimai',
				name: '舞萌 (maimai)',
				component: () => import('@/components/pages/game/records/maimai.vue')
			},
			{
				path: 'minecraft',
				name: '我的世界 (Minecraft)',
				component: () => import('@/components/pages/game/records/minecraft.vue')
			},
			{
				path: 'osu',
				name: 'osu!',
				component: () => import('@/components/pages/game/records/osu.vue')
			},
			{
				path: 'malody',
				name: '马老弟 (Malody)',
				component: () => import('@/components/pages/game/records/malody.vue')
			},
			{
				path: 'geometry_dash',
				name: '几何冲刺 (Geometry Dash)',
				component: () => import('@/components/pages/game/records/geometry_dash.vue')
			},
			{
				path: 'tetrio',
				name: 'tetr.io',
				component: () => import('@/components/pages/game/records/tetrio.vue')
			}
		]
	},

	{
		path: '/self',
		name: '本体',
		component: () => import('@/components/pages/self.vue')
	},
	{
		path: '/dev',
		name: '开发',
		component: () => import('@/components/pages/dev.vue')
	},
	{
		path: '/furry',
		name: '福瑞',
		component: () => import('@/components/pages/furry/index.vue')
	},

	{
		path: '/furry/events/:id(\\d+)',
		name: '福瑞相关活动行程详情',
		component: () => import('@/components/pages/furry/event.vue')
	},
	{
		path: '/furry/characters/:id(\\d+)',
		name: '兽设详情',
		component: () => import('@/components/pages/furry/character.vue')
	},

	{
		path: '/birthday',
		name: '生日',
		component: () => import('@/components/pages/birthday/index.vue')
	},
	{
		path: '/birthday/records/:age(\\d+)',
		name: '生日记录详情',
		component: () => import('@/components/pages/birthday/record.vue')
	},

	{
		path: '/tools',
		name: '小工具',
		component: () => import('@/components/pages/tools/index.vue')
	},
	{
		path: '/tools/key-accuracy-calculator',
		name: '定轨音游段位单曲准度计算器',
		component: () => import('@/components/pages/tools/key-accuracy-calculator.vue')
	},
	{
		path: '/tools/image-watermark',
		name: '图片水印工具',
		component: () => import('@/components/pages/tools/image-watermark.vue')
	},

	...(import.meta.env.DEV ? [
		{
			path: '/_editor',
			name: '数据库编辑器',
			component: () => import('@/components/pages/editor/index.vue')
		},
		{
			path: '/_tests/markdown',
			name: 'markdown 渲染测试',
			component: () => import('@/components/pages/tests/markdown.vue')
		}
	] : []),

	{
		path: '/:_(.*)*',
		component: () => import('@/components/pages/fallback.vue')
	}
] satisfies RouteRecordRaw[]