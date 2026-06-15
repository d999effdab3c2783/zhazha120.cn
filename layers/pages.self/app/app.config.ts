// @unocss-include

export default defineAppConfig({
	self: {
		avatar: {
			src: "/z.svg",
			poke: "戳哭了 哄不好了",
		},
		name: "渣渣120",
		birthday: new Date("2006/5/7"),

		contacts: [
			{
				icon: "i-ant-design:qq-outlined",
				name: "QQ",
				href: "https://qm.qq.com/q/GkUxK7PmmW",
			},
			{
				icon: "i-ant-design:mail-outlined",
				name: "邮箱",
				href: "contact@zhazha120.cn",
			},
			{
				icon: "i-tabler:brand-netease-music",
				name: "网易云音乐",
				href: "https://music.163.com/#/user/home?id=634000521",
			},
			{
				icon: "i-simple-icons:steam",
				name: "Steam",
				href: "https://steamcommunity.com/id/WOSHIZHAZHA120",
				extra: "好友代码: 485570157",
			},
			{
				icon: "i-simple-icons:bilibili",
				name: "哔哩哔哩",
				href: "https://space.bilibili.com/24267334",
			},
			{
				icon: "i-ant-design:github-outlined",
				name: "Github",
				href: "https://github.com/WOSHIZHAZHA120",
			},
		],
		external_links: [
			{
				icon: "i-tdesign:usergroup-add",
				name: "个人群",
				href: "https://qm.qq.com/cgi-bin/qm/qr?k=EKq625P5qpas9-m5lVFTDnyCgR1I9yPw&authKey=zqbyY33MW7xTvSEBm+fqVv7lrq3EhV7UuVPrYnQZTal9dQpkD9XM3ViHSu2QnGb3",
				primary: true,
				extra: "自助入群, 但话题很杂 也许什么都聊（",
			},
			{
				icon: "i-mingcute:live-line",
				name: "直播间",
				href: "http://live.zhazha120.cn",
			},
			{
				icon: "i-ant-design:cloud-download-outlined",
				name: "云盘",
				href: "https://pan.zhazha120.cn",
			},
			{
				icon: "i-tabler:mail-cog",
				name: "邮局",
				href: "http://mail.zhazha120.cn",
			},
		],
	},
});