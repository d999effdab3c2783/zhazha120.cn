import type { VNodeChild } from 'vue'

export type Utility = {
	readonly icon: string
	readonly name: string

	readonly render: () => VNodeChild
}