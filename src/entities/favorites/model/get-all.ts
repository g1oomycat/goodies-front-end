import { useQuery } from '@tanstack/react-query';
import { favoritesService } from '../api';
import { IFavoritesParams } from '../types';

export const getAllFavorites = (params: IFavoritesParams) => {
	return useQuery({
		queryKey: ['get-all-favorites', { ...params }],
		queryFn: () =>
			favoritesService.getFavorites({
				...params,
			}),
		refetchOnWindowFocus: false,
		staleTime: 1000 * 60 * 60,
		// Один useEffect для обновления состояния
	});
};
