import type { Organization } from "../../../app/types/dev";

export const remoteAvatar = "https://avatars.githubusercontent.com/u/72001477";

export default {
    avatar: new URL("./assets/avatar.bin", import.meta.url).toString(),
    name: "26F Studio",
    href: "https://github.com/26F-Studio",
} satisfies Organization;