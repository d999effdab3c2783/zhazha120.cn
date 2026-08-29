export type BaseOrganization = {
	readonly name: string;
};

export type GithubOrganization = BaseOrganization & {
	readonly type: 'github';
	readonly avatar: string;
	readonly owner: string;
};

export type CustomOrganization = BaseOrganization & {
	readonly type: 'custom';
	readonly href: string;
};

export type Organization = GithubOrganization | CustomOrganization;