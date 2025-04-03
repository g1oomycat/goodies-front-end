import { handleAxiosError } from '@/shared/lib/handle-axios-error';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { cartService } from '../api';
import { ICartItemsDelete } from '../types';

export function useCartDelProduct() {
	const queryClient = useQueryClient();

	// Добавление в избранное

	return useMutation({
		mutationKey: ['cartDelProduct'],
		mutationFn: (data: ICartItemsDelete) => cartService.deleteProduct(data),

		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['cart'] });
		},
		onError: error => {
			handleAxiosError(error, 'удалении из корзины', false);
		},
	});
}
