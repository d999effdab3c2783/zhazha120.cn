import type { FriendLink } from "../../../app/types/misc";

export const remoteLogo = "https://langya.io/favicon.ico";

export default {
    logo: new URL("./assets/logo.bin", import.meta.url).toString(),
    name: "LangYa466",
    description: null,
    href: "https://langya.io?redirect={domain}",
} satisfies FriendLink;