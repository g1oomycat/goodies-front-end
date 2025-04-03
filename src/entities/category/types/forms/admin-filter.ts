import { ICategoryParams } from '../params';

export type IFilterCategories = Omit<
	ICategoryParams,
	'page' | 'limit' | 'sort' | 'sortBy'
>;
