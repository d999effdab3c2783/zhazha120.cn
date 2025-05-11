import { ProfileOutlined } from '@vicons/antd'
import { NIcon } from 'naive-ui'
import skin from '~/assets/minecraft_5aba2a7aefdf09473793b71ec8bd1abb1355c037.webp?url'
import type Button from '~/types/button'

interface Minecraft {
	readonly skin: string
	readonly name: string

	readonly buttons: Button[]
}

export default {
	skin,
	name: 'WOSHIZHAZHA120',
	buttons: [
		{
			name: 'MC 百科',
			href: `https://center.mcmod.cn/33335`,
			icon: () => h(NIcon, {
				component: ProfileOutlined
			}),
			is_external: true
		}
	]
} satisfies Minecraft