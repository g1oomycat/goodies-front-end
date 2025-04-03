import { axiosWithAuth } from '@/shared/api/interceptors';
import { IUsersResponse, IUsersUpdate } from '../types/api';

class UsersService {
	private BASE_URL = 'users';

	async getUserSelf() {
		const response = await axiosWithAuth.get<IUsersResponse>(this.BASE_URL);

		return response.data;
	}

	async updateUser(data: IUsersUpdate) {
		const response = await axiosWithAuth.put<IUsersResponse>(
			`${this.BASE_URL}`,
			data
		);
		return response.data;
	}

	async deleteUser() {
		const response = await axiosWithAuth.delete<IUsersResponse>(
			`${this.BASE_URL}`
		);
		return response.data;
	}
}

export const usersService = new UsersService();
