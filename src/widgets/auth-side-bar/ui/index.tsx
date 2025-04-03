'use client';

import { AuthForm, AuthLayout } from '@/features/auth';
import { useAuthSideBarStore } from '@/shared/config/auth-side-bar-store';
import { SideBar } from '@/shared/kit/side-bar';
import { ButtonIcon } from '@/shared/ui/components/button-icon';
import { CloseIcon } from '@/shared/ui/icons/close';
import classNames from 'classnames';
import styles from './styles.module.scss';

export const AuthSideBar = () => {
	const { isOpen, closeSideBar, currentAuth, openSideBar } =
		useAuthSideBarStore();

	// Здесь вызываем функцию в renderContent правильно

	return (
		<SideBar
			closeMenu={closeSideBar}
			isOpen={isOpen}
			side='right'
			menuSize='middle'
			keyAnimate={currentAuth}
			portalChildren={
				<div className={classNames(styles.close)}>
					<ButtonIcon onClick={closeSideBar}>
						<CloseIcon />
					</ButtonIcon>
				</div>
			}
		>
			{currentAuth === 'registration' && (
				<AuthLayout changeForm={() => openSideBar('auth')} type='register'>
					<AuthForm closeSideBar={closeSideBar} type='register' />
				</AuthLayout>
			)}
			{currentAuth === 'auth' && (
				<AuthLayout changeForm={() => openSideBar('registration')} type='login'>
					<AuthForm closeSideBar={closeSideBar} type='login' />
				</AuthLayout>
			)}
		</SideBar>
	);
};
