import type { Organization } from "../../../app/types/dev";

export const remoteAvatar = "https://avatars.githubusercontent.com/u/180642546";

export default {
    avatar: new URL("./assets/avatar.bin", import.meta.url).toString(),
    name: "FurryChatWorld",
    href: "https://github.com/FurryChatWorld",
} satisfies Organization;