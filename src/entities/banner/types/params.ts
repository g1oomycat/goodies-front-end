import { IParamsSort } from '@/shared/types/sort';

export type IBannerSort =
	| 'title'
	| 'position'
	| 'updatedAt'
	| 'createdAt'
	| 'startDate'
	| 'endDate';

export enum EnumBannerSort {
	TITLE = 'title',
	POSITION = 'position',
	START_DATE = 'startDate',
	END_DATE = 'endDate',
	UPDATED_AT = 'updatedAt',
	CREATED_AT = 'createdAt',
}
export interface IBannerParams {
	title?: string;
	isActive?: boolean;
	page?: number;
	limit?: number;
	sortBy?: IBannerSort;
	sort?: IParamsSort;
}
