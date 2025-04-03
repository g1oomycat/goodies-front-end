// hooks/useWishlist.ts

import { useFavoriteAdd } from '@/entities/favorites/model/add';
import { useFavoriteDel } from '@/entities/favorites/model/del';
import { useAuthSideBarStore } from '@/shared/config/auth-side-bar-store';
import { useAuthStore } from '@/shared/config/auth-store';
import { useFavoriteStore } from '@/shared/config/favorite-store';
import { useEffect, useState } from 'react';

export function useWishlist(productId: string) {
	const { openSideBar } = useAuthSideBarStore();
	const { isAuthenticated } = useAuthStore();
	const { isLoading, favorite } = useFavoriteStore();
	const { addFavorite } = useFavoriteAdd();
	const { removeFavorite } = useFavoriteDel();
	const [isAdded, setIsAdded] = useState(false);

	// Обновляем состояние при изменении избранного
	useEffect(() => {
		const isInFavorite = favorite?.result?.some(
			favoriteItem => favoriteItem.productId === productId
		);
		setIsAdded(!!isInFavorite);
	}, [favorite, productId]);
	// Добавление или удаление товара из избранного
	const toggleFavorite = () => {
		if (!isAuthenticated) {
			openSideBar('auth');
			return;
		}

		if (isAdded) {
			// Если товар уже в избранном, удаляем его

			removeFavorite({ productId: productId });
		} else {
			// Если товар не в избранном, добавляем его
			addFavorite({ productId: productId });
		}
	};

	return { isAdded, toggleFavorite, isLoading };
}
