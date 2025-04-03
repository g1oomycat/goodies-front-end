import { formatDateTimeLong } from '@/shared/lib/format-date';
import { IBannerResponse } from '../../types';

export const bannerRows = (data?: IBannerResponse[]) => {
	if (!data) {
		return null;
	}
	return data.map(product => ({
		id: product.id,
		title: product.title,
		image: product.imageMD,
		position: product.position,
		isActive: product.isActive,
		startDate: formatDateTimeLong(product.startDate),
		endDate: formatDateTimeLong(product.endDate),
		createdAt: formatDateTimeLong(product.createdAt),
	}));
};
