import type { FriendLink } from "../../../app/types/misc";

export const remoteLogo = "https://blog.guaizai.top/img/fluid.png";

export default {
    logo: new URL("./assets/logo.bin", import.meta.url).toString(),
    name: "GuaiZai's blog",
    description: "Tech inspires~!",
    href: "https://blog.guaizai.top",
} satisfies FriendLink;