import type Database from "@/database";
import { Entity } from "dexie";

export default class MalodyDownload extends Entity<Database> {
    id!: number;
    name!: string;
    href!: string;
}