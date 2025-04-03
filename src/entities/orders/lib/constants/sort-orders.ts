import { EnumParamsSort } from '@/shared/types/sort';
import { EnumOrderSortOptionPublic, EnumOrdersSort } from '../../types';

type SortOptionPublic = { sort: EnumOrderSortOptionPublic; label: string };

export const sortOptionsOrdersPublic: SortOptionPublic[] = [
	{ sort: EnumOrderSortOptionPublic.NEW, label: 'По новизне' },
	{ sort: EnumOrderSortOptionPublic.TOTAL_ASC, label: 'Сначала дешевле' },
	{ sort: EnumOrderSortOptionPublic.TOTAL_DESC, label: 'Сначала дороже' },
];

export const sortMapOrders: Record<
	EnumOrderSortOptionPublic,
	{ sortBy: EnumOrdersSort; sort: EnumParamsSort }
> = {
	[EnumOrderSortOptionPublic.TOTAL_ASC]: {
		sortBy: EnumOrdersSort.TOTAL,
		sort: EnumParamsSort.ASC,
	},
	[EnumOrderSortOptionPublic.TOTAL_DESC]: {
		sortBy: EnumOrdersSort.TOTAL,
		sort: EnumParamsSort.DESC,
	},
	[EnumOrderSortOptionPublic.NEW]: {
		sortBy: EnumOrdersSort.CREATED_AT,
		sort: EnumParamsSort.DESC,
	},
};
