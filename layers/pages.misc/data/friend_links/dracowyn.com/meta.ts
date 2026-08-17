import type { FriendLink } from "../../../app/types/misc";

export const remoteLogo = "https://attach.dracalon.com/2025/09/17/25.6.15-2.png";

export default {
    logo: new URL("./assets/logo.bin", import.meta.url).toString(),
    name: "Dracowyn",
    description: "愿飞龙常入你梦乡",
    href: "https://dracowyn.com",
} satisfies FriendLink;