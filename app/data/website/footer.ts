export default {
	copyright_start_year: 2022,

	filing: {
		province_abbr: '赣',

		icp: {
			code: 2022005275,
			href: 'https://beian.miit.gov.cn'
		},
		safety: {
			icon: {
				src: new URL('./assets/beian.webp', import.meta.url)
			},
			code: 36070202001088,
			href: 'https://beian.mps.gov.cn/#/query/webSearch?code={code}'
		}
	}
} as const satisfies {
	readonly copyright_start_year: number

	readonly filing: {
		readonly province_abbr: string

		readonly icp: {
			readonly code: number
			readonly href: string
		}

		readonly safety: {
			readonly icon: {
				readonly src: URL
			}

			readonly code: number
			readonly href: string
		}
	}
}