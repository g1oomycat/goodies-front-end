import { IParamsSort } from '@/shared/types/sort';

export enum EnumSortCategories {
	COUNT_PRODUCT = 'countProduct',
	NUMBER_SORT = 'numberSort',
	CREATED_AT = 'createdAt',
}
export enum EnumCategoriesSort {
	COUNT_PRODUCT = 'countProduct',
	NUMBER_SORT = 'numberSort',
	CREATED_AT = 'createdAt',
	UPDATED_AT = 'updatedAt',
	NAME = 'name',
}
export type ICategoriesSort =
	| 'countProduct'
	| 'numberSort'
	| 'name'
	| 'createdAt'
	| 'updatedAt';

export interface ICategoryParams {
	name?: string;
	sortBy?: ICategoriesSort;
	sort?: IParamsSort;
	limit?: number;
	page?: number;
}
