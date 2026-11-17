import type { GameMinecraftRecordPortal } from '~/types/game'

import panorama from '~/stores/owner/game/assets/minecraft/panorama.bin?url'
import { name as ownerName } from '~/stores/owner/information'

export const skinSrc =
	'https://textures.minecraft.net/texture/e69b56a5349e6526f3dc5b8e5e861fb9b8fe84059d9b9d9938718ec618f25add'

export const defaultPreviewConfig = {
	animation_speed: 1,
	animation_type: 'idle',
	auto_rotate: true,
	auto_rotate_speed: 1,
	background: panorama,
	background_type: 'panorama',
	camera_lighting: 120,
	fov: 96,
	global_lighting: 3,
	name_tag: ownerName,
	skin_model: 'auto-detect',
	skin_url: skinSrc,
	zoom: 0.5
} as const

export const portals = [
	{
		href: 'https://center.mcmod.cn/33335',
		icon: 'i-ant-design:profile-outlined',
		name: 'MC 百科 (mcmod) 资料'
	}
] as const satisfies GameMinecraftRecordPortal[]