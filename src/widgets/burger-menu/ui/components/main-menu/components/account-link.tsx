'use client';
import { useAuthSideBarStore } from '@/shared/config/auth-side-bar-store';
import { useAuthStore } from '@/shared/config/auth-store';
import { getRouteAccount } from '@/shared/constants/router';
import { ButtonOrLinkArrow } from '@/shared/kit/button-or-link-arrow';
import { AccountIcon } from '@/shared/ui/icons/account';
import styles from '../styles.module.scss';

export const AccountLink = () => {
	const { openSideBar } = useAuthSideBarStore();
	const { data, isAuthenticated } = useAuthStore();
	return (
		<div className={styles.account}>
			{isAuthenticated ? (
				<ButtonOrLinkArrow
					type='link'
					link={getRouteAccount()}
					title={
						<>
							<span className={styles.acc_logo}>
								<AccountIcon />
							</span>
							<span
								className={styles.acc_link}
								style={{
									textTransform:
										data?.firstName && data.lastName ? 'none' : 'lowercase',
								}}
							>
								{data?.firstName && data.lastName
									? `${data?.firstName} ${data.lastName}`
									: 'мой кабинет'}
							</span>
						</>
					}
				/>
			) : (
				<ButtonOrLinkArrow
					type='button'
					action={() => openSideBar('auth')}
					title={
						<>
							<span className={styles.acc_logo}>
								<AccountIcon />
							</span>
							<span
								className={styles.acc_link}
								style={{
									textTransform: 'lowercase',
								}}
							>
								'Войти в аккаунт'
							</span>
						</>
					}
				/>
			)}
		</div>
	);
};
