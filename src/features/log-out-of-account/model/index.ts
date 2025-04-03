'use client';

import { logoutUser } from '@/entities/auth';
import { EnumUserRole } from '@/entities/user';
import { useAuthStore } from '@/shared/config/auth-store';
import { queryClient } from '@/shared/config/react-query';
import { useRouter } from 'next/navigation';

export function useLogout(isAdmin = true) {
	const { setAuthenticated, setRole, setData } = useAuthStore();
	const router = useRouter();
	const { mutate, isPending } = logoutUser(isAdmin);

	// Функция выхода
	const logoutHandler = (homeLink: string) => {
		mutate(undefined, {
			onSuccess: () => {
				queryClient.clear();
				localStorage.removeItem('_uid');
				setAuthenticated(false);
				setRole(EnumUserRole.USER);
				setData(undefined);
				// Обновляем URL и перенаправляем
				window.history.pushState(null, '', homeLink);
				window.history.replaceState(null, '', homeLink);
				window.location.replace(homeLink);
				router.push(homeLink);
			},
		});
	};

	return { logoutHandler, isPending };
}
