// hooks/useWishlist.ts
import { useCartAddProduct, useCartUpdateProduct } from '@/entities/cart';

import { useAuthSideBarStore } from '@/shared/config/auth-side-bar-store';
import { useAuthStore } from '@/shared/config/auth-store';
import { useCartStore } from '@/shared/config/cart-store';
import { useEffect, useState } from 'react';

export function useBasket(productId: string) {
	const [isAdded, setIsAdded] = useState(false);
	const { openSideBar } = useAuthSideBarStore();
	const { isAuthenticated } = useAuthStore();
	const { addCart } = useCartAddProduct();
	const { updateCart } = useCartUpdateProduct();
	const { cart, isLoading } = useCartStore();

	// Обновляем состояние при изменении корзины
	useEffect(() => {
		const isInCart = cart?.result.orderItems?.some(
			cartItem => cartItem.productId === productId
		);
		setIsAdded(!!isInCart);
	}, [cart, productId]);

	// Обработка добавления/обновления товара в корзине
	const addProduct = () => {
		if (!isAuthenticated) {
			openSideBar('auth');
			return;
		}

		const currentCartItem = cart?.result.orderItems?.find(
			item => item.productId === productId
		);
		if (!currentCartItem) {
			// Добавление нового товара в корзину
			addCart({ productId: productId });
		} else {
			// Обновление существующего товара в корзине

			if (currentCartItem?.product.stock <= currentCartItem?.quantity) return;

			updateCart({
				productId: productId,
				quantity: currentCartItem.quantity + 1,
			});
		}
	};

	return { isAdded, addProduct, isLoading };
}
