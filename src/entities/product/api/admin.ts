import { axiosWithAuth } from '@/shared/api/interceptors';
import { IBulkResponse } from '@/shared/api/types/root.types';

import { revalidateProduct } from '../lib';
import { IProductsCreate, IProductsResponse, IProductsUpdate } from '../types';

class AdminProductsService {
	private BASE_URL = 'admin/products';

	async getProduct(id: string) {
		const response = await axiosWithAuth.get<IProductsResponse>(
			`${this.BASE_URL}/${id}`
		);
		return response.data;
	}

	async createProduct(data: IProductsCreate) {
		const response = await axiosWithAuth.post<IProductsResponse>(
			this.BASE_URL,
			data
		);
		await revalidateProduct();
		return response.data;
	}

	async updateProduct(id: string, data: IProductsUpdate) {
		const response = await axiosWithAuth.put<IProductsResponse>(
			`${this.BASE_URL}/${id}`,
			data
		);

		await revalidateProduct(response.data.slug);
		return response.data;
	}

	async deleteProduct(id: string) {
		const response = await axiosWithAuth.delete<IProductsResponse>(
			`${this.BASE_URL}/${id}`
		);
		await revalidateProduct(response.data.slug);
		return response.data;
	}
	async deleteBulk(ids: string[]) {
		const response = await axiosWithAuth.delete<IBulkResponse>(
			`${this.BASE_URL}/bulk`,
			{
				data: { ids }, // data должно быть внутри объекта конфигурации
			}
		);
		await revalidateProduct();
		return response.data;
	}
}

export const adminProductsService = new AdminProductsService();
