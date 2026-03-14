import type Database from '@/database'
import { Entity } from 'dexie'

export default class FurryCharacter extends Entity<Database> {
	id!: number
	illustration!: string
	name!: string
	species!: string[]
	species_alias!: string
	description!: string
	content!: string
}