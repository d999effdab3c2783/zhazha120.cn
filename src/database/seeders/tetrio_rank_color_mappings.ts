import type { Dexie } from "dexie";

export default async (database: Dexie) => {
    await database.table("tetrio_rank_color_mappings").bulkAdd([
        {
            name: "a",
            value: "#46ad51",
        },
        {
            name: "a+",
            value: "#1fa834",
        },
        {
            name: "a-",
            value: "#3bb687",
        },
        {
            name: "b",
            value: "#4f64c9",
        },
        {
            name: "b+",
            value: "#4f99c0",
        },
        {
            name: "b-",
            value: "#5650c7",
        },
        {
            name: "c",
            value: "#733e8f",
        },
        {
            name: "c+",
            value: "#552883",
        },
        {
            name: "c-",
            value: "#79558c",
        },
        {
            name: "d",
            value: "#907591",
        },
        {
            name: "d+",
            value: "#8e6091",
        },
        {
            name: "s",
            value: "#e0a71b",
        },
        {
            name: "s+",
            value: "#d8af0e",
        },
        {
            name: "s-",
            value: "#b2972b",
        },
        {
            name: "ss",
            value: "#db8b1f",
        },
        {
            name: "u",
            value: "#ff3813",
        },
        {
            name: "x",
            value: "#ff45ff",
        },
        {
            name: "x+",
            value: "#a763ea",
        },
        {
            name: "z",
            value: "#375433",
        },
    ]);
};