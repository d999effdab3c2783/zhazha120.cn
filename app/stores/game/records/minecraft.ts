import panorama from '~/stores/game/assets/minecraft/panorama.bin?url'
import { name as ownerName } from '~/stores/owner/information'
import type { GameMinecraftRecordPortal } from '~/types/game'

export const skinSrc =
	'https://textures.minecraft.net/texture/e69b56a5349e6526f3dc5b8e5e861fb9b8fe84059d9b9d9938718ec618f25add'

export const defaultPreviewConfig = {
	fov: 96,
	zoom: 0.5,
	global_lighting: 3,
	camera_lighting: 120,
	auto_rotate: true,
	auto_rotate_speed: 1,
	animation_type: 'idle',
	animation_speed: 1,
	skin_model: 'auto-detect',
	skin_url: skinSrc,
	background_type: 'panorama',
	background: panorama,
	name_tag: ownerName
} as const

export const portals = [
	{
		icon: 'i-ant-design:profile-outlined',
		name: 'MC 百科 (mcmod) 资料',
		href: 'https://center.mcmod.cn/33335'
	}
] as const satisfies GameMinecraftRecordPortal[]