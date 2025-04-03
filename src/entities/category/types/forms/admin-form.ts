import { ICategoriesCreate } from '../api';

export type ICategoriesForm = Omit<
	ICategoriesCreate,
	'image' | 'numberSort'
> & {
	image: { id: string; file?: File }[];
	numberSort?: string;
};
