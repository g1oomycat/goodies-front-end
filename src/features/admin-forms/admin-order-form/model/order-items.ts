import { IOrderForm, IOrderItemResponse } from '@/entities/orders';
import { IProductsResponse } from '@/entities/product';
import { Control, UseFormSetValue, useWatch } from 'react-hook-form';

export const useOrderItems = (
	setValue: UseFormSetValue<IOrderForm>,
	control: Control<any>
) => {
	const orderItems: IOrderItemResponse[] =
		useWatch({ control, name: 'orderItems' }) || [];

	const changeQuantity = (newQuantity: number, productId: string) => {
		setValue(
			'orderItems',
			orderItems.map(item =>
				item.productId === productId
					? {
							...item,
							quantity: newQuantity,
							totalPrice: newQuantity * item.unitPrice,
					  }
					: item
			)
		);
	};

	const deleteOrderItem = (productId: string) => {
		setValue(
			'orderItems',
			orderItems.filter(item => item.productId !== productId)
		);
	};

	const addOrderItem = (product: IProductsResponse) => {
		if (orderItems.some(item => item.productId === product.id)) return;

		const newItem: IOrderItemResponse = {
			id: '',
			orderId: '',
			product,
			originalPrice: product.oldPrice ?? product.price,
			productId: product.id,
			quantity: 1,
			totalDiscount: product.discount,
			totalOriginalPrice: product.price,
			totalPrice: product.price,
			unitPrice: product.price,
			createdAt: product.createdAt,
			updatedAt: product.updatedAt,
			discount: product.discount,
		};

		setValue('orderItems', [...orderItems, newItem]);
	};

	return {
		orderItems,
		changeQuantity,
		deleteOrderItem,
		addOrderItem,
	};
};
