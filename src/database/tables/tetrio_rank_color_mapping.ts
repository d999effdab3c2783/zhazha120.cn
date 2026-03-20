import type Database from "@/database";
import { Entity } from "dexie";

export default class TetrioRankColorMapping extends Entity<Database> {
    id!: number;
    name!: string;
    value!: string;
}