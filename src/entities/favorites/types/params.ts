import { EnumParamsSort } from '@/shared/types/sort';

export enum EnumFavoriteSortOption {
	DATE_OF_ADDING = 'dateOfAdding',
	DISCOUNT_AMOUNT = 'discountAmount',
	PRICE_ASC = 'priceAsc',
	PRICE_DESC = 'priceDesc',
}

export type IFavoriteSort =
	| 'price'
	| 'purchaseCount'
	| 'createdAt'
	| 'percentageChange';

export enum EnumFavoriteSort {
	PRICE = 'price',
	PURCHASE_COUNT = 'purchaseCount',
	CREATED_AT = 'createdAt',
	PERCENT_CHANGE = 'percentageChange',
}

export interface IFavoritesParams {
	page?: number;
	limit?: number;
	sortBy?: IFavoriteSort;
	sort?: EnumParamsSort;
}
