import { axiosWithAuth } from '@/shared/api/interceptors';
import { IBulkResponse } from '@/shared/api/types/root.types';
import { revalidateBanner } from '../lib';
import { IBannerCreate, IBannerResponse, IBannerUpdate } from '../types';

class AdminBannerService {
	private BASE_URL = 'admin/banners';

	async getBanner(id: string) {
		const response = await axiosWithAuth.get<IBannerResponse>(
			`${this.BASE_URL}/${id}`
		);
		return response.data;
	}

	async createBanner(data: IBannerCreate) {
		const response = await axiosWithAuth.post<IBannerResponse>(
			this.BASE_URL,
			data
		);
		await revalidateBanner();
		return response.data;
	}

	async updateBanner(id: string, data: IBannerUpdate) {
		const response = await axiosWithAuth.put<IBannerResponse>(
			`${this.BASE_URL}/${id}`,
			data
		);
		await revalidateBanner();
		return response.data;
	}

	async deleteBanner(id: string) {
		const response = await axiosWithAuth.delete<IBannerResponse>(
			`${this.BASE_URL}/${id}`
		);
		await revalidateBanner();
		return response.data;
	}
	async deleteBulk(ids: string[]) {
		const response = await axiosWithAuth.delete<IBulkResponse>(
			`${this.BASE_URL}/bulk`,
			{
				data: { ids }, // data должно быть внутри объекта конфигурации
			}
		);
		await revalidateBanner();
		return response.data;
	}
}

export const adminBannerService = new AdminBannerService();
