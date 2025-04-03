import { axiosWithAuth } from '@/shared/api/interceptors';
import { IBulkResponse } from '@/shared/api/types/root.types';
import { revalidateCategory } from '../lib';
import {
	ICategoriesCreate,
	ICategoriesResponse,
	ICategoriesUpdate,
} from '../types/api';

class AdminCategoriesService {
	private BASE_URL = 'admin/categories';

	async getCategory(id: string) {
		const response = await axiosWithAuth.get<ICategoriesResponse>(
			`${this.BASE_URL}/${id}`
		);
		return response.data;
	}

	async createCategory(data: ICategoriesCreate) {
		const response = await axiosWithAuth.post<ICategoriesResponse>(
			this.BASE_URL,
			data
		);
		await revalidateCategory();
		return response.data;
	}

	async updateCategory(id: string, data: ICategoriesUpdate) {
		const response = await axiosWithAuth.put<ICategoriesResponse>(
			`${this.BASE_URL}/${id}`,
			data
		);
		revalidateCategory();
		return response.data;
	}

	async deleteCategory(id: string) {
		const response = await axiosWithAuth.delete<ICategoriesResponse>(
			`${this.BASE_URL}/${id}`
		);
		revalidateCategory();
		return response.data;
	}
	async deleteBulk(ids: string[]) {
		const response = await axiosWithAuth.delete<IBulkResponse>(
			`${this.BASE_URL}/bulk`,
			{
				data: { ids }, // data должно быть внутри объекта конфигурации
			}
		);
		revalidateCategory();
		return response.data;
	}
}

export const adminCategoriesService = new AdminCategoriesService();
