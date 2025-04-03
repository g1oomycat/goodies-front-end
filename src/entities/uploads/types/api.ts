export type IEntityType =
	| 'products'
	| 'categories'
	| 'inst'
	| 'promo'
	| 'bannersLG'
	| 'bannersMD'
	| 'bannersSM';

export type IUploadsResponse = {
	url: string;
	fileName: string;
}[];
