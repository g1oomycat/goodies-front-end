import { axiosClassic } from '@/shared/api/interceptors';
import { buildUrlParams } from '@/shared/lib/build-url-params';
import { IGetAllReviewsInstResponse, IReviewsInstParams } from '../types';

class ReviewsInstService {
	private BASE_URL = 'reviews-instagram';

	async getAll(params: IReviewsInstParams) {
		const response = await axiosClassic.get<IGetAllReviewsInstResponse>(
			this.BASE_URL,
			{
				params: buildUrlParams(params),
			}
		);
		return response.data;
	}
}

export const reviewsInstService = new ReviewsInstService();
