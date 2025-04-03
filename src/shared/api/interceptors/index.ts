import { authService } from '@/entities/auth';
import axios, { type CreateAxiosDefaults } from 'axios';
import {
	getAccessToken,
	removeFromStorage,
} from '../../config/auth-token/service';
import { errorCatch } from './error';

const options: CreateAxiosDefaults = {
	baseURL: process.env.NEXT_PUBLIC_BASE_URL,
	headers: {
		'Content-Type': 'application/json',
	},
	withCredentials: true, // Включаем передачу куки
};

const axiosClassic = axios.create(options);
const axiosWithAuth = axios.create(options);

// Логируем все запросы
axiosWithAuth.interceptors.request.use(config => {
	const accessToken = getAccessToken();

	if (config?.headers && accessToken) {
		config.headers.Authorization = `Bearer ${accessToken}`;
	}

	return config;
});

// Логируем все ответы и ошибки
axiosWithAuth.interceptors.response.use(
	response => {
		return response;
	},
	async error => {
		const originalRequest = error.config;

		if (
			error?.response?.status === 401 ||
			errorCatch(error) === 'jwt expired' ||
			(errorCatch(error) === 'jwt must be provided' &&
				error.config &&
				!error.config._isRetry)
		) {
			originalRequest._isRetry = true;

			try {
				const newTokens = await authService.getNewTokens();

				// Обновляем заголовок и повторяем запрос
				originalRequest.headers.Authorization = `Bearer ${newTokens.accessToken}`;
				return axiosWithAuth.request(originalRequest);
			} catch (error) {
				if (errorCatch(error) === 'jwt expired') {
					removeFromStorage();
				}
			}
		}

		throw error;
	}
);

export { axiosClassic, axiosWithAuth };
