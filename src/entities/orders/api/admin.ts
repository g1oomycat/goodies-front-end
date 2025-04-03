import { axiosWithAuth } from '@/shared/api/interceptors';
import { buildUrlParams } from '@/shared/lib/build-url-params';
import {
	IGetAllOrdersResponse,
	IOrderParams,
	IOrdersCreateByAdmin,
	IOrdersResponse,
	IOrdersUpdateByAdmin,
} from '../types';

class AdminOrdersService {
	private BASE_URL = 'admin/orders';

	async getAll(params: IOrderParams) {
		const response = await axiosWithAuth.get<IGetAllOrdersResponse>(
			this.BASE_URL,
			{
				params: buildUrlParams(params),
			}
		);
		return response.data;
	}

	async getOne(id: string) {
		const response = await axiosWithAuth.get<IOrdersResponse>(
			`${this.BASE_URL}/${id}`
		);
		return response.data;
	}
	async createOrder(data: IOrdersCreateByAdmin) {
		const response = await axiosWithAuth.post<IOrdersResponse>(
			`${this.BASE_URL}`,
			data
		);

		return response.data;
	}
	async updateOrder(id: string, data: IOrdersUpdateByAdmin) {
		const response = await axiosWithAuth.put<IOrdersResponse>(
			`${this.BASE_URL}/${id}`,
			data
		);
		return response.data;
	}
	// async delete(id: string) {
	// 	const response = await axiosWithAuth.delete<IOrdersResponse>(
	// 		`${this.BASE_URL}/${id}`
	// 	);
	// 	return response.data;
	// }
}

export const adminOrdersService = new AdminOrdersService();
