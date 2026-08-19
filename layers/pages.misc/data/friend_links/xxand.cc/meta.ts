import type { FriendLink } from "../../../app/types/misc";

export const remoteLogo = "https://img.linfun.top/imgapp/xxxxxxx.png"; // 借用

export default {
    status: "dead",
    logo: new URL("./assets/logo.bin", import.meta.url).toString(),
    name: "西西のBlog",
    description: "嘻嘻西西CC吸吸",
    href: "https://xxand.cc",
} satisfies FriendLink;