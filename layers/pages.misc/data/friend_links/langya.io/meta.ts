import type { FriendLink } from "../../../app/types/misc";

export const remoteLogo = "https://q1.qlogo.cn/g?b=qq&nk=3054086606&s=640";

export default {
    logo: new URL("./assets/logo.bin", import.meta.url).toString(),
    name: "LangYa466",
    description: null,
    href: "https://langya.io?redirect={domain}",
} satisfies FriendLink;