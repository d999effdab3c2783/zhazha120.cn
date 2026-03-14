export const createDate = (year: number, month: number, day: number) => {
	return new Date(year, month - 1, day)
}

export const formatDate = (value: string) => {
	const date = new Date(value)

	if ( date.getHours() <= 0 && date.getMinutes() <= 0 && date.getSeconds() <= 0 ) {
		return date.toLocaleDateString()
	}

	return date.toLocaleString()
}