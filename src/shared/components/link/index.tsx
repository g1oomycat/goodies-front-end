'use client';

import { useAuthSideBarStore } from '@/shared/config/auth-side-bar-store';
import { useMenuStore } from '@/shared/config/burger-menu-store';
import { useCartSideBarStore } from '@/shared/config/cart-side-bar-store';
import NextLink from 'next/link';
import { useRouter } from 'next/navigation';
import { useTransition } from 'react';

export function Link({
	href,
	children,
	replace,
	...rest
}: Parameters<typeof NextLink>[0]) {
	const router = useRouter();
	const [isPending, startTransition] = useTransition();

	const closeCartSideBar = useCartSideBarStore(state => state.closeSideBar);
	const closeMenu = useMenuStore(state => state.closeMenu);
	const closeAuthSideBar = useAuthSideBarStore(state => state.closeSideBar);

	if (isPending) {
		return <>Pending navigation</>;
	}

	return (
		<NextLink
			href={href}
			onClick={e => {
				e.preventDefault();

				// Закрываем попапы перед навигацией
				closeCartSideBar();
				closeMenu();
				closeAuthSideBar();

				startTransition(() => {
					const url = href.toString();
					if (replace) {
						router.replace(url);
					} else {
						router.push(url);
					}
				});
			}}
			{...rest}
		>
			{children}
		</NextLink>
	);
}
