import { IBannerCreate } from '../api';

export type IBannerForm = Omit<
	IBannerCreate,
	'imageSM' | 'imageLG' | 'imageMD' | 'position'
> & {
	imageLG: { id: string; file?: File }[];
	imageMD: { id: string; file?: File }[];
	imageSM: { id: string; file?: File }[];
	position?: string;
};
