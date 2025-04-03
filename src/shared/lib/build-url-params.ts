function booleanToString(value: boolean): 'y' | 'n' {
	return value ? 'y' : 'n';
}

export function buildUrlParams(
	params: Record<string, any>
): Record<string, string> {
	return Object.entries(params).reduce((acc, [key, value]) => {
		if (value !== undefined && value !== null) {
			if (typeof value === 'boolean') {
				acc[key] = booleanToString(value); // Преобразуем boolean в 'y' или 'n'
			} else {
				acc[key] = String(value);
			}
		}
		return acc;
	}, {} as Record<string, string>);
}
