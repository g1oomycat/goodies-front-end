import { axiosWithAuth } from '@/shared/api/interceptors';
import { buildUrlParams } from '@/shared/lib/build-url-params';
import {
	IFavoritesCreate,
	IFavoritesDelete,
	IFavoritesParams,
	IFavoritesResponse,
	IGetAllFavoritesResponse,
} from '../types';

class FavoritesService {
	private BASE_URL = 'favorites';

	async getFavorites(params: IFavoritesParams) {
		const response = await axiosWithAuth.get<IGetAllFavoritesResponse>(
			this.BASE_URL,
			{
				params: buildUrlParams(params),
			}
		);
		return response.data;
	}

	async createFavorite(data: IFavoritesCreate) {
		const response = await axiosWithAuth.post<IFavoritesResponse>(
			`${this.BASE_URL}/add-product`,
			data
		);
		return response.data;
	}

	async deleteFavorite(data: IFavoritesDelete) {
		const response = await axiosWithAuth.post<IFavoritesResponse>(
			`${this.BASE_URL}/del-product`,
			data
		);
		return response.data;
	}
}

export const favoritesService = new FavoritesService();
