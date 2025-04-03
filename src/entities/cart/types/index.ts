import { IOrdersResponse } from '@/entities/orders';

export interface ICartItemsCreate {
	productId: string;
}
export interface ICartItemsUpdate extends ICartItemsCreate {
	quantity: number;
}
export interface ICartItemsDelete extends ICartItemsCreate {}

export interface ICartResponse {
	adjusted: boolean;
	totalQuantity: number;
	total: number;
	discount: number;
	originalTotal: number;
	updatesList: string[];
	deletesList: string[];
	result: IOrdersResponse;
}
