import type Database from '@/database'
import { Entity } from 'dexie'

export default class Registry extends Entity<Database> {
	id!: number
	name!: string
	value!: unknown
}