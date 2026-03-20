import type Database from "@/database";
import { Entity } from "dexie";

export default class FriendLink extends Entity<Database> {
    id!: number;
    logo!: string;
    name!: string;
    description!: string;
    href!: string;
}