'use client';

import { PropsWithChildren } from 'react';
import { useCartQuery } from '../../entities/cart/model/get';

export function CartProvider({ children }: PropsWithChildren) {
	useCartQuery();

	return <>{children}</>;
}
