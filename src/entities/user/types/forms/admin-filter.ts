import { IUsersParams } from '../params';

export type IFilterUsers = Omit<
	IUsersParams,
	'page' | 'limit' | 'sort' | 'sortBy'
>;
