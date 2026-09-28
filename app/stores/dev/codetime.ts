import type { DevCodeTime } from '~/types/dev'

const base = `codetime.dev`
const userId = 2270

export default {
	domain: base,
	href: `https://${base}`,

	userId: userId,

	widgets: {
		badge: {
			codingTime: `https://shields.jannchie.com/endpoint?style=for-the-badge&url=${encodeURIComponent(
				`https://${base}/v3/users/shield?uid=${userId}`
			)}`,
			tokens: `https://shields.jannchie.com/endpoint?style=for-the-badge&url=${encodeURIComponent(
				`https://${base}/v3/users/shield?uid=${userId}&metric=tokens`
			)}`
		},
		top: {
			languages: `https://${base}/api/widgets/donut.svg?uid=${userId}&theme={theme}`,
			projects: `https://${base}/api/widgets/donut.svg?uid=${userId}&mode=projects&theme={theme}`
		},
		status: `https://${base}/api/widgets/status.svg?uid=${userId}&theme={theme}`,
		calendar: `https://${base}/api/widgets/calendar.svg?uid=${userId}&theme={theme}`,
		trend: `https://${base}/api/widgets/trend.svg?uid=${userId}&theme={theme}`,
		usage: `https://${base}/api/widgets/usage.svg?uid=${userId}&theme={theme}`
	}
} as const satisfies DevCodeTime