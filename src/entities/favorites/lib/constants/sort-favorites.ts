import { EnumParamsSort } from '@/shared/types/sort';
import { EnumFavoriteSort, EnumFavoriteSortOption } from '../../types';

type SortOptionPublic = { sort: EnumFavoriteSortOption; label: string };

export const sortOptionsFavorites: SortOptionPublic[] = [
	{ sort: EnumFavoriteSortOption.DATE_OF_ADDING, label: 'По дате добавления' },
	{ sort: EnumFavoriteSortOption.DISCOUNT_AMOUNT, label: 'По размеру скидки' },
	{ sort: EnumFavoriteSortOption.PRICE_ASC, label: 'Сначала дешевле' },
	{ sort: EnumFavoriteSortOption.PRICE_DESC, label: 'Сначала дороже' },
];

export const sortMapFavorites: Record<
	EnumFavoriteSortOption,
	{ sortBy: EnumFavoriteSort; sort: EnumParamsSort }
> = {
	[EnumFavoriteSortOption.DATE_OF_ADDING]: {
		sortBy: EnumFavoriteSort.CREATED_AT,
		sort: EnumParamsSort.DESC,
	},
	[EnumFavoriteSortOption.DISCOUNT_AMOUNT]: {
		sortBy: EnumFavoriteSort.PERCENT_CHANGE,
		sort: EnumParamsSort.ASC,
	},
	[EnumFavoriteSortOption.PRICE_ASC]: {
		sortBy: EnumFavoriteSort.PRICE,
		sort: EnumParamsSort.ASC,
	},
	[EnumFavoriteSortOption.PRICE_DESC]: {
		sortBy: EnumFavoriteSort.PRICE,
		sort: EnumParamsSort.DESC,
	},
};
