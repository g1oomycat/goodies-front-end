import { axiosWithAuth } from '@/shared/api/interceptors';
import { buildUrlParams } from '@/shared/lib/build-url-params';
import { IGetAllPriceHistoryResponse, IPriceHistoryResponse } from '../types';
import { IPriceHistoryParams } from '../types/params';

class AdminPriceHistoryService {
	private BASE_URL = 'admin/price-history';

	async getAll(params: IPriceHistoryParams) {
		const response = await axiosWithAuth.get<IGetAllPriceHistoryResponse>(
			this.BASE_URL,
			{
				params: buildUrlParams(params),
			}
		);
		return response.data;
	}
	async getOne(id: string) {
		const response = await axiosWithAuth.get<IPriceHistoryResponse>(
			`${this.BASE_URL}/${id}`
		);
		return response.data;
	}
}

export const adminPriceHistoryService = new AdminPriceHistoryService();
