import { axiosClassic } from '@/shared/api/interceptors';
import { buildUrlParams } from '@/shared/lib/build-url-params';
import {
	ICategoriesResponse,
	ICategoryParams,
	IGetAllCategoriesResponse,
} from '../types';

class CategoriesService {
	private BASE_URL = 'categories';

	async getCategories(params: ICategoryParams) {
		const response = await axiosClassic.get<IGetAllCategoriesResponse>(
			this.BASE_URL,
			{
				params: buildUrlParams(params),
			}
		);
		return response.data;
	}

	async getCategoryWithSlug(slug: string) {
		const response = await axiosClassic.get<ICategoriesResponse>(
			`${this.BASE_URL}/${slug}`
		);

		return response.data;
	}
}

export const categoriesService = new CategoriesService();
