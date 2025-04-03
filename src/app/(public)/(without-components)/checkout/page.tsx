'use client';
import { useAuthStore } from '@/shared/config/auth-store';
import { useCartStore } from '@/shared/config/cart-store';
import { useLoadingGlobalStore } from '@/shared/config/loading-global-store';
import { getRouteMain } from '@/shared/constants/router';
import { CheckoutSection } from '@/widgets/checkout';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Checkout() {
	const { push } = useRouter();
	const { data } = useAuthStore();
	const { cart } = useCartStore();
	const { setLoading } = useLoadingGlobalStore();

	useEffect(() => {
		if (cart && data) setLoading(false);
	}, [data, cart]);
	if (!data || !cart) {
		return null;
	}
	if (
		!cart.result.orderItems.length ||
		cart.updatesList.length ||
		cart.deletesList.length
	) {
		push(getRouteMain());
	}

	return <CheckoutSection cart={cart} user={data} />;
}
