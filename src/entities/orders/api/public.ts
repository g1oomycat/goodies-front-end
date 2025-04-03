import { axiosWithAuth } from '@/shared/api/interceptors';
import { buildUrlParams } from '@/shared/lib/build-url-params';
import {
	IGetAllOrdersResponse,
	IOrderParams,
	IOrdersCreate,
	IOrdersResponse,
} from '../types';

class OrdersService {
	private BASE_URL = 'orders';

	async getOrders(params: IOrderParams) {
		const response = await axiosWithAuth.get<IGetAllOrdersResponse>(
			this.BASE_URL,
			{
				params: buildUrlParams(params),
			}
		);
		return response.data;
	}

	async getOrderByPublicId(publicId: string) {
		const response = await axiosWithAuth.get<IOrdersResponse>(
			`${this.BASE_URL}/${publicId}`
		);
		return response.data;
	}

	async createOrder(data: IOrdersCreate) {
		const response = await axiosWithAuth.post<IOrdersResponse>(
			this.BASE_URL,
			data
		);
		return response.data;
	}
}

export const ordersService = new OrdersService();
