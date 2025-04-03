import { IProductsResponse } from '@/entities/product';
import { IBase, IGetAllBase } from '@/shared/api/types/root.types';

export interface IFavoritesCreate {
	productId: string;
}
export interface IFavoritesDelete extends IFavoritesCreate {}

export interface IFavoritesResponse extends IBase, IFavoritesCreate {
	userId: string;
	product: IProductsResponse;
}

export interface IGetAllFavoritesResponse extends IGetAllBase {
	result: IFavoritesResponse[];
}
