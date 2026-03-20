import config from "@/config/database";
import { convertWebp } from "@/utils/image";
import type { Dexie } from "dexie";

export default async (database: Dexie) => {
    database.table("dev_organizations").bulkAdd([
        {
            avatar: `${config.reference_prefix}_avatar`,
            name: "26F Studio",
            href: "https://github.com/26F-Studio",

            _avatar: await convertWebp(
                "https://avatars.githubusercontent.com/u/72001477",
                config.image_quality,
            ),
        },
        {
            avatar: `${config.reference_prefix}_avatar`,
            name: "A Minos",
            href: "https://github.com/A-Minos",

            _avatar: await convertWebp(
                "https://avatars.githubusercontent.com/u/168070538",
                config.image_quality,
            ),
        },
        {
            avatar: `${config.reference_prefix}_avatar`,
            name: "Z Team",
            href: "https://github.com/c794b7b0331e4cf3",

            _avatar: await convertWebp(
                "https://avatars.githubusercontent.com/u/108103310",
                config.image_quality,
            ),
        },
        {
            avatar: `${config.reference_prefix}_avatar`,
            name: "Endless Spike Studio",
            href: "https://github.com/Endless-Spike-Studio",

            _avatar: await convertWebp(
                "https://avatars.githubusercontent.com/u/102524977",
                config.image_quality,
            ),
        },
        {
            avatar: `${config.reference_prefix}_avatar`,
            name: "FurDevsCN",
            href: "https://github.com/FurDevsCN",

            _avatar: await convertWebp(
                "https://avatars.githubusercontent.com/u/103052241",
                config.image_quality,
            ),
        },
        {
            avatar: `${config.reference_prefix}_avatar`,
            name: "Furry Chat World",
            href: "https://github.com/FurryChatWorld",

            _avatar: await convertWebp(
                "https://avatars.githubusercontent.com/u/180642546",
                config.image_quality,
            ),
        },
        {
            avatar: `${config.reference_prefix}_avatar`,
            name: "Paw Team Club",
            href: "https://github.com/PawTeamClub",

            _avatar: await convertWebp(
                "https://avatars.githubusercontent.com/u/156998119",
                config.image_quality,
            ),
        },
    ]);
};
7;