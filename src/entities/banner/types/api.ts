import { IBase, IGetAllBase } from '@/shared/api/types/root.types';

export interface IBannerCreate {
	title: string;
	description?: string;
	link?: string;
	imageLG: string;
	imageMD: string;
	imageSM: string;
	textColor?: string;
	buttonBG?: string;
	buttonTextColor?: string;
	startDate?: string;
	endDate?: string;
	isActive?: boolean;
	position?: number;
}
export interface IBannerUpdate extends Partial<IBannerCreate> {}

export interface IBannerResponse
	extends Required<
			Omit<IBannerUpdate, 'description' | 'link' | 'startDate' | 'endDate'>
		>,
		IBase {
	description?: string;
	link?: string;
	startDate?: string;
	endDate?: string;
}

export interface IGetAllBannerResponse extends IGetAllBase {
	result: IBannerResponse[];
}
