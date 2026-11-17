import type { GameGeometryDashRecordPortal } from '~/types/game'

export const overlay = 'https://gdbrowser.com/u/1889402'

export const portals = [
	{
		href: overlay,
		icon: 'i-ant-design:profile-outlined',
		name: '资料 (GDBrowser)'
	}
] as const satisfies GameGeometryDashRecordPortal[]