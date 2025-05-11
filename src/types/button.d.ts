import type { ButtonProps } from 'naive-ui'

interface Button extends /* @vue-ignore */ ButtonProps {
	readonly name: string
	readonly href: string
	readonly icon: () => VNode
	readonly is_external: boolean
}

export default Button