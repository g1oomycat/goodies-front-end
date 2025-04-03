import { handleAxiosError } from '@/shared/lib/handle-axios-error';
import { useMutation } from '@tanstack/react-query';
import { authService } from '../api/public';

export function logoutUser(isAdmin: boolean = true) {
	// Добавление в избранное
	return useMutation({
		mutationKey: ['logout-user'],
		mutationFn: () => authService.logout(),

		onError: error => {
			handleAxiosError(error, 'выходе из аккаунта', isAdmin);
		},
	});
}
