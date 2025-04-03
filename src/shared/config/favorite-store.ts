import { IGetAllFavoritesResponse } from '@/entities/favorites';
import { create } from 'zustand';

interface FavoriteState {
	favorite?: IGetAllFavoritesResponse;
	isLoading: boolean;
	setLoading: (isLoading: boolean) => void;
	setFavorite: (favorite?: IGetAllFavoritesResponse) => void;
}

export const useFavoriteStore = create<FavoriteState>(set => ({
	favorite: undefined,
	isLoading: true,
	setLoading: isLoading => set({ isLoading }),
	setFavorite: favorite => set({ favorite }),
}));
