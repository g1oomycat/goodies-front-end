import {
	getRouteAccount,
	getRouteFavorites,
	getRouteOrders,
} from '@/shared/constants/router';
import classNames from 'classnames';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';
import { SubMenuLinkItem } from './link-item';
import styles from './styles.module.scss';

type Props = {
	children: ReactNode;
};

export const SubMenu = ({ children }: Props) => {
	const pathname = usePathname();
	const labels = {
		[getRouteAccount()]: 'профиль',
		[getRouteFavorites()]: 'избранное',
		[getRouteOrders()]: 'заказы',
	};
	return (
		<div style={{ width: '100%', position: 'relative' }}>
			<div className={classNames(styles.title, 'mb-35')}>
				<h1>{labels[pathname]}</h1>
			</div>
			<div className={classNames(styles.menu, 'mb-15 mob-lg pt-10 pb-12')}>
				<nav className={classNames(styles.mini_menu, 'fs-l-1 gap-30')}>
					<SubMenuLinkItem
						href={getRouteAccount()}
						label={labels[getRouteAccount()]}
						pathname={pathname}
					/>
					<SubMenuLinkItem
						href={getRouteFavorites()}
						label={labels[getRouteFavorites()]}
						pathname={pathname}
					/>
					<SubMenuLinkItem
						href={getRouteOrders()}
						label={labels[getRouteOrders()]}
						pathname={pathname}
					/>
				</nav>
			</div>
			{children}
		</div>
	);
};
