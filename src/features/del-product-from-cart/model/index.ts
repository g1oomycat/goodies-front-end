// hooks/useWishlist.ts
import { useCartDelProduct } from '@/entities/cart';

export function delItemFromBasket(productId: string) {
	const { mutate, isPending } = useCartDelProduct();
	// Обработка добавления/обновления товара в корзине

	const delProduct = () => {
		mutate({ productId });
	};

	return { delProduct, isPending };
}
