import type { ExternalLink } from "../app/types/self";

// @unocss-include

export default [
    {
        type: "primary",

        icon: "i-tdesign:usergroup-add",
        name: {
            localeKey: "pages.self:personal_group",
        },
        href: "https://qm.qq.com/cgi-bin/qm/qr?k=EKq625P5qpas9-m5lVFTDnyCgR1I9yPw&authKey=zqbyY33MW7xTvSEBm+fqVv7lrq3EhV7UuVPrYnQZTal9dQpkD9XM3ViHSu2QnGb3",

        comment: {
            localeKey: "pages.self:personal_group.comment",
        },
    },
    {
        icon: "i-ant-design:cloud-download-outlined",
        name: {
            localeKey: "pages.self:cloud_storage",
        },
        href: "https://pan.zhazha120.cn",
    },
] satisfies ExternalLink[];