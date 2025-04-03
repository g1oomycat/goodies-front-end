import { IBase } from '../../types/root.types';

export interface IReviewsCreate {
	productId: string;
	rating: number;
	comment?: string;
}

export interface IReviewsResponse extends IBase {
	userId: string;
}

export interface IReviewsUpdate
	extends Omit<Partial<IReviewsCreate>, 'productId'> {}
