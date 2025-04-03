'use client';

import { useAuthStore } from '@/shared/config/auth-store';
import { useFavoriteStore } from '@/shared/config/favorite-store';
import { handleAxiosError } from '@/shared/lib/handle-axios-error';
import { useQuery } from '@tanstack/react-query';
import { PropsWithChildren, useEffect } from 'react';
import { favoritesService } from '../api';
import { IGetAllFavoritesResponse } from '../types';

export function FavoritesProvider({ children }: PropsWithChildren) {
	const { isAuthenticated } = useAuthStore();
	const { setLoading, setFavorite } = useFavoriteStore();
	// Запрос избранного, но только после успешной авторизации
	const { data, isLoading, isSuccess, isError, error } =
		useQuery<IGetAllFavoritesResponse>({
			queryKey: ['favorites'],
			queryFn: () => favoritesService.getFavorites({ page: 1, limit: 0 }),
			staleTime: 5 * 60 * 1000, // 5 минут
			refetchOnWindowFocus: true,
			refetchInterval: isAuthenticated ? 10 * 60 * 1000 : false, // Раз в 10 мин (если авторизован)

			enabled: isAuthenticated, // Запрос только после авторизации
		});
	// Один useEffect для обновления состояния
	useEffect(() => {
		setLoading(isLoading);

		if (isSuccess) {
			setFavorite(data);
		} else if (isError) {
			handleAxiosError(error, 'загрузке избранных', false);
			setFavorite(undefined);
		}
	}, [isLoading, isSuccess, isError, data, error]);
	return <>{children}</>;
}
