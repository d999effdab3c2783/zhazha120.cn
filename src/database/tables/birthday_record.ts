import type Database from "@/database";
import { Entity } from "dexie";

export default class BirthdayRecord extends Entity<Database> {
    id!: number;
    age!: number;
    content!: string;
}