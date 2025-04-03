'use client';
import { LogOutOfAccountButton } from '@/features/log-out-of-account/ui/public';

import LoadingGlobal from '@/shared/components/loading-global';
import { MenuUserPanel, SubMenu } from '@/widgets/menu-user-panel';
import classNames from 'classnames';
import styles from './styles.module.scss';

export default function Layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<section
				className={classNames(styles.root, '_cont_limit_mini ', 'mb-100 mt-45')}
			>
				<div className={classNames(styles.wrapper)}>
					<MenuUserPanel
						logOutAction={<LogOutOfAccountButton children={'выйти'} />}
					/>
					<SubMenu>{children}</SubMenu>
				</div>
			</section>
			<LoadingGlobal />
		</>
	);
}
