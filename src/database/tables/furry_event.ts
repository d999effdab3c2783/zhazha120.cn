import type Database from "@/database";
import { Entity } from "dexie";

export default class FurryEvent extends Entity<Database> {
    id!: number;
    cover!: string;
    name!: string;
    short_name!: string;
    description!: string;
    start_date!: string;
    end_date!: string;
    href!: string;
    furry_character_ids!: number[];
}