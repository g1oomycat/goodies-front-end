import { formatDateTimeLong } from '@/shared/lib/format-date';
import { formatCurrency } from '@/shared/lib/format-сurrency';
import { IPriceHistoryResponse } from '../../types';

export const priceHistoryRows = (data?: IPriceHistoryResponse[]) => {
	if (!data) {
		return null;
	}
	return data.map(history => ({
		id: history.id,
		productId: history.productId,
		name: history.product.name,
		newPrice: formatCurrency(history.newPrice),
		oldPrice: formatCurrency(history.oldPrice),
		percentageChange: `${history.percentageChange}%`,
		image: history.product.images[0],
		createdAt: formatDateTimeLong(history.createdAt),
	}));
};
