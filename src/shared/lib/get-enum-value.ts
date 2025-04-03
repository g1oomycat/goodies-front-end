export const getEnumValue = <T extends Record<string, string | number>>(
	enumObj: T,
	value: any
): T[keyof T] | undefined => {
	return Object.values(enumObj).includes(value)
		? (value as T[keyof T])
		: undefined;
};
