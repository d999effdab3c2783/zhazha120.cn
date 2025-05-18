import type { ButtonProps } from 'naive-ui'

interface Button extends /* @vue-ignore */ ButtonProps {
	readonly name: string
	readonly href: string
	readonly icon: () => VNode
	readonly is_external: boolean
	readonly external_modal_slots?: Parameters<typeof showRedirectExternalWebsiteWarningModal>[1]
}

export default Button