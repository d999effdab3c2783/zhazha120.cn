import type { ButtonProps } from 'naive-ui'
import type { VNode } from 'vue'

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

export type OwnerBirthdayRecord = {
	readonly renderExtra: () => VNode
}

export type OwnerBirthdayRecordEntry = OwnerBirthdayRecord &
	Partial<{
		readonly age: number
	}>

export type OwnerBirthdayCongratulation = {
	readonly src: string
}

export type OwnerBirthdayRecordButton = {
	readonly name: string
	readonly href: string
} & Partial<{
	readonly icon: string
}>

export type OwnerBirthdayRecordRenderableImage = {
	readonly type: 'image'
	readonly src: string
}

export type OwnerBirthdayRecordEmbedVideo = {
	readonly type: 'embed_video'
	readonly src: string
}

export type OwnerBirthdayRecordRenderableItem = (OwnerBirthdayRecordRenderableImage | OwnerBirthdayRecordEmbedVideo) &
	Partial<{
		readonly buttons: OwnerBirthdayRecordButton[]
		readonly comments: RenderableText[]
	}>

export type OwnerBirthdayRecordRenderable = {
	readonly title: string
	readonly items: OwnerBirthdayRenderableItem[]
}