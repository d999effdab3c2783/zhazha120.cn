export const createDate = (year: number, month: number, day: number): Date => {
	const date = new Date(year, month - 1, day);

	date.setHours(0, 0, 0, 0);

	return date;
};