function Pluralize(one: string, few: string, many: string) {
	return function (number: number) {
		const mod10 = number % 10;
		const mod100 = number % 100;

		if (mod10 === 1 && mod100 !== 11) {
			return `${number} ${one}`; // Например, "1 акция"
		} else if (mod10 >= 2 && mod10 <= 4 && !(mod100 >= 12 && mod100 <= 14)) {
			return `${number} ${few}`; // Например, "2 акции"
		} else {
			return `${number} ${many}`; // Например, "5 акций"
		}
	};
}

const productPluralize = Pluralize('товар', 'товара', 'товаров');
const promotionPluralize = Pluralize('акция', 'акции', 'акций');
const orderPluralize = Pluralize('заказ', 'заказа', 'заказов');

export { orderPluralize, productPluralize, promotionPluralize };
