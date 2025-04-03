'use client';
import { useAuthSideBarStore } from '@/shared/config/auth-side-bar-store';
import { useMenuStore } from '@/shared/config/burger-menu-store';
import { useCartSideBarStore } from '@/shared/config/cart-side-bar-store';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export function RouteChangeEffectProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const pathname = usePathname();

	const closeCartSideBar = useCartSideBarStore(state => state.closeSideBar);
	const closeMenu = useMenuStore(state => state.closeMenu);
	const closeAuthSideBar = useAuthSideBarStore(state => state.closeSideBar);

	useEffect(() => {
		const handleUnload = () => console.log('hello');

		window.addEventListener('beforeunload', handleUnload);

		return () => {
			window.removeEventListener('beforeunload', handleUnload);
		};
	}, []);
	useEffect(() => {
		closeCartSideBar();
		closeMenu();
		closeAuthSideBar();
		document.body.classList.remove('modal-open');
		document.querySelector('header')?.classList.remove('modal-open');
	}, [pathname]);

	return <>{children}</>;
}
