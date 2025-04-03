'use client';
import { useAuthSideBarStore } from '@/shared/config/auth-side-bar-store';
import { useAuthStore } from '@/shared/config/auth-store';
import { ButtonIcon } from '@/shared/ui/components/button-icon';
import { ReactNode } from 'react';

type Props = {
	icon: ReactNode; // Иконка, которая будет отображаться
	onClick: () => void; // Кнопка для авторизованных пользователей
};

export const AuthButton = ({ icon, onClick }: Props) => {
	const { openSideBar } = useAuthSideBarStore();
	const { isAuthenticated, isLoading } = useAuthStore();

	return (
		<ButtonIcon
			disabled={isLoading}
			onClick={() => (isAuthenticated ? onClick() : openSideBar('auth'))}
		>
			{icon}
		</ButtonIcon>
	);
};
