import type { Dexie } from "dexie";

export default async (database: Dexie) => {
    await database.table("dev_awards").bulkAdd([
        {
            name: ["蓝桥杯 第十六届", "软件赛 职业院校组 省赛", "Web 应用开发 一等奖"].join("\n"),
        },
        {
            name: ["蓝桥杯 第十六届", "软件赛 职业院校组 国赛", "Web 应用开发 一等奖"].join("\n"),
            href: "https://lanqiao.cn/cup-sixteen",
        },
        {
            name: ["2025 江西省 职业院校技能大赛", "高职组 个人赛", "Web 应用软件开发 一等奖"].join(
                "\n",
            ),
            href: "https://zs.jxeduyun.com/certifiDetail?certificatesid=26010815212809383571",
        },
        {
            name: ["蓝桥杯 第十七届", "软件赛 职业院校组 省赛", "Web 应用开发 一等奖"].join("\n"),
        },
        {
            name: ["江西应用工程职业学院 2026 职业教育活动周", "校内赛", "Web 一等奖"].join("\n"),
        },
    ]);
};