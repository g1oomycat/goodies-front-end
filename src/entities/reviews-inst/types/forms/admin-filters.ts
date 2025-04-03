import { IReviewsInstParams } from '../params';

export type IFilterReviewsInst = Omit<
	IReviewsInstParams,
	'page' | 'sort' | 'limit' | 'sortBy'
>;
