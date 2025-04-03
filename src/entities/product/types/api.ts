import { ICategoriesResponse } from '@/entities/category';
import { IReviewsResponse } from '@/shared/api/modules/reviews/types';
import { IBase, IGetAllBase } from '@/shared/api/types/root.types';

export interface IProductAttributesCreate {
	categoryAttributeId: string;
	value: string;
	title: string;
}
export interface IProductAttributesResponse
	extends IBase,
		IProductAttributesCreate {
	productId: string;
}

export interface IProductsCreate {
	name: string;
	description: string;
	stock: number;
	price: number;
	categoryId: string;
	images: string[];
	attributes: IProductAttributesCreate[];
}

export interface IProductsUpdate extends Partial<IProductsCreate> {}

export interface IProductsResponse
	extends IBase,
		Required<Omit<IProductsUpdate, 'attributes'>> {
	slug: string;
	discount: number;
	purchaseCount: number;
	ordersCount: number;
	oldPrice?: number;
	updatedPriceAt?: string;
	percentageChange?: number;
	category: ICategoriesResponse;
	reviews?: IReviewsResponse[];
	attributes?: IProductAttributesResponse[];
}

export interface IGetAllProductsResponse extends IGetAllBase {
	result: IProductsResponse[]; // Используем существующий тип для продукта
}
