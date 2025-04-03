import { IProductsResponse } from '@/entities/product';
import { IBase, IGetAllBase } from '@/shared/api/types/root.types';

export interface IPriceHistoryResponse extends IBase {
	oldPrice: number;
	newPrice: number;
	percentageChange: number;
	productId: string;
	product: IProductsResponse;
}
export interface IGetAllPriceHistoryResponse extends IGetAllBase {
	result: IPriceHistoryResponse[]; // Используем существующий тип для продукта
}
