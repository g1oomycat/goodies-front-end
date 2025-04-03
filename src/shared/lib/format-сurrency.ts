export function formatCurrency(amount?: number): string {
	if (amount === undefined || amount === null) {
		return '';
	}

	return amount.toLocaleString('ru-RU') + ' ₸';
}

export function formatPercentage(amount?: number): string {
	if (amount === undefined || amount === null) {
		return '';
	}

	return `${amount.toLocaleString('ru-RU', {
		minimumFractionDigits: 0,
		maximumFractionDigits: 2,
	})}%`;
}
