import type Database from '@/database'
import { Entity } from 'dexie'

export default class DevStack extends Entity<Database> {
	id!: number
	type!: string
	icon!: string
	name!: string
	href!: string
}