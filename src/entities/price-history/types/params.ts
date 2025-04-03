import { IParamsSort } from '@/shared/types/sort';

export enum EnumPriceHistorySort {
	CREATED_AT = 'createdAt',
	UPDATED_AT = 'updatedAt',
	NAME = 'name',
	OLD_PRICE = 'oldPrice',
	NEW_PRICE = 'newPrice',
	PERCENTAGE_CHANGE = 'percentageChange',
}

export type IPriceHistorySort =
	| 'oldPrice'
	| 'newPrice'
	| 'createdAt'
	| 'updatedAt'
	| 'name'
	| 'percentageChange';

export interface IPriceHistoryParams {
	name?: string;
	productId?: string;
	page?: number;
	limit?: number;
	sortBy?: IPriceHistorySort;
	sort?: IParamsSort;
}
