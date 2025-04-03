import { IProductsParams } from '../params';

export type IProductsFilter = Omit<
	IProductsParams,
	'page' | 'sort' | 'limit' | 'sortBy'
>;
