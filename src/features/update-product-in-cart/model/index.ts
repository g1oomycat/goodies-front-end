import { ICartItemsUpdate, useCartUpdateProduct } from '@/entities/cart';

export function updateItemFromBasket(data: ICartItemsUpdate) {
	const { updateCart } = useCartUpdateProduct();
	// Обработка добавления/обновления товара в корзине
	const updateProduct = () => {
		updateCart(data);
	};

	return { updateProduct };
}
