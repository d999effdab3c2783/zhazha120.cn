import type { Organization } from "../../../app/types/dev";

export const remoteAvatar = "https://avatars.githubusercontent.com/u/108103310";

export default {
    avatar: new URL("./assets/avatar.bin", import.meta.url).toString(),
    name: "Z Team",
    href: "https://github.com/c794b7b0331e4cf3",
} satisfies Organization;