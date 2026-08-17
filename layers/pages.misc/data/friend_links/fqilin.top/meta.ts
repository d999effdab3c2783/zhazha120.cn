import type { FriendLink } from "../../../app/types/misc";

export const remoteLogo = "https://blog.fqilin.top/img/avatar.png";

export default {
    logo: new URL("./assets/logo.bin", import.meta.url).toString(),
    name: "F_Qilin",
    description: null,
    href: "https://blog.fqilin.top",
} satisfies FriendLink;