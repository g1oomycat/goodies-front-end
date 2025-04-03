'use client';

import { EnumUserRole, IUsersResponse, usersService } from '@/entities/user';
import { useAuthStore } from '@/shared/config/auth-store';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useLayoutEffect } from 'react';

export function getUserSelf() {
	const { setAuthenticated, setRole, isAuthenticated, setData, setLoading } =
		useAuthStore();

	// Запрос данных пользователя
	const { data, isSuccess, isError, error, isLoading } =
		useQuery<IUsersResponse>({
			queryKey: ['get-user-self'],
			queryFn: () => usersService.getUserSelf(),
			refetchOnWindowFocus: true, // Обновление при фокусе на вкладке
			staleTime: 1000 * 60 * 15, // Данные считаются актуальными 15 минут
			gcTime: 1000 * 60 * 30, // Держать в кэше 10 минут после неиспользования
			refetchInterval: 1000 * 60 * 15, // Автоматическое обновление каждые 15 минут
		});

	// Устанавливаем загрузку
	useLayoutEffect(() => {
		setLoading(isLoading);
	}, [isLoading]);

	// Обработка успешного ответа
	useLayoutEffect(() => {
		if (isSuccess && data) {
			if (data.id) {
				localStorage.setItem('_uid', String(data.id));
			} else {
				localStorage.removeItem('_uid');
			}
			setAuthenticated(true);
			setRole(data.role);
			setData(data);
		}
	}, [isSuccess, data]);

	// Обработка ошибки
	useEffect(() => {
		if (isError) {
			console.error('Ошибка при получении пользователя:', error);
			setAuthenticated(false);
			setRole(EnumUserRole.USER);
			setData(undefined);
			localStorage.removeItem('_uid');
		}
	}, [isError]);

	return { data, isSuccess, isError, error, isLoading };
}
