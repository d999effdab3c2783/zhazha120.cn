import type Database from "@/database";
import { Entity } from "dexie";

export default class TetrioBlitzTimeline extends Entity<Database> {
    id!: number;
    score!: string;
    archived_at!: string;
}