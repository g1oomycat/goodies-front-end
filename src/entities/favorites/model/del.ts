import { favoritesService, IFavoritesDelete } from '@/entities/favorites';
import { useFavoriteStore } from '@/shared/config/favorite-store';
import { handleAxiosError } from '@/shared/lib/handle-axios-error';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export function useFavoriteDel() {
	const queryClient = useQueryClient();
	const { setFavorite, favorite } = useFavoriteStore();
	// Удаление из избранного
	const {
		mutate: removeFavorite,
		isPending: isRemoving,
		error: removeError,
	} = useMutation({
		mutationKey: ['removeFavorite'],
		mutationFn: (data: IFavoritesDelete) =>
			favoritesService.deleteFavorite(data),
		onMutate: async data => {
			await queryClient.cancelQueries({ queryKey: ['favorites'] });

			// Получаем текущий кэш избранного
			const previousFavorites = favorite;

			// Оптимистичное удаление из кэша
			if (favorite) {
				setFavorite({
					...favorite,
					result:
						favorite.result.filter(fav => fav.productId !== data.productId) ||
						[],
					totalCount: Math.max((favorite.totalCount ?? 0) - 1, 0),
					totalResult: Math.max((favorite.totalResult ?? 0) - 1, 0),
					page: favorite.page ?? 0,
					limit: favorite.limit ?? 0,
				});
			}

			// Возвращаем старый список избранного для возможного отката
			return { previousFavorites };
		},
		onError: (error, __, context) => {
			// Если запрос провалился, откатываем к предыдущему состоянию
			if (context?.previousFavorites) {
				queryClient.setQueryData(['favorites'], context.previousFavorites);
			}
			handleAxiosError(error, 'удаление из избранного', false);
		},
	});

	return { removeFavorite, isRemoving, removeError };
}
