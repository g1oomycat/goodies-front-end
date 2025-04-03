import { ICartResponse } from '@/entities/cart';
import { queryClient } from '@/shared/config/react-query';
import { useEffect, useState } from 'react';

export const useGetQuantityCart = () => {
	const [quantity, setQuantity] = useState(0);
	useEffect(() => {
		const cartData = queryClient.getQueryData<ICartResponse>(['cart']);
		setQuantity(cartData?.totalQuantity ?? 0);

		// Подписка на изменения корзины
		const unsubscribe = queryClient.getQueryCache().subscribe(event => {
			if (event.query.queryKey[0] === 'cart') {
				setQuantity(
					(event.query.state?.data as ICartResponse)?.totalQuantity ?? 0
				);
			}
		});

		// Очистка подписки
		return () => unsubscribe();
	}, []);
	return quantity;
};
