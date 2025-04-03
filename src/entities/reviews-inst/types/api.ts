import { IBase, IGetAllBase } from '@/shared/api/types/root.types';

export interface IReviewsInstCreate {
	name: string;
	nick: string;
	image: string;
	isActive?: boolean;
	position?: number;
}
export interface IReviewsInstUpdate extends Partial<IReviewsInstCreate> {}

export interface IReviewsInstResponse
	extends Required<IBase & IReviewsInstUpdate> {}

export interface IGetAllReviewsInstResponse extends IGetAllBase {
	result: IReviewsInstResponse[];
}
