import type Database from '@/database'
import { Entity } from 'dexie'

export default class TetrioSprintTimeline extends Entity<Database> {
	id!: number
	time!: string
	archived_at!: string
}