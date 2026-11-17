import type { GameMalodyDan, GameMalodyDanTimeline, GameMalodyRecordPortal } from '~/types/game'

import { createDate } from '~/utils/date'

export const dan = {
	base: 'v3',

	jack: 'Extra 6',

	speed: 'Extra 5',

	stream: 'Extra 5',

	tech: 'Extra 6'
} as const satisfies GameMalodyDan

export const danTimelines = [
	{
		completed_at: createDate(2023, 11, 24),
		name: 'v3 Regular 0',
		video_url: 'https://www.bilibili.com/video/BV1ub4y1T77n'
	},
	{
		completed_at: createDate(2023, 11, 24),
		name: 'v3 Regular 1',
		video_url: 'https://www.bilibili.com/video/BV1nc411r7xQ'
	},
	{
		completed_at: createDate(2023, 11, 24),
		name: 'v3 Regular 2',
		video_url: 'https://www.bilibili.com/video/BV1Nc411z7pE'
	},
	{
		completed_at: createDate(2023, 11, 24),
		name: 'v3 Regular 3',
		video_url: 'https://www.bilibili.com/video/BV1rb4y1u74j'
	},
	{
		completed_at: createDate(2023, 1, 9),
		name: 'v3 Regular 4',
		video_url: 'https://www.bilibili.com/video/BV18v4y1v7ov'
	},
	{
		completed_at: createDate(2023, 1, 11),
		name: 'v3 Regular 5',
		video_url: 'https://www.bilibili.com/video/BV1uv4y1i78V'
	},
	{
		completed_at: createDate(2023, 1, 22),
		name: 'v3 Regular 6',
		video_url: 'https://www.bilibili.com/video/BV1eM411t7Px'
	},
	{
		completed_at: createDate(2023, 2, 14),
		name: 'v3 Regular 7',
		video_url: 'https://www.bilibili.com/video/BV1qv4y1s7xu'
	},
	{
		completed_at: createDate(2023, 3, 26),
		name: 'v3 Regular 8',
		video_url: 'https://www.bilibili.com/video/BV18k4y147CV'
	},
	{
		completed_at: createDate(2023, 5, 5),
		name: 'v3 Regular 9',
		video_url: 'https://www.bilibili.com/video/BV1Bs4y137wb'
	},
	{
		completed_at: createDate(2023, 5, 10),
		name: 'v3 Regular 10',
		video_url: 'https://www.bilibili.com/video/BV1Hs4y1u7SU'
	},
	{
		completed_at: createDate(2024, 4, 30),
		name: 'v3 Regular 10 | 后光',
		video_url: 'https://www.bilibili.com/video/BV18C411J71V'
	},
	{
		completed_at: createDate(2023, 11, 12),
		name: 'v3 Extra 1',
		video_url: 'https://www.bilibili.com/video/BV1dN4y1D7ae'
	},
	{
		completed_at: createDate(2024, 9, 29),
		name: 'v3 Extra 1 | 后光',
		video_url: 'https://www.bilibili.com/video/BV1NsxyedEpD'
	},
	{
		completed_at: createDate(2023, 11, 17),
		name: 'v3 Extra 2',
		video_url: 'https://www.bilibili.com/video/BV1Dw411H7Gr'
	},
	{
		completed_at: createDate(2025, 2, 14),
		name: 'v3 Extra 2 | 后光',
		video_url: 'https://www.bilibili.com/video/BV1mdACeNEVf'
	},
	{
		completed_at: createDate(2023, 12, 3),
		name: 'v3 Extra 3',
		video_url: 'https://www.bilibili.com/video/BV1Lu4y1V7kW'
	},
	{
		completed_at: createDate(2025, 2, 14),
		name: 'v3 Extra 3 | 后光',
		video_url: 'https://www.bilibili.com/video/BV12dACeNExr'
	},
	{
		completed_at: createDate(2024, 9, 4),
		name: 'v3 Extra 4',
		video_url: 'https://www.bilibili.com/video/BV12opceAEZN'
	},
	{
		completed_at: createDate(2024, 10, 28),
		name: 'v3 Extra 5',
		video_url: 'https://www.bilibili.com/video/BV1Cg1jYgE1x'
	}
] as const satisfies GameMalodyDanTimeline[]

export const portals = [
	{
		href: 'https://m.mugzone.net/accounts/user/239697',
		icon: 'i-ant-design:profile-outlined',
		name: '资料'
	}
] as const satisfies GameMalodyRecordPortal[]