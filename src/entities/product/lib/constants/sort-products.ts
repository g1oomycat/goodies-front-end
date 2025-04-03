import { EnumParamsSort } from '@/shared/types/sort';
import { EnumProductSort, EnumProductSortOptionPublic } from '../../types';

type SortOptionPublic = { sort: EnumProductSortOptionPublic; label: string };

export const sortOptionsProductsPublic: SortOptionPublic[] = [
	{ sort: EnumProductSortOptionPublic.POPULARITY, label: 'По популярности' },
	{
		sort: EnumProductSortOptionPublic.DISCOUNT_AMOUNT,
		label: 'По размеру скидки',
	},
	{ sort: EnumProductSortOptionPublic.NEW, label: 'По новизне' },
	{ sort: EnumProductSortOptionPublic.PRICE_ASC, label: 'Сначала дешевле' },
	{ sort: EnumProductSortOptionPublic.PRICE_DESC, label: 'Сначала дороже' },
];

export const sortMapProducts: Record<
	EnumProductSortOptionPublic,
	{ sortBy: EnumProductSort; sort: EnumParamsSort }
> = {
	[EnumProductSortOptionPublic.POPULARITY]: {
		sortBy: EnumProductSort.PURCHASE_COUNT,
		sort: EnumParamsSort.DESC,
	},
	[EnumProductSortOptionPublic.DISCOUNT_AMOUNT]: {
		sortBy: EnumProductSort.PERCENT_CHANGE,
		sort: EnumParamsSort.ASC,
	},
	[EnumProductSortOptionPublic.PRICE_ASC]: {
		sortBy: EnumProductSort.PRICE,
		sort: EnumParamsSort.ASC,
	},
	[EnumProductSortOptionPublic.PRICE_DESC]: {
		sortBy: EnumProductSort.PRICE,
		sort: EnumParamsSort.DESC,
	},
	[EnumProductSortOptionPublic.NEW]: {
		sortBy: EnumProductSort.CREATED_AT,
		sort: EnumParamsSort.DESC,
	},
};
