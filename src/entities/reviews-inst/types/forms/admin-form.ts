import { IReviewsInstCreate } from '../api';

export type IReviewsInstForm = Omit<
	IReviewsInstCreate,
	'image' | 'position'
> & {
	image: { id: string; file?: File }[];
	position?: string;
};
