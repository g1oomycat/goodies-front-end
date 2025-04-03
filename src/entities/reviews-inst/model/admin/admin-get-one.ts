import { useQuery } from '@tanstack/react-query';
import { adminReviewsInstService } from '../../api';

export const getOneReviewInstAdmin = (id: string) => {
	return useQuery({
		queryKey: ['get-one-review-inst-by-id', id],
		queryFn: () => adminReviewsInstService.getReviewsInst(id),

		refetchOnWindowFocus: false,
	});
};
