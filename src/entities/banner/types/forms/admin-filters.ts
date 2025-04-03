import { IBannerParams } from '../params';

export type IBannerFilter = Omit<
	IBannerParams,
	'page' | 'sort' | 'limit' | 'sortBy'
>;
