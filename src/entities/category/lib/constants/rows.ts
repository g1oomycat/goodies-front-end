import { formatDateTimeLong } from '@/shared/lib/format-date';
import { ICategoriesResponse } from '../../types';
export const categoriesRows = (data?: ICategoriesResponse[]) => {
	if (!data) {
		return null;
	}
	return data.map(category => ({
		id: category.id,
		name: category.name,
		numberSort: category.numberSort,
		image: category.image,
		countProduct: category._count?.products ?? 0,
		updatedAt: formatDateTimeLong(category.updatedAt),
	}));
};
