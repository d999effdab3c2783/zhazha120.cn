import type Database from '@/database'
import { Entity } from 'dexie'

export default class TetrioTetraLeagueSeasonTimeline extends Entity<Database> {
	id!: number
	rank!: string
	archived_at!: string
}