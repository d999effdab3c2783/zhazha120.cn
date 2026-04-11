export default defineAppConfig({
    layout: {
        footer: {
            copyright_start_year: 2022,
            filing: {
                province_abbr: "赣",
                icp: {
                    code: 2022005275,
                    link: "https://beian.miit.gov.cn",
                },
                safety: {
                    code: 36070202001088,
                    link: "https://www.beian.gov.cn/portal/registerSystemInfo?recordcode={code}",
                },
            },
            version: {
                link: "https://github.com/d999effdab3c2783/zhazha120.cn/commit/{sha}",
            },
        },
    },
});