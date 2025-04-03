import { axiosWithAuth } from '@/shared/api/interceptors';
import { IBulkResponse } from '@/shared/api/types/root.types';
import { buildUrlParams } from '@/shared/lib/build-url-params';
import {
	IGetAllUsersResponse,
	IUsersParams,
	IUsersResponse,
	IUsersUpdateByAdmin,
} from '../types';
import { IUsersCreateByAdmin } from '../types/api';

class AdminUsersService {
	private BASE_URL = 'admin/users';

	async getUsers(params: IUsersParams) {
		const response = await axiosWithAuth.get<IGetAllUsersResponse>(
			this.BASE_URL,
			{
				params: buildUrlParams(params),
			}
		);
		return response.data;
	}

	async getUser(id: string) {
		const response = await axiosWithAuth.get<IUsersResponse>(
			`${this.BASE_URL}/${id}`
		);

		return response.data;
	}

	async createUser(data: IUsersCreateByAdmin) {
		const response = await axiosWithAuth.post<IUsersResponse>(
			`${this.BASE_URL}`,
			data
		);

		return response.data;
	}

	async updateUser(id: string, data: IUsersUpdateByAdmin) {
		const response = await axiosWithAuth.put<IUsersResponse>(
			`${this.BASE_URL}/${id}`,
			data
		);
		return response.data;
	}

	async deleteUser(id: string) {
		const response = await axiosWithAuth.delete<IUsersResponse>(
			`${this.BASE_URL}/${id}`
		);
		return response;
	}
	async deleteBulk(ids: string[]) {
		const response = await axiosWithAuth.delete<IBulkResponse>(
			`${this.BASE_URL}/bulk`,
			{
				data: { ids }, // data должно быть внутри объекта конфигурации
			}
		);
		return response.data;
	}
}

export const adminUsersService = new AdminUsersService();
