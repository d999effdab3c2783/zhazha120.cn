import { NButton, NFlex } from 'naive-ui'
import '~/styles/shared.scss'

// @unocss-include

interface Slots {
	readonly extra: () => VNode
}

export default (link: string, slots: Partial<Slots> = {}) => {
	const nuxt = useNuxtApp()

	const modal = nuxt.$modal as ReturnType<typeof useModal>

	modal.create({
		preset: 'card',
		class: 'modal',
		title: '即将访问外部网站',
		content: () => h(NFlex, {
			align: 'center',
			vertical: true
		}, () => [
			h(NButton, {
				type: 'primary',
				text: true,
				class: 'text-wrap',
				onClick: () => {
					open(link)
				}
			}, () => link),
			slots.extra ? slots.extra() : null,
			h('span', null, {
				default: () => '↑ 戳绿色连接继续跳转 ↑'
			})
		])
	})
}