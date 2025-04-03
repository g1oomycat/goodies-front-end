import { IParamsSort } from '@/shared/types/sort';

export enum EnumReviewsInstSort {
	NAME = 'name',
	NICK = 'nick',
	POSITION = 'position',
	CREATED_AT = 'createdAt',
	UPDATED_AT = 'updatedAt',
}
export type IReviewsInstSort =
	| 'name'
	| 'nick'
	| 'position'
	| 'createdAt'
	| 'updatedAt';

export interface IReviewsInstParams {
	name?: string;
	nick?: string;
	isActive?: boolean;
	page?: number;
	limit?: number;
	sortBy?: IReviewsInstSort;
	sort?: IParamsSort;
}
