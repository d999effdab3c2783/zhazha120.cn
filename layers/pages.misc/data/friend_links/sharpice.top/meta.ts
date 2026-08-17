import type { FriendLink } from "../../../app/types/misc";

export const remoteLogo = "https://sharpice.top/favicon.ico";

export default {
    logo: new URL("./assets/logo.bin", import.meta.url).toString(),
    name: "锐龙的小窝",
    description: "锐冰的个人博客",
    href: "https://blog.sharpice.top",
} satisfies FriendLink;