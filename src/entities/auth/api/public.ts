import { axiosClassic } from '@/shared/api/interceptors';
import {
	removeFromStorage,
	saveTokenStorage,
} from '@/shared/config/auth-token/service';
import { IAuthForm, IAuthResponse } from '../types';

class AuthService {
	private BASE_URL = '/auth/';

	async main(type: 'login' | 'register', data: IAuthForm) {
		const response = await axiosClassic.post<IAuthResponse>(
			this.BASE_URL + type,
			data
		);
		console.log(response.data);

		if (response.data.accessToken)
			saveTokenStorage(response.data.accessToken, response.data.user.role);

		return response.data;
	}

	async getNewTokens() {
		const response = await axiosClassic.post<IAuthResponse>(
			this.BASE_URL + 'login/access-token'
		);
		console.log(response.data);
		if (response.data.accessToken)
			saveTokenStorage(response.data.accessToken, response.data.user.role);

		return response.data;
	}

	async logout() {
		const response = await axiosClassic.post<boolean>(this.BASE_URL + 'logout');

		if (response.data) removeFromStorage();

		return response.data;
	}
}

export const authService = new AuthService();
