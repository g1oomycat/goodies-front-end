'use client';

import { useMenuStore } from '@/shared/config/burger-menu-store';
import { useCartSideBarStore } from '@/shared/config/cart-side-bar-store';
import { getRouteMain } from '@/shared/constants/router';
import { useIsTop } from '@/shared/hooks/useIsTop';
import { MenuToggle } from '@/shared/ui/components/menu-toggle';
import classNames from 'classnames';
import { usePathname } from 'next/navigation';
import { LogoLink } from './logo-link';
import { HeaderNavBar } from './nav-bar';
import styles from './styles.module.scss';

export const Header = ({}) => {
	const isTop = useIsTop();
	const { openSideBar } = useCartSideBarStore();
	const { isOpen } = useMenuStore();

	const pathname = usePathname();

	return (
		<header
			className={classNames(
				styles.header,
				pathname !== getRouteMain()
					? styles.stickyHeader
					: isTop && !isOpen
					? styles.whiteBackground
					: ''
			)}
		>
			<div className='_cont_limit'>
				<div className={styles.body}>
					<div className={classNames(styles.logo, 'web-md')}>
						<LogoLink />
					</div>

					<div className='web-md' style={{ fontSize: '4rem' }}>
						<MenuToggle />
					</div>

					<HeaderNavBar openCartSideBar={openSideBar} />
				</div>
			</div>
		</header>
	);
};
