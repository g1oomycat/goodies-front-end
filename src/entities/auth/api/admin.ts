import { axiosClassic } from '@/shared/api/interceptors';
import { saveTokenStorage } from '@/shared/config/auth-token/service';
import { IAuthForm, IAuthResponse } from '../types';

class AdminAuthService {
	private BASE_URL = 'admin/auth/';

	async main(data: IAuthForm) {
		const response = await axiosClassic.post<IAuthResponse>(
			this.BASE_URL + 'login',
			data
		);
		console.log(response.data);

		if (response.data.accessToken)
			saveTokenStorage(response.data.accessToken, response.data.user.role);

		return response.data;
	}
}

export const adminAuthService = new AdminAuthService();
