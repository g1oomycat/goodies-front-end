import {
	IReviewsInstParams,
	reviewsInstService,
} from '@/entities/reviews-inst';
import { useQuery } from '@tanstack/react-query';

export const getAllReviewsInst = (params: IReviewsInstParams) => {
	return useQuery({
		queryKey: ['get-all-reviews-inst', { ...params }],
		queryFn: () =>
			reviewsInstService.getAll({
				...params,
			}),
		staleTime: 30 * 1000, // 30 секунд
		gcTime: 30 * 1000, // 5 минут
	});
};
