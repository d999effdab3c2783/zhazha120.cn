interface ViteTypeOptions {
	readonly strictImportMetaEnv: unknown
}

interface ImportMetaEnv {
	readonly PUBLIC__DEFAULT_MEMBER: string
}

interface ImportMeta {
	readonly env: ImportMetaEnv
}