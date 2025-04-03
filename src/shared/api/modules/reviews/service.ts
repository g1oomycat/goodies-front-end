import { axiosClassic, axiosWithAuth } from '../../interceptors';
import { IReviewsCreate, IReviewsResponse, IReviewsUpdate } from './types';

interface IGetReviewsParams {
	userId?: string;
	productId?: string;
	sortBy?: 'rating' | 'updatedAt';
	sortReviews?: 'asc' | 'desc';
}

class ReviewsService {
	private BASE_URL = 'reviews';

	async getReview(id: string) {
		const response = await axiosWithAuth.get<IReviewsResponse>(
			`${this.BASE_URL}/${id}`
		);
		return response;
	}

	async getReviewByProductId(productId: string) {
		const response = await axiosClassic.get<IReviewsResponse>(
			`${this.BASE_URL}/product/${productId}`
		);
		return response;
	}

	async getReviews(params: IGetReviewsParams = { sortReviews: 'asc' }) {
		const urlParams = new URLSearchParams();
		if (params.userId) urlParams.append('userId', params.userId);
		if (params.productId) urlParams.append('productId', params.productId);
		if (params.sortBy) urlParams.append('sortBy', params.sortBy);
		if (params.sortReviews) urlParams.append('sortReviews', params.sortReviews);

		const response = await axiosWithAuth.get<IReviewsResponse[]>(
			this.BASE_URL,
			{
				params: urlParams,
			}
		);
		return response;
	}

	async createReviews(data: IReviewsCreate) {
		const response = await axiosWithAuth.post<IReviewsResponse>(
			this.BASE_URL,
			data
		);
		return response;
	}

	async updateReviews(id: string, data: IReviewsUpdate) {
		const response = await axiosWithAuth.put<IReviewsResponse>(
			`${this.BASE_URL}/${id}`,
			data
		);
		return response.data;
	}

	async deleteReviews(id: string) {
		const response = await axiosWithAuth.delete<IReviewsResponse>(
			`${this.BASE_URL}/${id}`
		);
		return response;
	}
}

export const reviewsService = new ReviewsService();
