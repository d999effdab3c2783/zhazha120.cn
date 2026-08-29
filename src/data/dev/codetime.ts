const base = `codetime.dev`;
const user_id = 2270;

export default {
	domain: base,
	user_id,

	widgets: {
		badge: {
			coding_time: `https://shields.jannchie.com/endpoint?style=for-the-badge&url=${encodeURIComponent(
				`https://${base}/v3/users/shield?uid=${user_id}`,
			)}`,
			tokens: `https://shields.jannchie.com/endpoint?style=for-the-badge&url=${encodeURIComponent(
				`https://${base}/v3/users/shield?uid=${user_id}&metric=tokens`,
			)}`,
		},
		top: {
			languages: `https://${base}/api/widgets/donut.svg?uid=${user_id}&theme={theme}`,
			projects: `https://${base}/api/widgets/donut.svg?uid=${user_id}&mode=projects&theme={theme}`,
		},
		status: `https://${base}/api/widgets/status.svg?uid=${user_id}&theme={theme}`,
		calendar: `https://${base}/api/widgets/calendar.svg?uid=${user_id}&theme={theme}`,
		trend: `https://${base}/api/widgets/trend.svg?uid=${user_id}&theme={theme}`,
		usage: `https://${base}/api/widgets/usage.svg?uid=${user_id}&theme={theme}`,
	},
} as const;