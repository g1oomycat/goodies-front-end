import { IOrderParams } from '../params';

export type IFilterOrders = Omit<
	IOrderParams,
	'page' | 'sort' | 'limit' | 'sortBy'
>;
