import { handleAxiosError } from '@/shared/lib/handle-axios-error';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { adminAuthService } from '../api';
import { IAuthForm } from '../types';

export const AdminAuthUser = () => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationKey: ['admin-auth'],
		mutationFn: (data: IAuthForm) => adminAuthService.main(data),
		onSuccess() {
			queryClient.invalidateQueries({ queryKey: ['get-user-self'] });
		},
		onError(error) {
			handleAxiosError(error, 'авторизации');
		},
	});
};
