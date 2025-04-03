import {
	getRouteAccount,
	getRouteFavorites,
	getRouteOrders,
} from '@/shared/constants/router';
import classNames from 'classnames';
import { ReactNode } from 'react';
import { LinkItemMenuUserPanel } from './link-item';
import styles from './styles.module.scss';
type Props = {
	logOutAction: ReactNode;
};

export const MenuUserPanel = ({ logOutAction }: Props) => {
	return (
		<div className={styles.menu_column}>
			<div className={styles.body}>
				<div className={classNames(styles.title, 'fs-l-2 mb-20')}>
					мой кабинет
				</div>

				<nav className={'fs-l-3 gap-15 fw-500'} style={{ textAlign: 'end' }}>
					<LinkItemMenuUserPanel label='профиль' href={getRouteAccount()} />
					<LinkItemMenuUserPanel label='избранное' href={getRouteFavorites()} />
					<LinkItemMenuUserPanel label='заказы' href={getRouteOrders()} />

					{/* <ButtonOrLinkArrow
						title='профиль'
						type='link'
						link={getRouteAccount()}
					/>

					<ButtonOrLinkArrow
						title='избранное'
						type='link'
						link={getRouteFavorites()}
					/>
					<ButtonOrLinkArrow
						title='заказы'
						type='link'
						link={getRouteOrders()}
					/> */}
				</nav>
				<div className={'fs-20 mt-30 fs-m-2'} style={{ textAlign: 'end' }}>
					{logOutAction}
				</div>
			</div>
		</div>
	);
};
