import { showToast } from '@/features/show-custom-toaster';
import { handleAxiosError } from '@/shared/lib/handle-axios-error';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { cartService } from '../api';
import { ICartItemsUpdate } from '../types';

export function useCartUpdateProduct(isVisibleToast?: boolean) {
	const queryClient = useQueryClient();

	// Добавление в избранное
	const {
		mutate: updateCart,
		isPending: isAdding,
		error: CartError,
	} = useMutation({
		mutationKey: ['cartUpdateProduct'],
		mutationFn: (data: ICartItemsUpdate) => cartService.updateProduct(data),

		onSuccess: newCart => {
			queryClient.invalidateQueries({ queryKey: ['cart'] });
			if (isVisibleToast) {
				showToast({
					image: newCart.product.images[0],
					title: 'товар добавлен в корзину',
					subtitle: newCart.product.name,
					icon: 'CART',
				});
			}
		},

		onError: error => {
			// Если запрос провалился, откатываем к предыдущему состоянию
			handleAxiosError(error, 'обновление корзины', false);
		},
	});

	return { updateCart, isAdding, CartError };
}
