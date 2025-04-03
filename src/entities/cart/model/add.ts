import { IOrderItemResponse } from '@/entities/orders';
import { showToast } from '@/features/show-custom-toaster';
import { useCartStore } from '@/shared/config/cart-store';
import { handleAxiosError } from '@/shared/lib/handle-axios-error';
import { mockProduct } from '@/shared/lib/mock/product';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { cartService } from '../api';
import { ICartItemsCreate } from '../types';

export function useCartAddProduct() {
	const queryClient = useQueryClient();
	const { cart, setCart } = useCartStore();

	const {
		mutate: addCart,
		isPending: isAdding,
		error: CartError,
	} = useMutation({
		mutationFn: (data: ICartItemsCreate) => cartService.addProduct(data),

		onMutate: async newCartItem => {
			await queryClient.cancelQueries({ queryKey: ['cart'] });

			const previousCart = cart;

			// Оптимистичное обновление кэша

			if (cart) {
				const fakeCartItem: IOrderItemResponse = {
					id: `temp-${Date.now()}`, // Уникальный временный ID
					createdAt: '',
					updatedAt: '',
					orderId: '',
					quantity: 1,
					totalPrice: 1,
					totalDiscount: 1,
					originalPrice: 1,
					totalOriginalPrice: 1,
					unitPrice: 1,
					discount: 1,
					...newCartItem,
					product: { ...mockProduct },
				};
				setCart({
					...cart,
					totalQuantity: cart.totalQuantity + 1,
					result: {
						...cart.result,
						orderItems: [...cart.result.orderItems, fakeCartItem],
						quantity: cart.result.quantity + 1,
					},
				});
			}

			return { previousCart };
		},

		onSuccess: newCart => {
			queryClient.invalidateQueries({ queryKey: ['cart'] });
			showToast({
				image: newCart.product.images[0],
				title: 'товар добавлен в корзину',
				subtitle: newCart.product.name,
				icon: 'CART',
			});
		},

		onError: (error, __, context) => {
			// Если запрос провалился, откатываем состояние
			if (context?.previousCart) {
				setCart(context.previousCart);
			}
			handleAxiosError(error, 'добавление в корзину', false);
		},
	});

	return { addCart, isAdding, CartError };
}
