import { formatDateTimeLong } from '@/shared/lib/format-date';
import { IReviewsInstResponse } from '../../types';

export const reviewsInstRows = (data?: IReviewsInstResponse[]) => {
	if (!data) {
		return null;
	}
	return data.map(product => ({
		id: product.id,
		name: product.name,
		nick: product.nick,
		image: product.image,
		position: product.position,
		isActive: product.isActive,
		createdAt: formatDateTimeLong(product.createdAt),
	}));
};
