export default {
	copyright_start_year: 2022,
	filing: {
		province_abbr: '赣',
		icp: {
			code: 2022005275,
			href: 'https://beian.miit.gov.cn'
		},
		safety: {
			icon: new URL('assets/beian.bin', import.meta.url).toString(),
			code: 36070202001088,
			href: 'https://beian.mps.gov.cn/#/query/webSearch?code={code}'
		}
	},
	version: {
		href: 'https://github.com/d999effdab3c2783/zhazha120.cn/commit/{sha}'
	},
	utilities: {
		hotkey: 'F8'
	}
} as const