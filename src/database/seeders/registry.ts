import config from '@/config/database'
import { alova } from '@/shared/alova'
import { convertFile, downloadBlob } from '@/utils/blob'
import { createDate } from '@/utils/date'
import type { Dexie } from 'dexie'

export default async (database: Dexie) => {
	database.table('registry')
		.bulkAdd([
			{
				name: 'theme.primary_color',
				value: '#f79a00'
			},
			{
				name: 'theme.generator.light_surface_color.count',
				value: 0
			},
			{
				name: 'theme.generator.light_surface_color.start',
				value: 255
			},
			{
				name: 'theme.generator.light_surface_color.step',
				value: 0
			},
			{
				name: 'theme.generator.dark_surface_color.count',
				value: 10
			},
			{
				name: 'theme.generator.dark_surface_color.start',
				value: 6
			},
			{
				name: 'theme.generator.dark_surface_color.step',
				value: 6
			},
			{
				name: 'footer.copyright.start_year',
				value: 2022
			},
			{
				name: 'footer.filing.province_abbreviation',
				value: '赣'
			},
			{
				name: 'footer.filing.icp_code',
				value: 2022005275
			},
			{
				name: 'footer.filing.safety_code',
				value: 36070202001088
			},
			{
				name: 'footer.commit.repository',
				value: 'https://github.com/d999effdab3c2783/zhazha120.cn'
			},
			{
				name: 'intro.avatar',
				value: `${config.reference_prefix}_file`,

				_file: convertFile(await (
					await alova.Get<Response>((
						await import('@/assets/images/Z.svg?url')
					).default).send()
				).blob(), 'Z')
			},
			{
				name: 'intro.name',
				value: '渣渣120'
			},
			{
				name: 'intro.poke',
				value: '戳哭了 哄不好了'
			},
			{
				name: 'self.description',
				value: (
					await import('@/assets/contents/self_description.md?raw')
				).default
			},
			{
				name: 'self.description.show_in_home',
				value: false
			},
			{
				name: 'markdown.safe_remote_domains',
				value: [
					'pan.zhazha120.cn',
					'zhazha120.cn'
				]
			},
			{
				name: 'support.afdian.url',
				value: 'https://afdian.com/a/WOSHIZHAZHA120'
			},
			{
				name: 'support.qq.qrcode',
				value: `${config.reference_prefix}_file`,
				_file: convertFile(await downloadBlob((
					await import('@/assets/images/support/qq/qrcode.webp?url')
				).default), 'qr')
			},
			{
				name: 'support.wechat.qrcode',
				value: `${config.reference_prefix}_file`,
				_file: convertFile(await downloadBlob((
					await import('@/assets/images/support/wechat/qrcode.webp?url')
				).default), 'qr')
			},
			{
				name: 'support.alipay.red_packet',
				value: `${config.reference_prefix}_file`,
				_file: convertFile(await downloadBlob((
					await import('@/assets/images/support/alipay/red_packet.webp?url')
				).default), 'qr')
			},
			{
				name: 'support.alipay.qrcode',
				value: `${config.reference_prefix}_file`,
				_file: convertFile(await downloadBlob((
					await import('@/assets/images/support/alipay/qrcode.webp?url')
				).default), 'qr')
			},
			{
				name: 'game.records.maimai.diving-fish.username',
				value: '渣渣120'
			},
			{
				name: 'game.records.minecraft.skinview3d.fov',
				value: 96
			},
			{
				name: 'game.records.minecraft.skinview3d.zoom',
				value: 0.5
			},
			{
				name: 'game.records.minecraft.skinview3d.global_lighting',
				value: 3
			},
			{
				name: 'game.records.minecraft.skinview3d.camera_lighting',
				value: 120
			},
			{
				name: 'game.records.minecraft.skinview3d.auto_rotate',
				value: true
			},
			{
				name: 'game.records.minecraft.skinview3d.auto_rotate_speed',
				value: 1
			},
			{
				name: 'game.records.minecraft.skinview3d.animation_type',
				value: 'idle'
			},
			{
				name: 'game.records.minecraft.skinview3d.animation_speed',
				value: 1
			},
			{
				name: 'game.records.minecraft.skinview3d.skin',
				value: 'https://cdn.zhazha120.cn/download/minecraft_skin.png'
			},
			{
				name: 'game.records.minecraft.skinview3d.panorama',
				value: `${config.reference_prefix}_file`,
				_file: convertFile(await downloadBlob((
					await import('@/assets/images/game/minecraft/panorama.webp?url')
				).default), 'panorama')
			},
			{
				name: 'game.records.minecraft.skinview3d.name_tag',
				value: 'WOSHIZHAZHA120'
			},
			{
				name: 'game.records.osu.overlay_url',
				value: `https://osu-sig.vercel.app/card?user=16303789&mode=mania&animation=true`
			},
			{
				name: 'game.records.osu.mania.4k.reform_dan.jack',
				value: 'β'
			},
			{
				name: 'game.records.osu.mania.4k.reform_dan.technical',
				value: 'γ'
			},
			{
				name: 'game.records.osu.mania.4k.reform_dan.speed',
				value: 'γ'
			},
			{
				name: 'game.records.osu.mania.4k.reform_dan.stamina',
				value: 'β'
			},
			{
				name: 'game.records.osu.mania.4k.long_note_dan',
				value: 11
			},
			{
				name: 'game.records.malody.dan.v3.jack',
				value: 'Extra 6'
			},
			{
				name: 'game.records.malody.dan.v3.tech',
				value: 'Extra 6'
			},
			{
				name: 'game.records.malody.dan.v3.speed',
				value: 'Extra 5'
			},
			{
				name: 'game.records.malody.dan.v3.stream',
				value: 'Extra 5'
			},
			{
				name: 'game.records.geometry_dash.overlay_url',
				value: 'https://gdbrowser.com/u/WOSHIZHAZHA120'
			},
			{
				name: 'game.records.geometry_dash.ball',
				value: `${config.reference_prefix}_file`,
				_file: convertFile(await downloadBlob((
					await import('@/assets/images/game/geometry_dash/ball.webp?url')
				).default), 'cube')
			},
			{
				name: 'game.records.geometry_dash.cube',
				value: `${config.reference_prefix}_file`,
				_file: convertFile(await downloadBlob((
					await import('@/assets/images/game/geometry_dash/cube.webp?url')
				).default), 'cube')
			},
			{
				name: 'game.records.geometry_dash.jetpack',
				value: `${config.reference_prefix}_file`,
				_file: convertFile(await downloadBlob((
					await import('@/assets/images/game/geometry_dash/jetpack.webp?url')
				).default), 'cube')
			},
			{
				name: 'game.records.geometry_dash.robot',
				value: `${config.reference_prefix}_file`,
				_file: convertFile(await downloadBlob((
					await import('@/assets/images/game/geometry_dash/robot.webp?url')
				).default), 'cube')
			},
			{
				name: 'game.records.geometry_dash.ship',
				value: `${config.reference_prefix}_file`,
				_file: convertFile(await downloadBlob((
					await import('@/assets/images/game/geometry_dash/ship.webp?url')
				).default), 'cube')
			},
			{
				name: 'game.records.geometry_dash.spider',
				value: `${config.reference_prefix}_file`,
				_file: convertFile(await downloadBlob((
					await import('@/assets/images/game/geometry_dash/spider.webp?url')
				).default), 'cube')
			},
			{
				name: 'game.records.geometry_dash.swing',
				value: `${config.reference_prefix}_file`,
				_file: convertFile(await downloadBlob((
					await import('@/assets/images/game/geometry_dash/swing.webp?url')
				).default), 'cube')
			},
			{
				name: 'game.records.geometry_dash.ufo',
				value: `${config.reference_prefix}_file`,
				_file: convertFile(await downloadBlob((
					await import('@/assets/images/game/geometry_dash/ufo.webp?url')
				).default), 'cube')
			},
			{
				name: 'game.records.geometry_dash.wave',
				value: `${config.reference_prefix}_file`,
				_file: convertFile(await downloadBlob((
					await import('@/assets/images/game/geometry_dash/wave.webp?url')
				).default), 'cube')
			},
			{
				name: 'game.records.geometry_dash.username',
				value: 'WOSHIZHAZHA120'
			},
			{
				name: 'game.records.tetrio.overlay_url',
				value: 'https://tetr.fires.bz/overlay/user?username=5eb3a6530b29196c155074e8&display-name=true&display-level=true&display-role=true&display-badge=true&display-rank=true&display-league=true&display-sprint=true&display-blitz=true&display-standingsets=true&display-standingsets-sprint=true&display-standingsets-blitz=true&alignment=top&layout=horizontal&league=apm+pps+vs+x_winrate+percentile&sprint=pieces+pps+ff+kpp+kps+quads&blitz=pps+ff+spp+pieces+pieces+quads+tspins+allclears'
			},
			{
				name: 'game.records.tetrio.game_background',
				value: 'https://cdn.zhazha120.cn/download/tetrio_background.webp'
			},
			{
				name: 'game.records.tetrio.game_background.overlay',
				value: `${config.reference_prefix}_file`,
				_file: convertFile(await downloadBlob((
					await import('@/assets/images/game/tetrio/game_background_overlay.webp?url')
				).default), 'background_overlay')
			},
			{
				name: 'dev.description',
				value: (
					await import('@/assets/contents/dev_description.md?raw')
				).default
			},
			{
				name: 'furry.description',
				value: (
					await import('@/assets/contents/furry_description.md?raw')
				).default
			},
			{
				name: 'self.birthday',
				value: createDate(2006, 5, 7).toISOString()
			},
			{
				name: 'birthday.min_age.value',
				value: 6
			},
			{
				name: 'birthday.min_age.message',
				value: '{age} 岁, 狗在这个时候还不知道互联网是什么'
			},
			{
				name: 'birthday.max_age.value',
				value: 120
			},
			{
				name: 'birthday.max_age.message',
				value: '{age} 岁 ? 这个时候狗大概死掉了吧'
			},
			{
				name: 'self.short_name',
				value: '渣渣'
			}
		])
}