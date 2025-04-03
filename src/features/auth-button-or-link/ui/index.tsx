'use client';
import { useAuthSideBarStore } from '@/shared/config/auth-side-bar-store';
import { useAuthStore } from '@/shared/config/auth-store';
import { ButtonIcon } from '@/shared/ui/components/button-icon';
import { LinkCustom } from '@/shared/ui/components/link';
import { LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

type Props = {
	icon: ReactNode; // Иконка, которая будет отображаться
	link: LinkProps['href']; // Ссылка для авторизованных пользователей
	ariaLabel?: string; // Текст для атрибута aria-label
};

export const AuthButtonOrLink = ({ icon, link, ariaLabel }: Props) => {
	const { openSideBar } = useAuthSideBarStore();
	const { isAuthenticated, isLoading } = useAuthStore();
	const pathname = usePathname();

	return (
		<>
			{isAuthenticated ? (
				<LinkCustom
					href={link}
					childrenType='icon'
					ariaLabel={ariaLabel}
					style={{ color: pathname === link ? 'var(--color-red)' : '' }}
				>
					{icon}
				</LinkCustom>
			) : (
				<ButtonIcon disabled={isLoading} onClick={() => openSideBar('auth')}>
					{icon}
				</ButtonIcon>
			)}
		</>
	);
};
