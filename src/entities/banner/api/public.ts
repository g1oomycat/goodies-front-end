import { axiosClassic } from '@/shared/api/interceptors';
import { buildUrlParams } from '@/shared/lib/build-url-params';
import { IBannerParams, IGetAllBannerResponse } from '../types';

class BannerService {
	private BASE_URL = 'banners';

	async getAll(params: IBannerParams) {
		const response = await axiosClassic.get<IGetAllBannerResponse>(
			this.BASE_URL,
			{
				params: buildUrlParams(params),
			}
		);
		return response.data;
	}
}

export const bannerService = new BannerService();
