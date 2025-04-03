import { IOrderItemResponse } from '@/entities/orders';
import { axiosWithAuth } from '@/shared/api/interceptors';
import {
	ICartItemsCreate,
	ICartItemsDelete,
	ICartItemsUpdate,
	ICartResponse,
} from '../types';

class CartService {
	private BASE_URL = 'cart';

	async getCart() {
		const response = await axiosWithAuth.get<ICartResponse>(`${this.BASE_URL}`);
		return response.data;
	}

	async addProduct(data: ICartItemsCreate) {
		const response = await axiosWithAuth.post<IOrderItemResponse>(
			`${this.BASE_URL}/add-product`,
			data
		);
		return response.data;
	}
	async updateProduct(data: ICartItemsUpdate) {
		const response = await axiosWithAuth.put<IOrderItemResponse>(
			`${this.BASE_URL}/update-product`,
			data
		);
		return response.data;
	}

	async deleteProduct(data: ICartItemsDelete) {
		console.log(data, 'data');

		const response = await axiosWithAuth.post<IOrderItemResponse>(
			`${this.BASE_URL}/delete-product`,
			data
		);
		return response.data;
	}
}

export const cartService = new CartService();
