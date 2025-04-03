'use client';
import { useAuthStore } from '@/shared/config/auth-store';
import { useCartStore } from '@/shared/config/cart-store';
import { handleAxiosError } from '@/shared/lib/handle-axios-error';
import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { cartService } from '../api';
import { ICartResponse } from '../types';

export const useCartQuery = () => {
	const { isAuthenticated } = useAuthStore();
	const { setCart, setLoading } = useCartStore();
	const { data, isSuccess, isError, error, isLoading } =
		useQuery<ICartResponse>({
			queryKey: ['cart'],
			queryFn: () => cartService.getCart(),
			enabled: isAuthenticated, // Запрос только если сайдбар открыт
			staleTime: 5 * 60 * 1000, // 5 минут
			refetchInterval: isAuthenticated ? 15 * 60 * 1000 : false, // Раз в 15 мин
			gcTime: 30 * 60 * 1000, // Кеш очистится через 30 минут
			refetchOnWindowFocus: true, // Обновление при переключении вкладок
		});

	// Один useEffect для обновления состояния
	useEffect(() => {
		setLoading(isLoading);

		if (isSuccess) {
			setCart(data);
		} else if (isError) {
			handleAxiosError(error, 'загрузки корзины', false);
			setCart(undefined);
		}
	}, [isLoading, isSuccess, isError, data, error]);

	return { data, isSuccess, isError, error, isLoading };
};
