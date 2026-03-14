import type Database from '@/database'
import { Entity } from 'dexie'

export default class OsuContact extends Entity<Database> {
	id!: number
	icon!: string
	name!: string
	href!: string
}