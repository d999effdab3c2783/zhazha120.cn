import type { GameMalodyDan, GameMalodyDanTimeline, GameMalodyRecordPortal } from '~/types/game'
import { createDate } from '~/utils/date'

export const dan = {
	base: 'v3',

	jack: 'Extra 6',
	tech: 'Extra 6',
	speed: 'Extra 5',
	stream: 'Extra 5'
} as const satisfies GameMalodyDan

export const danTimelines = [
	{
		name: 'v3 Regular 0',
		completed_at: createDate(2023, 11, 24),
		video_url: 'https://www.bilibili.com/video/BV1ub4y1T77n'
	},
	{
		name: 'v3 Regular 1',
		completed_at: createDate(2023, 11, 24),
		video_url: 'https://www.bilibili.com/video/BV1nc411r7xQ'
	},
	{
		name: 'v3 Regular 2',
		completed_at: createDate(2023, 11, 24),
		video_url: 'https://www.bilibili.com/video/BV1Nc411z7pE'
	},
	{
		name: 'v3 Regular 3',
		completed_at: createDate(2023, 11, 24),
		video_url: 'https://www.bilibili.com/video/BV1rb4y1u74j'
	},
	{
		name: 'v3 Regular 4',
		completed_at: createDate(2023, 1, 9),
		video_url: 'https://www.bilibili.com/video/BV18v4y1v7ov'
	},
	{
		name: 'v3 Regular 5',
		completed_at: createDate(2023, 1, 11),
		video_url: 'https://www.bilibili.com/video/BV1uv4y1i78V'
	},
	{
		name: 'v3 Regular 6',
		completed_at: createDate(2023, 1, 22),
		video_url: 'https://www.bilibili.com/video/BV1eM411t7Px'
	},
	{
		name: 'v3 Regular 7',
		completed_at: createDate(2023, 2, 14),
		video_url: 'https://www.bilibili.com/video/BV1qv4y1s7xu'
	},
	{
		name: 'v3 Regular 8',
		completed_at: createDate(2023, 3, 26),
		video_url: 'https://www.bilibili.com/video/BV18k4y147CV'
	},
	{
		name: 'v3 Regular 9',
		completed_at: createDate(2023, 5, 5),
		video_url: 'https://www.bilibili.com/video/BV1Bs4y137wb'
	},
	{
		name: 'v3 Regular 10',
		completed_at: createDate(2023, 5, 10),
		video_url: 'https://www.bilibili.com/video/BV1Hs4y1u7SU'
	},
	{
		name: 'v3 Regular 10 | 后光',
		completed_at: createDate(2024, 4, 30),
		video_url: 'https://www.bilibili.com/video/BV18C411J71V'
	},
	{
		name: 'v3 Extra 1',
		completed_at: createDate(2023, 11, 12),
		video_url: 'https://www.bilibili.com/video/BV1dN4y1D7ae'
	},
	{
		name: 'v3 Extra 1 | 后光',
		completed_at: createDate(2024, 9, 29),
		video_url: 'https://www.bilibili.com/video/BV1NsxyedEpD'
	},
	{
		name: 'v3 Extra 2',
		completed_at: createDate(2023, 11, 17),
		video_url: 'https://www.bilibili.com/video/BV1Dw411H7Gr'
	},
	{
		name: 'v3 Extra 2 | 后光',
		completed_at: createDate(2025, 2, 14),
		video_url: 'https://www.bilibili.com/video/BV1mdACeNEVf'
	},
	{
		name: 'v3 Extra 3',
		completed_at: createDate(2023, 12, 3),
		video_url: 'https://www.bilibili.com/video/BV1Lu4y1V7kW'
	},
	{
		name: 'v3 Extra 3 | 后光',
		completed_at: createDate(2025, 2, 14),
		video_url: 'https://www.bilibili.com/video/BV12dACeNExr'
	},
	{
		name: 'v3 Extra 4',
		completed_at: createDate(2024, 9, 4),
		video_url: 'https://www.bilibili.com/video/BV12opceAEZN'
	},
	{
		name: 'v3 Extra 5',
		completed_at: createDate(2024, 10, 28),
		video_url: 'https://www.bilibili.com/video/BV1Cg1jYgE1x'
	}
] as const satisfies GameMalodyDanTimeline[]

export const portals = [
	{
		icon: 'i-ant-design:profile-outlined',
		name: '资料',
		href: 'https://m.mugzone.net/accounts/user/239697'
	}
] as const satisfies GameMalodyRecordPortal[]