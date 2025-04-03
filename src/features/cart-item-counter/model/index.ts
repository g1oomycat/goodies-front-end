import { useCartUpdateProduct } from '@/entities/cart';

export function useCounterCart(productId: string, stock: number) {
	const { updateCart } = useCartUpdateProduct();
	const handleUpdate = (newQuantity: number) => {
		if (newQuantity < 1 || newQuantity > stock) return;
		updateCart({ productId, quantity: newQuantity });
	};
	return { handleUpdate };
}
