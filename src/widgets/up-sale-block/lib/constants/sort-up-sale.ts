import { EnumProductSort } from '@/entities/product';
import { EnumParamsSort } from '@/shared/types/sort';
import { EnumUpSaleSort } from '../../types';

type SortOption = { sort: EnumUpSaleSort; label: string };

export const sortOptionsUpSale: SortOption[] = [
	{ sort: EnumUpSaleSort.POPULARITY, label: 'Хиты продаж' },
	{ sort: EnumUpSaleSort.DISCOUNT_AMOUNT, label: 'Лучшее предложение' },
	{ sort: EnumUpSaleSort.NEW, label: 'Каталог новинок' },
];

export const sortMapUpSale: Record<
	EnumUpSaleSort,
	{ sortBy: EnumProductSort; sort: EnumParamsSort }
> = {
	[EnumUpSaleSort.POPULARITY]: {
		sortBy: EnumProductSort.PURCHASE_COUNT,
		sort: EnumParamsSort.DESC,
	},
	[EnumUpSaleSort.DISCOUNT_AMOUNT]: {
		sortBy: EnumProductSort.PERCENT_CHANGE,
		sort: EnumParamsSort.ASC,
	},

	[EnumUpSaleSort.NEW]: {
		sortBy: EnumProductSort.CREATED_AT,
		sort: EnumParamsSort.DESC,
	},
};
