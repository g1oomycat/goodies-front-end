import { handleAxiosError } from '@/shared/lib/handle-axios-error';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { cartService } from '../api';
import { ICartItemsUpdate } from '../types';

export function useCartUpdateProduct() {
	const queryClient = useQueryClient();

	// Добавление в избранное
	const {
		mutate: updateCart,
		isPending: isAdding,
		error: CartError,
	} = useMutation({
		mutationKey: ['cartUpdateProduct'],
		mutationFn: (data: ICartItemsUpdate) => cartService.updateProduct(data),

		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['cart'] });
		},

		onError: error => {
			// Если запрос провалился, откатываем к предыдущему состоянию
			handleAxiosError(error, 'обновление корзины', false);
		},
	});

	return { updateCart, isAdding, CartError };
}
