import type { ButtonProps } from 'naive-ui'

export type OwnerContact = {
	readonly icon: string
	readonly name: string
	readonly href: string
} & Partial<{
	readonly comment: string
}>

export type OwnerPortal = {
	readonly icon: string
	readonly name: string
	readonly href: string
} & Partial<
	Pick<ButtonProps, 'type'> & {
		readonly comment: string
	}
>