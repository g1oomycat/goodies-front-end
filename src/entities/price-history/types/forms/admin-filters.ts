import { IPriceHistoryParams } from '../params';

export type IFilterPriceHistory = Omit<
	IPriceHistoryParams,
	'page' | 'limit' | 'sort' | 'sortBy'
>;
