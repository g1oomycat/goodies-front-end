import { showToastSuccess } from '@/features/show-custom-toaster/model';
import { handleAxiosError } from '@/shared/lib/handle-axios-error';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { authService } from '../api/public';
import { IAuthForm } from '../types';

export const authUser = (method: 'login' | 'register') => {
	const authMeta = { login: 'авторизации', register: 'регистрации' };
	const queryClient = useQueryClient();
	return useMutation({
		mutationKey: ['auth', method],
		mutationFn: (data: IAuthForm) => authService.main(method, data),
		onSuccess() {
			queryClient.invalidateQueries({ queryKey: ['get-user-self'] });
			showToastSuccess({
				message:
					method === 'login'
						? 'Добро пожаловать обратно!'
						: 'Аккаунт создан успешно! ',
			});
		},
		onError(error) {
			handleAxiosError(error, authMeta[method]);
		},
	});
};
