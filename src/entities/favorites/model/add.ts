import {
	favoritesService,
	IFavoritesCreate,
	IFavoritesResponse,
} from '@/entities/favorites';
import { showToast } from '@/features/show-custom-toaster';
import { useFavoriteStore } from '@/shared/config/favorite-store';
import { handleAxiosError } from '@/shared/lib/handle-axios-error';
import { mockProduct } from '@/shared/lib/mock/product';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export function useFavoriteAdd() {
	const queryClient = useQueryClient();
	const { setFavorite, favorite } = useFavoriteStore();

	// Добавление в избранное
	const {
		mutate: addFavorite,
		isPending: isAdding,
		error: addError,
	} = useMutation({
		mutationKey: ['addFavorite'],
		mutationFn: (data: IFavoritesCreate) =>
			favoritesService.createFavorite(data),
		onMutate: async newFavorite => {
			await queryClient.cancelQueries({ queryKey: ['favorites'] });

			// Получаем текущий кэш избранного
			const previousFavorites = favorite;

			// Оптимистичное обновление кэша

			if (favorite) {
				const fakeFavorite: IFavoritesResponse = {
					...newFavorite,
					id: 'temp-id', // Временный ID, пока не пришёл настоящий с бэка
					userId: 'current-user', // Неважно, но пусть будет
					createdAt: '',
					updatedAt: '',
					product: mockProduct,
				};

				setFavorite({
					...favorite,
					result: [...(favorite.result || []), fakeFavorite],
					totalResult: favorite.totalResult + 1,
					totalCount: favorite.totalCount + 1,
				});
			}

			// Возвращаем старый список избранного, чтобы можно было откатить при ошибке
			return { previousFavorites };
		},
		onSuccess: newFavorite => {
			if (!favorite?.result) return;

			setFavorite({
				...favorite,
				result: favorite.result.map(fav =>
					fav.id === 'temp-id' ? newFavorite : fav
				),
			});
			showToast({
				image: newFavorite.product.images[0],
				title: 'товар добавлен в избранное',
				subtitle: newFavorite.product.name,
				icon: 'FAV',
			});
		},

		onError: (error, _, context) => {
			// Если запрос провалился, откатываем к предыдущему состоянию
			if (context?.previousFavorites) {
				queryClient.setQueryData(['favorites'], context.previousFavorites);
			}
			handleAxiosError(error, 'добавление в избранное', false);
		},
	});

	return { addFavorite, isAdding, addError };
}
