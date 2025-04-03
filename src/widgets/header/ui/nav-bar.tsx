'use client';
import { AuthButton } from '@/features/auth-button/ui';
import { SearchButton } from '@/features/search-button';
import { getRouteAccount, getRouteFavorites } from '@/shared/constants/router';
import { LikeStrokeIcon } from '@/shared/ui/icons/like-stroke';
import { ShoppingBagIcon } from '@/shared/ui/icons/shopping-bag';

import { AuthButtonOrLink } from '@/features/auth-button-or-link';
import { AccountIcon } from '@/shared/ui/icons/account';

import { Badge } from '@/shared/kit/badge';
import { MenuToggle } from '@/shared/ui/components/menu-toggle';
import classNames from 'classnames';
import { useGetQuantityCart } from '../model/get-quantity-cart';
import { LogoLink } from './logo-link';
import styles from './styles.module.scss';

type Props = { openCartSideBar: () => void };

export const HeaderNavBar = ({ openCartSideBar }: Props) => {
	const quantity = useGetQuantityCart();

	return (
		<nav className={styles.navBar}>
			<ul className={styles.navList}>
				<li className='mob-md'>
					<MenuToggle type='mobile' />
				</li>

				<li>
					<SearchButton />
				</li>

				<li className={classNames(styles.logo_short, 'mob-md')}>
					<LogoLink length='short' />
				</li>

				<li>
					<AuthButtonOrLink
						ariaLabel='перейти в избранное'
						link={getRouteFavorites()}
						icon={<LikeStrokeIcon />}
					/>
				</li>

				<li className='web-md'>
					<AuthButtonOrLink
						ariaLabel='перейти в личный кабинет'
						link={getRouteAccount()}
						icon={<AccountIcon />}
					/>
				</li>

				<li>
					<AuthButton
						icon={
							<>
								<ShoppingBagIcon />
								<Badge count={quantity} />
							</>
						}
						onClick={openCartSideBar}
					/>
				</li>
			</ul>
		</nav>
	);
};
