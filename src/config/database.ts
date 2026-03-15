export default {
	reference_prefix: '*:',
	compression_format: 'deflate-raw' as CompressionFormat | null,
	image_quality: 1,
	file_suffix: '.zhazha120-db',
	production_database_url: '/v4.zhazha120-db',
	max_updater_skip_count: 10
} as const