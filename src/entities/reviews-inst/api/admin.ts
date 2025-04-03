import { axiosWithAuth } from '@/shared/api/interceptors';
import { IBulkResponse } from '@/shared/api/types/root.types';
import { revalidateReviewsInst } from '../lib/revalidate';
import {
	IReviewsInstCreate,
	IReviewsInstResponse,
	IReviewsInstUpdate,
} from '../types';

class AdminReviewsInstService {
	private BASE_URL = 'admin/reviews-instagram';

	async getReviewsInst(id: string) {
		const response = await axiosWithAuth.get<IReviewsInstResponse>(
			`${this.BASE_URL}/${id}`
		);
		return response.data;
	}

	async createReviewsInst(data: IReviewsInstCreate) {
		const response = await axiosWithAuth.post<IReviewsInstResponse>(
			this.BASE_URL,
			data
		);
		await revalidateReviewsInst();
		return response.data;
	}

	async updateReviewsInst(id: string, data: IReviewsInstUpdate) {
		const response = await axiosWithAuth.put<IReviewsInstResponse>(
			`${this.BASE_URL}/${id}`,
			data
		);
		await revalidateReviewsInst();
		return response.data;
	}

	async deleteReviewsInst(id: string) {
		const response = await axiosWithAuth.delete<IReviewsInstResponse>(
			`${this.BASE_URL}/${id}`
		);
		await revalidateReviewsInst();
		return response.data;
	}
	async deleteBulk(ids: string[]) {
		const response = await axiosWithAuth.delete<IBulkResponse>(
			`${this.BASE_URL}/bulk`,
			{
				data: { ids }, // data должно быть внутри объекта конфигурации
			}
		);
		await revalidateReviewsInst();
		return response.data;
	}
}

export const adminReviewsInstService = new AdminReviewsInstService();
