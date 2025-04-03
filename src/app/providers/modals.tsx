'use client';
import { useAuthSideBarStore } from '@/shared/config/auth-side-bar-store';
import { useMenuStore } from '@/shared/config/burger-menu-store';
import { useCartSideBarStore } from '@/shared/config/cart-side-bar-store';
import { useLoadingGlobalStore } from '@/shared/config/loading-global-store';
import { usePathname } from 'next/navigation';
import { PropsWithChildren, useLayoutEffect } from 'react';

export function ResetModals({ children }: PropsWithChildren) {
	const pathname = usePathname();

	const { closeSideBar: closeCart } = useCartSideBarStore();
	const { closeSideBar: closeAuth } = useAuthSideBarStore();
	const { setLoading } = useLoadingGlobalStore();
	const { closeMenu } = useMenuStore();
	useLayoutEffect(() => {
		closeCart();
		closeMenu();
		closeAuth();
		setLoading(true);
		document.body.classList.remove('modal-open');
		document.querySelector('header')?.classList.remove('modal-open');
	}, [pathname]);
	return <>{children}</>;
}
