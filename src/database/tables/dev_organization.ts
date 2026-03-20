import type Database from "@/database";
import { Entity } from "dexie";

export default class DevOrganization extends Entity<Database> {
    id!: number;
    avatar!: string;
    name!: string;
    href!: string;
}