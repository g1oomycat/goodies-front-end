import { axiosClassic } from '@/shared/api/interceptors';
import { buildUrlParams } from '@/shared/lib/build-url-params';
import {
	IGetAllProductsResponse,
	IProductsParams,
	IProductsResponse,
} from '../types';

class ProductsService {
	private BASE_URL = 'products';

	async getProducts(params: IProductsParams) {
		const response = await axiosClassic.get<IGetAllProductsResponse>(
			this.BASE_URL,
			{
				params: buildUrlParams(params),
			}
		);
		return response.data;
	}

	async getProductWithSlug(slug: string) {
		const response = await axiosClassic.get<IProductsResponse>(
			`${this.BASE_URL}/${slug}`
		);
		return response.data;
	}
}

export const productsService = new ProductsService();
