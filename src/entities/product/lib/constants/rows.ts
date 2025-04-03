import { formatDateTimeLong } from '@/shared/lib/format-date';
import { formatCurrency } from '@/shared/lib/format-сurrency';
import { IProductsResponse } from '../../types';
export const productsRows = (data?: IProductsResponse[]) => {
	if (!data) {
		return null;
	}
	return data.map(product => ({
		id: product.id,
		name: product.name,
		stock: product.stock,
		price: formatCurrency(product.price),
		cat: product.price,
		category: product.category.name,

		image: product.images[0],
		updatedAt: formatDateTimeLong(product.updatedAt),
	}));
};
