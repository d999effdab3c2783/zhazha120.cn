import type { FriendLink } from "../../../app/types/misc";

export const remoteLogo =
    "https://oss-fz.silverdragon.cn/loongapisources/2025/06/28/685fe4697dcc1.jpg";

export default {
    logo: new URL("./assets/logo.bin", import.meta.url).toString(),
    name: "应龙笔记",
    description: "应龙笔记是一个专注于知识分享的网站",
    href: `https://www.silverdragon.cn?link={domain}`,
} satisfies FriendLink;