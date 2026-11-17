import type { FooterFiling } from '~/types/footer'

import beian from '~/stores/footer/assets/beian.bin?url'

const filingProvinceAbbr = '赣'
const filingIcpCode = 2022005275
const filingSafetyCode = 36070202001088

export default {
	icp: {
		code: filingIcpCode,
		href: 'https://beian.miit.gov.cn',
		text: `${filingProvinceAbbr} ICP 备 ${filingIcpCode} 号`
	},
	provinceAbbr: filingProvinceAbbr,
	safety: {
		code: filingSafetyCode,
		href: `https://beian.mps.gov.cn/#/query/webSearch?code=${filingSafetyCode}`,
		icon: beian,
		text: `${filingProvinceAbbr}公网安备 ${filingSafetyCode} 号`
	}
} as const satisfies FooterFiling