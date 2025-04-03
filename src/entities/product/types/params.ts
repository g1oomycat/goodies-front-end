import { IParamsSort } from '@/shared/types/sort';

export enum EnumProductSortOptionPublic {
	POPULARITY = 'popularity',
	DISCOUNT_AMOUNT = 'discountAmount',
	PRICE_ASC = 'priceAsc',
	PRICE_DESC = 'priceDesc',
	NEW = 'new',
}
export enum EnumProductSortOptionAdmin {
	PURCHASE_COUNT = 'purchaseCount',
	DISCOUNT_AMOUNT = 'discountAmount',
	PRICE_ASC = 'priceAsc',
	PRICE_DESC = 'priceDesc',
	NEW = 'new',
	STOCK = 'stock',
	ORDERS_COUNT = 'ordersCount',
}
export type IProductSort =
	| 'stock'
	| 'price'
	| 'purchaseCount'
	| 'createdAt'
	| 'updatedAt'
	| 'ordersCount'
	| 'name'
	| 'percentageChange';

export enum EnumProductSort {
	STOCK = 'stock',
	NAME = 'name',
	PRICE = 'price',
	PURCHASE_COUNT = 'purchaseCount',
	CREATED_AT = 'createdAt',
	UPDATED_AT = 'updatedAt',
	PERCENT_CHANGE = 'percentageChange',
	ORDERS_COUNT = 'ordersCount',
}

export interface IProductsParams {
	name?: string;
	categoryId?: string;
	page?: number;
	limit?: number;
	sortBy?: IProductSort;
	sort?: IParamsSort;
	isLowStock?: boolean;
}
