import type { Organization } from "../../../app/types/dev";

export const remoteAvatar = "https://avatars.githubusercontent.com/u/168070538";

export default {
    avatar: new URL("./assets/avatar.bin", import.meta.url).toString(),
    name: "A Minos",
    href: "https://github.com/A-Minos",
} satisfies Organization;