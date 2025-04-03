'use client';
import { UserRoleMeta } from '@/entities/user';
import { ThemeToggle } from '@/features/admin-theme-toggle';
import { useAuthStore } from '@/shared/config/auth-store';
import { getRouteAdminUserEdit, getRouteMain } from '@/shared/constants/router';
import { LinkCustom } from '@/shared/ui/components/link';
import { SkeletonMui } from '@/shared/ui/components/skeleton';
import classNames from 'classnames';
import styles from './styles.module.scss';
type Props = {};

export const Header = ({}: Props) => {
	const { data, isLoading } = useAuthStore();
	return (
		<header className={classNames(styles.root, 'admin-container')}>
			<div className={styles.body}>
				<div className={styles.header_block}>
					<div className={styles.item}>
						<span className='fs-s-3'>
							<LinkCustom textDecoration href={getRouteMain()}>
								перейти на сайт
							</LinkCustom>
						</span>
					</div>
				</div>
				<div className={styles.header_block}>
					<div className={styles.item}>
						<ThemeToggle height={25} />
					</div>
					<div className={styles.item}>
						<div className={styles.user_block}>
							<div className='fs-s-2'>
								{data && !isLoading ? (
									<LinkCustom
										textDecoration
										href={getRouteAdminUserEdit(data.id)}
									>
										{data.email}
									</LinkCustom>
								) : (
									<SkeletonMui width={150} />
								)}
							</div>
							<div className='fs-up-1'>
								{data && !isLoading ? (
									<span>{UserRoleMeta[data.role].label}</span>
								) : (
									<SkeletonMui width={100} />
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};
