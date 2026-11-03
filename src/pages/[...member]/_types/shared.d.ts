import type { CollectionEntry } from 'astro:content'

export type Params = Partial<{
	readonly member: string
}>

export type Props = {
	readonly member: CollectionEntry<'members'>
}