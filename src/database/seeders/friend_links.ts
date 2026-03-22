import config from "@/config/database";
import { downloadBlob } from "@/utils/blob";
import type { Dexie } from "dexie";

export default async (database: Dexie) => {
    await database.table("friend_links").bulkAdd([
        {
            name: "Abnormal Cat",
            description: null,
            logo: `${config.reference_prefix}_logo`,
            href: "https://abnormalcat.cn",
            _logo: await downloadBlob(
                (await import("@/assets/images/friend_links/abnormalcat.webp?url")).default,
            ),
        },
        {
            name: "迷失的小K",
            description: "感受编程乐趣，畅游代码海洋",
            logo: `${config.reference_prefix}_logo`,
            href: "https://blog.kclub.tech",
            _logo: await downloadBlob(
                (await import("@/assets/images/friend_links/kclub.webp?url")).default,
            ),
        },
        {
            name: "应龙笔记",
            description: "应龙笔记是一个专注于知识分享的网站",
            logo: `${config.reference_prefix}_logo`,
            href: `https://www.silverdragon.cn?link={domain}`,
            _logo: await downloadBlob(
                (await import("@/assets/images/friend_links/silverdragon.webp?url")).default,
            ),
        },
        {
            name: "锐龙的小窝",
            description: "锐冰的个人博客",
            logo: `${config.reference_prefix}_logo`,
            href: "https://blog.sharpice.top",
            _logo: await downloadBlob(
                (await import("@/assets/images/friend_links/sharpice.webp?url")).default,
            ),
        },
        {
            name: "LangYa466",
            description: null,
            logo: `${config.reference_prefix}_logo`,
            href: "https://furry.luxe",
            _logo: await downloadBlob(
                (await import("@/assets/images/friend_links/langya.webp?url")).default,
            ),
        },
        {
            name: "F_Qilin",
            description: null,
            logo: `${config.reference_prefix}_logo`,
            href: "https://blog.fqilin.top",
            _logo: await downloadBlob(
                (await import("@/assets/images/friend_links/fqilin.webp?url")).default,
            ),
        },
        {
            name: "是只林风呐",
            description: "-来点奇奇怪怪的- < )",
            logo: `${config.reference_prefix}_logo`,
            href: "https://linfun.top",
            _logo: await downloadBlob(
                (await import("@/assets/images/friend_links/linfun.webp?url")).default,
            ),
        },
        {
            name: "koto's site",
            description: "koto 的灌水站",
            logo: `${config.reference_prefix}_logo`,
            href: "https://koto.cc",
            _logo: await downloadBlob(
                (await import("@/assets/images/friend_links/koto.webp?url")).default,
            ),
        },
        {
            name: "西西のBlog",
            description: "嘻嘻西西CC吸吸",
            logo: `${config.reference_prefix}_logo`,
            href: "https://xxand.cc",
            _logo: await downloadBlob(
                (await import("@/assets/images/friend_links/xxandcc.webp?url")).default,
            ),
        },
        {
            name: "Dracowyn",
            description: "愿飞龙常入你梦乡",
            logo: `${config.reference_prefix}_logo`,
            href: "https://dracowyn.com",
            _logo: await downloadBlob(
                (await import("@/assets/images/friend_links/dracowyn.webp?url")).default,
            ),
        },
        {
            name: "洺渊的小窝",
            description: "过去已成过去，将来还是将来，而我们能改变的只有现在。",
            logo: `${config.reference_prefix}_logo`,
            href: "https://blog.fmyron.com",
            _logo: await downloadBlob(
                (await import("@/assets/images/friend_links/fmyron.webp?url")).default,
            ),
        },
    ]);
};