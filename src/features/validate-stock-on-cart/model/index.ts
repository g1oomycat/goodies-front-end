'use client';

import { ICartResponse } from '@/entities/cart';
import { showToast } from '@/features/show-custom-toaster';
import { getRouteCheckout, getRouteMain } from '@/shared/constants/router';
import { redirect } from 'next/navigation';

export function validateStockOnCart(data: ICartResponse) {
	const validCart =
		!data?.result.orderItems?.length ||
		!!data?.updatesList?.length ||
		!!data?.deletesList?.length;

	const goToCheckout = () => {
		if (validCart) {
			showToast({
				bgColor: 'red',
				bgText: 'black',
				title: 'Ошибка',
				subtitle:
					'Нельзя оформить заказ: корзина пуста или изменения не применены.',
				icon: 'WARNING',
			});
			return;
		}

		redirect(getRouteCheckout());
	};
	const validateCheckout = () => {
		if (validCart) {
			redirect(getRouteMain());
		}
	};

	return { goToCheckout, validateCheckout, data };
}
